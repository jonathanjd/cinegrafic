<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $fillable = ['cod', 'name'];

    public function users()
    {
        # code...
        return $this->belongsToMany(User::class);
    }

}
