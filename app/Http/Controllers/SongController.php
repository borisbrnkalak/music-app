<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddSongRequest;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use wapmorgan\Mp3Info\Mp3Info;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddSongRequest $request)
    {
        Song::create($request->except(['image', 'song']));
        $song = $request->file('song');
        $image = $request->file('image');
        Storage::disk('public')->put('audio/' . $song->hashName(), $song);


        $audio = new Mp3Info(Storage::disk('public')->path('audio/' . $song->hashName()));

        Storage::disk('public')->put('images/', $image);
    }
}
