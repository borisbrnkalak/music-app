<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'source',
        'filename',
        'size',
        'song_id',
        'is_image'
    ];

    public function songCover()
    {
        return $this->belongsTo(File::class)->where('is_image', '=', '1');
    }
}
