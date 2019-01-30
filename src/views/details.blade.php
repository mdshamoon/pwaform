@extends('layouts.app')

@section('content')
<div class="container">

	 <div class="alert alert-primary d-none" role="alert" id="success">
 Succesfully added to the original database
</div>

<div class="spinner-border text-primary d-none" role="status" id="load">
  <span class="sr-only">Loading...</span>
</div>

<button class="btn btn-primary float-right m-3 d-none" onclick="submitonnet()" id="details">Upload on internet</button>

<div id="note">nn</div>

</div>




<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{asset('js/retrieve.js') }}"></script>


@endsection