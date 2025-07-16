<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gigs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('client_id');
            $table->foreignUuid('location_id')->nullable();
            $table->string('name');
            $table->date('date');
            $table->time('start')->nullable();
            $table->time('end')->nullable();
            $table->boolean('djset');
            $table->boolean('sound');
            $table->boolean('light');
            $table->text('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gigs');
    }
};
