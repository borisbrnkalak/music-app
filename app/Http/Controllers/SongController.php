<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddSongRequest;
use App\Http\Resources\SongResource;
use App\Models\File;
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
        $songs = Song::with(['songFile', 'imageFile'])->get();

        return response()->json(['songs' => SongResource::collection($songs)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddSongRequest $request)
    {
        $songData = $request->except(['image', 'song']);
        $disk = Storage::disk('public');

        $song = $request->file('song');
        $songFileName = 'audio/' . sha1($song->getClientOriginalName()) . "/" . $song->hashName();
        $disk->put('audio/' . sha1($song->getClientOriginalName()), $song);

        $audioInfo = new Mp3Info($disk->path($songFileName));
        $songData['duration'] = ceil($audioInfo->duration);

        $newSong = Song::create($songData);

        File::create([
            'song_id' => $newSong->id,
            'source' => $songFileName,
            'filename' => $song->getClientOriginalName(),
            'size' => $song->getSize(),
        ]);

        $image = $request->file('image');
        if (!is_null($image)) {
            $imageFilePath = 'images/' . sha1($image->getClientOriginalName()) . "/" . $image->hashName();
            $disk->put('images/' . sha1($image->getClientOriginalName()), $image);
            File::create([
                'song_id' => $newSong->id,
                'source' => $imageFilePath,
                'filename' => $song->getClientOriginalName(),
                'size' => $song->getSize(),
                'is_image' => 1
            ]);
        }

        $newSong->load(['songFile', 'imageFile']);

        return response()->json(['song' => new SongResource($newSong)]);
    }
}
