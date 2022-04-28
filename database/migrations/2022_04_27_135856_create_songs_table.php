<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('author', 191)->nullable();
            $table->string('album', 191)->nullable();
            $table->integer('year')->nullable();
            $table->string('genre', 191)->nullable();
            $table->integer('duration');
            $table->boolean('has_cover')->default(0);
            $table->boolean('is_favorite')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs');
    }
};
