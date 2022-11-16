<?php

namespace App\Http\Controllers;
use App\Models\Patient;

use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Menggunakan model patients untuk select all data

        $patients = Patient::All();

        $data = [
            'message' => 'Get all data from Patient',
            'data' => $patients
        ];

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
        //Mengambil data form submission
        $input = [
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_at' =>$request->in_date_at,
            'out_date_at' =>$request->out_date_at
        ];

        // Menggunakan Fungsi bawaan laravel untuk create inputan form
        $patient = Patient::create($input);

        $data = [
            'message' => 'Patient successfully submitted',
            'data' => $patient
        ];

        //mengembalikan data
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
        //

        $patient = Patient::find($id);

        if ($patient) {

            $data = [
                'message' => 'get patient Details',
                'data' => $patient,
            ];

            //mengembalikan data json status code 200
            return response()->json($data, 200);
        } else {

            $data = [
                'message' => 'patient data not found'
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
        //Menangkap ID patient
        $patient = Patient::find($id);  

        // membuat kondisi untuk memastikan id
        if ($patient) {
            //jika data id di temukan

            // mengambil input form
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' =>$request->in_date_at ?? $patient->in_date_at,
                'out_date_at' =>$request->out_date_at ?? $patient->out_date_at
            ];

            //fungsi bawaan laravel untuk update data
            $patient->update($input);

            $data = [
                'message' => 'patient Update Successfully',
                'data' => $patient,
            ];
            
            //mengembalikan data
            return response()->json($data, 200);

        } else {

            // Jika data id tidak ditemukan
            $data = [
                'message' => 'patient data not found !!'
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
        //mengambil id patient
        $patient = Patient::find($id);

        if ($patient) {
            // jika id nya ditemukan
    
            //fungsi delete bawaan laravel
        $patient->delete();

        $data = [
           'message' => 'patient Deleted Successfully',
        ];

        //mengembalikan data
        return response()->json($data, 200);

        } else {
            //jika id nya tidak ditemukan

            $data = [
                'message' => 'patient data not found !!'
             ];
 
             return response()->json($data, 404);

        }
    }

    public function search($name)
    {
        //
        
        $search = Patient::where('name', 'LIKE', '%'. $name. '%')->get();

        if(count($search)){

            return Response()->json($search);

        } else {
        
            return response()->json(['search' => 'No Data not found'], 404);
      }
    }

    public function positive()
    {

        $status = Patient::where('status', 'LIKE', '%'. 'positive'. '%')->get();

        if(count($status)){

            return Response()->json($status);

        } else {
        
            return response()->json(['status' => 'No Data not found'], 404);
      }
    }

    public function recovered()
    {

        $status = Patient::where('status', 'LIKE', '%'. 'recovered'. '%')->get();

        if(count($status)){

            return Response()->json($status);

        } else {
        
            return response()->json(['status' => 'No Data not found'], 404);
      }
    }

    public function dead()
    {

        $status = Patient::where('status', 'LIKE', '%'. 'dead'. '%')->get();

        if(count($status)){

            return Response()->json($status);

        } else {
        
            return response()->json(['status' => 'No Data not found'], 404);
      }
    }
}
