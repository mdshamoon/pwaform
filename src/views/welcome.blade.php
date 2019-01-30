@extends('layouts.app')

@section('content')

  <div class="alert alert-primary d-none" role="alert" id="success">
 Succesfully added
</div>
<a href="/second" class="btn btn-primary float-right mr-5">Details page</a>
<div class="container mt-5">


<div class="spinner-border text-primary d-none" role="status" id="load">
  <span class="sr-only">Loading...</span>
</div>

  <div class="row justify-content-center">
    <div class="col-md-4 ">
<form onsubmit="return submitFunction(event)">

  {{ csrf_field() }}
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter name" name="Name">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control" id="Age" placeholder="Enter age" name="Age">
  </div>
  <div class="form-group ">
     <label for="gender">Gender</label>
    <select class="custom-select" name="Gender" id="Gender" required>
      <option value="">Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Transgender">Transgender</option>
    </select>
   
  </div>
  <div class="text-center ">
  <button type="submit"  class="btn btn-primary mt-3">Submit</button>
  </div>
</form>

</div>
</div>


</div>
<script src="{{asset('js/jquery.min.js')}}"></script>

   
   <script>
          if ('serviceWorker' in navigator ) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration);
                }, function(err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }

</script>

<script src="{{asset('js/script.js') }}"></script>


     <!---   if(window.indexedDB){

const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];
        const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // Handle errors.
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is 
  // finished before adding data into it.
  objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer);
    });
  };
};
}

</script> -->
@endsection
