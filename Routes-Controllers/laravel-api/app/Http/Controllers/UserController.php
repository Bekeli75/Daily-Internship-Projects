<?php

namespace App\Http\ControllerS;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            "success" => true,
            "message" => "All Users",
            "data" => [
                [
                    "id" => 1,
                    "name" => "Bereket"
                ],
                [
                    "id" => 2,
                    "name" => "John"
                ]
            ]
        ]);
    }

    public function show($id)
    {
        return response()->json([
            "success" => true,
            "user" => [
                "id" => $id,
                "name" => "User " . $id
            ]
        ]);
    }
}
