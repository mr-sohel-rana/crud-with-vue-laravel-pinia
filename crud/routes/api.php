<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrudController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/home',[CrudController::class,'index']);
Route::post('/add',[CrudController::class,'addStudent']);
Route::get('/student/{id}',[CrudController::class,'signleStudent']);
Route::put('/update/{id}',[CrudController::class,'update']);
Route::delete('/delete/{id}',[CrudController::class,'deleteStu']);





