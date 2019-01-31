

function openDatabase () {
  // if `flask-form` does not already exist in our browser (underour site), it is created
  var indexedDBOpenRequest = indexedDB.open('iat',
  2)
  indexedDBOpenRequest.onerror = function (error) {
    // error creating db
    console.error('IndexedDB error:', error)
  }
 indexedDBOpenRequest.onupgradeneeded = function (event) {
   // This should only executes if there's a need to 
   // create/update db.
 var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  var objectStore = db.createObjectStore("customerdata", {
    autoIncrement:  true, keyPath: 'id' });
 }
  // This will execute each time the database is opened.
  indexedDBOpenRequest.onsuccess = function () {
    our_db = this.result
  }
}
var our_db="iat";
openDatabase();

var form_data;

  self.addEventListener('message', function (event) {
  console.log('form data', event.data)
  if (event.data.hasOwnProperty('form_data')) {
    // receives form data from script.js upon submission
    form_data = event.data.form_data
  }
});




  self.addEventListener('fetch', function(event) {
  // every request from our site, passes through the fetch handler
  // I have proof
  console.log('I am a request with url:bhakk ',
   event.request.clone().url);

if (event.request.method === 'GET') {
    event.respondWith(
      // check all the caches in the browser and find
      // out whether our request is in any of them
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            // if we are here, that means there's a match
            //return the response stored in browser
            return response;
          }
          // no match in cache, use the network instead
          return fetch(event.request);
        }
      )
    );
  } else if (event.request.clone().method === 'POST') {
    // attempt to send request normally
    
    console.log('form_datayo', form_data)
    event.respondWith(fetch(event.request.clone()).catch(function (error) {
      // only save post requests in browser, if an error occurs
       if(event.request.clone().url=='http://localhost/kill')
      savePostRequests(event.request.clone().url, form_data)
    }))
  }
  
// if(event.request.url=='http://localhost/')
//   	if(form_data['online']==false)
//        savePostRequests(event.request.clone().url, form_data);

// console.log("kmmc");


   

  	
    // attempt to send request normally
    // event.respondWith(fetch(event.request.clone()).catch(function
    // (error) {
 
    //   // only save post requests in browser, if an error occurs
     
    // }))
  

});





  function getObjectStore (storeName, mode) {
  // retrieve our object store
  return our_db.transaction(storeName,mode
   ).objectStore(storeName)
}
function savePostRequests (url, payload) {
  // get object_store and save our payload inside it
  var request = getObjectStore("customerdata", 'readwrite').add(
    payload
  )
  request.onsuccess = function (event) {
    console.log('a new pos_ request has been added to indexedb')
  }
  request.onerror = function (error) {
    console.error(error)
  }
}