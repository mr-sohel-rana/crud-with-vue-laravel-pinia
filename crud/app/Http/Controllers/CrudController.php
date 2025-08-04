<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Crud;
class CrudController extends Controller
{
     function index(){
        $student=Crud::all();
        return response()->json(['status'=>'success','data'=>$student]);

     }

     function addStudent(Request $request){
        $student=Crud::create($request->all());

        return response()->json(['status'=>'success','data'=>$student]);

     }

     function singleStudent(Request $request,$id){
        $student=Crud::find($id);
        if(!$student){
            return response()->json(['student not found']);
        }
        return response()->json(['data'=>$student]);
     }
     function update(Request $request,$id){
        $student=Crud::find($id);
        if(!$student){
            return response()->json(['student not found']);
        }
        $student->update([
            'name'=>$request->name,
            'department'=>$request->department,
            'roll'=>$request->roll,

        ]);

        return response()->json(['data'=>$student]);
     }
     function deleteStu(Request $request,$id){
        $student=Crud::find($id);
        if(!$student){
            return response()->json(['student not found']);
        }
        $student->delete();

        return response()->json(['data'=>$student]);
     }
}
