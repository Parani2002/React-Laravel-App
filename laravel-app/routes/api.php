<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/', function(){
    return response() -> json([
        'message' => "Hello from API"
    ],200);
});

Route::get('/students', [StudentController::class,'index']);
