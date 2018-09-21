<?php

namespace App\Http\Controllers\API;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $projects = Project::orderBy('id', 'desc')->paginate(5);
        return response()->json($projects, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //
        $this->validate($request, [
            'cod' => 'required|string|unique:projects',
            'name' => 'required|string',
            'users' => 'required'
        ]);

        $project = new Project();
        $project->cod = $request->cod;
        $project->name = $request->name;


        if ($project->save()) {
            # code...
            $array = [];

            foreach ($request->users as $user) {
                # code...
                array_push($array, $user[0]);
            }

            $project->users()->attach($array);
        }

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
        $project = Project::find($id);
        $project->users;
        return response()->json($project, 200);
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
