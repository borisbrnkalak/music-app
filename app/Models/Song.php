<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'author',
        'year',
        'duration',
        'is_favourite'
    ];

    public function songFile()
    {
        return $this->hasOne(File::class)->where('is_image', '=', '0');
    }

    public function imageFile()
    {
        return $this->hasOne(File::class)->where('is_image', '=', '1');
    }
}
