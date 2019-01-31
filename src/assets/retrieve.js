
var myRecord;

$.ajax({
    type: "POST",
    url: '/yo',
    
   
   
    success: function () {
      console.log('show details')
     
      $('#details').removeClass('d-none');
     
       

     
      
    },
    

    error: function(e,r)
    {
      console.log('not send'+r);

        $('#details').addClass('d-none');
          
      
     
    }
  });

function submitonnet()
{
console.log(myRecord);
  
//   $.ajaxSetup({
//   headers: {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//   }
// });



  
var data={
  'mydata': myRecord
}

console.log(data);
 $.ajax({
    type: "POST",
    url: '/killer',
   beforeSend: function()
    {
     $('#load').removeClass('d-none');
   console.log("working");
    },
   
    data: data,
    success: function () {
      console.log('data sent to server successfully')

      $('#success').removeClass('d-none');
       $('#load').addClass('d-none');

      deletedatabase();
      
    },
    

    error: function(e,r)
    {
      console.log('not send'+r);
          
       $('#success').removeClass('d-none').html('No Internet connection!!!.. Could not upload data');
        $('#load').addClass('d-none');
     
    }
  });

}



var DBOpenRequest = window.indexedDB.open("iat", 2);



DBOpenRequest.onsuccess = function(event) {
 
 
    
  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;
    
  // Run the getData() function to get the data from the database
  getData();
};

function getData() {
  // open a read/write db transaction, ready for retrieving the data
  var transaction = db.transaction(['customerdata'], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    
  };


  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction not opened due to error: ' + transaction.error + '</li>';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("customerdata");

  // Make a request to get a record by key from the object store
  var objectStoreRequest = objectStore.getAll();

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our request
   

     myRecord = objectStoreRequest.result;
     var html= '<table class="table"> <thead class="thead-dark"> <tr><th scope="col">Name</th><th scope="col">Age</th><th scope="col">Gender</th> <th scope="col">Options</th>  </tr></thead><tbody>';
  //
myRecord.forEach(function(element)
{
  html+='<tr>'+
      '<td>'+element.name+'</td>'+
      '<td>'+element.age+'</td>'+
      '<td>'+element.gender+'</td>'+
      '<td><button class="btn btn-success mr-3">Edit</button><button class="btn btn-danger">Delete</button></td>'+



    '</tr>'






})

html+= '</tbody>'+
'</table>';

    console.log(html);

     $("#note").html(html);
  };



};



   
 
 function deletedatabase()
 {

  
  // open a read/write db transaction, ready for clearing the data
  var transaction = db.transaction(["customerdata"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    
  };

  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction not opened due to error: ' + transaction.error + '</li>';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("customerdata");

  // Make a request to clear all the data out of the object store
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our request
    $('#success').html("Succesfully added to the original database and deleted from local");
  $('#note').html("<h1>No data saved</h1>");

  };
}



 