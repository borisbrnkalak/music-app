<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddSongRequest;
use App\Http\Resources\SongResource;
use App\Models\File;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        $songs = Song::with(['songFile'])->get();

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
        $disk = Storage::disk('public');

        $newSongs = collect();
        $songs = $request->file('songs');

        foreach ($songs  as  $song) {
            $songFileName = 'audio/' . sha1($song->getClientOriginalName()) . "/" . $song->hashName();
            $disk->put('audio/' . sha1($song->getClientOriginalName()), $song);

            $audioInfo = new Mp3Info($disk->path($songFileName), true);

            $newSong = Song::create([
                'name' => $audioInfo->tags['song'],
                'author' => isset($audioInfo->tags['artist']) ? $audioInfo->tags['artist'] : null,
                'album' => isset($audioInfo->tags['album']) ? $audioInfo->tags['album'] : null,
                'year' => isset($audioInfo->tags['year']) ? $audioInfo->tags['year'] : null,
                'genre' => isset($audioInfo->tags['genre']) ? $audioInfo->tags['genre'] : null,
                'duration' => ceil($audioInfo->duration),
                'has_cover' => $audioInfo->hasCover
            ]);

            File::create([
                'song_id' => $newSong->id,
                'source' => $songFileName,
                'filename' => $song->getClientOriginalName(),
                'size' => $song->getSize(),
            ]);

            $newSong->load('songFile');

            $newSongs->add($newSong);
        }

        return response()->json(['songs' => SongResource::collection($newSongs)]);
    }
}
