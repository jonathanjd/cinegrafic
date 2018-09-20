<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Faker\Generator as Faker;

class UserController extends Controller
{

    public function __construct()
    {
        /* $this->middleware('client.credentials')->only(['store', 'show']);
        $this->middleware('auth:api')->only(['index']); */
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = User::orderBy('id', 'desc')->get();
        return response()->json($users, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Faker $faker)
    {
        //
        $this->validate($request, [
            'role' => 'required',
            'password' => 'required|string|min:6|max:24',
        ]);

        $user = new User();
        $user->username = strtoupper($faker->userName);
        $user->password = bcrypt($request->password);
        $user->role = $request->role;
        $user->status = 'active';
        $user->save();

        $data = [
            'message' => 'success',
            'info' => 'User Created'
        ];

        return response()->json($data, 200);
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
        $user = User::findOrFail($id);
        return response()->json($user, 200);
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
        //

        $this->validate($request, [
            'role' => 'required',
            'status' => 'required',
            'password' => 'string|min:6|max:24',
        ]);

        $user = User::findOrFail($id);
        $user->role = $request->role;
        $user->status = $request->status;
        if ($user->password) {
            $user->password = bcrypt($request->password);
        }
        $user->save();

        $data = [
            'message' => 'success',
            'info' => 'User Updated'
        ];

        return response()->json($data, 200);

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
    }
}
