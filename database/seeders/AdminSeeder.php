<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'ADMIN',
            'email' => 'admin@admin.com',
            'phone' => '1234567890',
            'email_verified_at' => now(),
            'password' => Hash::make('admin@admin'),
            'remember_token' => Str::random(10),
            'user_type' => 'admin',
            'status' => 'active'
        ]);
    }
}
