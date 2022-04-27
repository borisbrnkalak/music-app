<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SongResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'author' => $this->author,
            'year' => $this->year,
            'duration' => $this->duration,
            'audio' => new ImageResource($this->songFile),
            'image' => new ImageResource($this->imageFile)
        ];
    }
}
