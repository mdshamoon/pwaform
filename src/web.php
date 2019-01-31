<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['namespace'=>'mdshamoon\pwaform\controller'],function()
{








Route::post('/kill','DataController@store');


Route::post('/killer','DataController@storeall');

Route::post('/yo','DataController@check');

Route::get('/second', function () {
    return view('pwaform.details');
});

});

// Route::get('/', function () {
//     return view('welcome');
// });


