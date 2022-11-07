<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

use function Symfony\Component\String\s;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = [
        //     'nama' => 'Muhammad Salsabil',
        //     'jurusan' => 'Teknik Informtika'
        // ];

        // Menggunakan Model Student untuk select data
        $students = Student::all();
        $data = [
            'message' => 'Get all Student',
            'data' => $students,
        ];

        // Menggunakan respon json laravel
        // otomatis set headers content type json
        // otomatis mengubah data array ke json
        // mengatur status code

        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //menangkap request
        $input = [
            'name' => $request->name,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student Created Successfully',
            'data' => $student,
        ];
        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);

        if ($student) {

            $data = [
                'message' => 'get Student Details',
                'data' => $student,
            ];

            //mengembalikan data json status code 200
            return response()->json($data, 200);
        } else {

            $data = [
                'message' => 'Student data not found'
            ];

            return response()->json($data, 404);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $student = Student::find($id);

        if ($student) {

            // $student->name = $request->input('name');
            // $student->nim = $request->input('nim');
            // $student->email = $request->input('email');
            // $student->jurusan = $request->input('jurusan');
    
            // // $student = Student::update($student);
            // $student->save();

            $input = [
                'name' => $request->name ?? $student->name,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];

            $student->update($input);
    
            $data = [
                'message' => 'Student Update Successfully',
                'data' => $student,
            ];
    
            return response()->json($data, 200);

        } else{
            $data = [
               'message' => 'Student data not found maseh !!'
            ];

            return response()->json($data, 404);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $student = Student::find($id);
        if ($student) {
    
        $student->delete();

        $data = [
           'message' => 'Student Deleted Successfully',
        ];

        return response()->json($data, 200);
        } else {

            $data = [
                'message' => 'Student data not found maseh !!'
             ];
 
             return response()->json($data, 404);

        }
    }
}
