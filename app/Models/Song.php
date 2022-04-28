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
        'album',
        'year',
        'genre',
        'duration',
        'has_cover',
        'is_favorite',
    ];

    public function songFile()
    {
        return $this->hasOne(File::class)->where('is_image', '=', '0');
    }
}
