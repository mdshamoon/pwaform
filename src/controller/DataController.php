<?php

namespace App\Http\Controllers;

use App\Userdata;
use Illuminate\Http\Request;

class DataController extends Controller
{
    //
    
    
    public function check()
    {
        
        return view('details');
    }
     public function store(Request $request)
    {
         
        
        $userdata = new Userdata;


        $userdata->Name = $request->name;
        $userdata->Age= $request->age;
        $userdata->Gender= $request->gender;

        $userdata->save();

       

        
        return view('welcome');
    }



     public function storeall(Request $request)
    {
         
        
       
        
       

      
for($i=0;$i<sizeof($request->mydata);$i++){


$userdata = new Userdata;
        $userdata->Name =$request->mydata[$i]['name'];
        $userdata->Age=  $request->mydata[$i]['age'];
        $userdata->Gender=$request->mydata[$i]['gender'];



        $userdata->save();

}
       

        
        return view('welcome');
    }
}
