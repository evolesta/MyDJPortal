<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Gig extends Model
{
    //
    use HasUuids;

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
