<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Location extends Model
{
    use HasUuids;
    
    public function gigs()
    {
        return $this->hasMany(Gig::class);
    }
}
