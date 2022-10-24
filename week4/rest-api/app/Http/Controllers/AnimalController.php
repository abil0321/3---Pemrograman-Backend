<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animals = ['Kucing', 'Sapi', 'Kambing'];
    
    public function index()
    {
        echo "Menampilkan data Animals : ";
        foreach ($this->animals as $animal) {
            echo $animal, ", ";
        }
    }

    public function store(Request $request)
    {   
        echo "Menambahkan data Animals. ";
        
        echo "Nama animals : $request->nama";
        array_push($this->animals, $request->nama);

        echo "<br> <br> Data animals : ";
        foreach ($this->animals as $animal) {
            echo $animal, ", ";
        }

    }

    public function update(Request $request, $id)
    {
        echo "Mengupdate data Animals id - $id. ";
        echo "Nama animals : $request->nama";

        $this->animals[$id] = $request->nama;

        echo "<br> <br> Data animals : ";
        foreach ($this->animals as $animal) {
            echo $animal, ", ";
        }

    }
    public function destroy($id)
    {
        echo "Menghapus data Animals id $id";

        unset($this->animals[$id]);

        echo "<br> <br> Data animals : ";
        foreach ($this->animals as $animal) {
            echo $animal, ", ";
        }
    }
}
