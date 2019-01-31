

 var data = {
    
    name:'name',
    age:'age',
    
    gender:"ss",
    
  }
     

function submitFunction (event) {
  
event.preventDefault()
  data.name = $('#Name').val();
  data.age = $('#Age').val();
  data.gender = $('#Gender').val();
  
  console.log('values,', data);

//   $.ajaxSetup({
//   headers: {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//   }
// });
  
 $.ajax({
    type: "POST",
    url: '/kill',
    
    data: data,
    beforeSend: function()
    {
     $('#load').removeClass('d-none');
   console.log("working");
    },
    success: function () {
      console.log('data sent to server successfully')

      $('#success').removeClass('d-none');
       $('#load').addClass('d-none');
      $('#Name').val('');
      $('#Age').val('');
      $('#Gender').val('');
    },
    

    error: function(e,r)
    {
      console.log('not send'+r);
          
       $('#success').removeClass('d-none').html('No Internet connection!!!.. Data saved to local storage');
        $('#load').addClass('d-none');
      $('#Name').val('');
      $('#Age').val('');
      $('#Gender').val('');
    }
  });



// $.ajax({
    
//     type:'head',
//      url:'https://jsonplaceholder.typicode.com/todos/1',
//      // Notice! JSONP <-- P (lowercase)
//      success:function(json){
//          // do stuff with json (in this case an array)
//          alert("Success");

//          data = {
//     name: name,
//     age: age,
//     gender: gender,
  
//     online:true
    
//   }
//      },
//      error:function(){
//          alert("Error");

//              data = {
//     name: name,
//     age: age,
//     gender: gender,
  
//     online:false
    
//   }

//      },
//      timeout:1000      
// });



  // data = {
  //   name: name,
  //   age: age,
  //   gender: gender,
  //   _token: '{!! csrf_token() !!}',
  //   online:true
    
  // }
 
  // send  to server
  
  var msg = {
  'form_data': data
}
navigator.serviceWorker.register('service-worker.js').then(function(worker){



  worker.active.postMessage(msg);
})

return false;
}


  

//   $.ajax({
    
//     type:'head',
//      url:'https://jsonplaceholder.typicode.com/todos/1',
//      // Notice! JSONP <-- P (lowercase)
//      success:function(json){
//          // do stuff with json (in this case an array)
//          alert("Success");

//          data.online=true; 
   
//      },
//      error:function(){
//          alert("Error");

//            data.online=false;

//      },
//      timeout:1000      
// });




  
