<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WelcomeTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Documentation');
    }

    /**
     * ユーザー登録のテスト
     * @return void
     */
    public function testUserRegister()
    {
        $data = [
            'name'                  => 'juno',
            'email'                 => 'juno@email.com',
            'password'              => 'test1234',
            'password_confirmation' => 'test1234',
        ];

        $response = $this->postJson(route('register'), $data);

        $response->assertStatus(302)
            ->assertRedirect('/dashboard');

        $this->assertDatabaseHas('users', [
            'name'  => 'juno',
            'email' => 'juno@email.com',
        ]);
    }

/**
 * ダッシュボードのアクセステスト
 */
public function testDashboard()
{
    $user = User::factory()->create();
    $response = $this
        ->actingAs($user)
        ->get('/dashboard');

    $response->assertOk();
}
}
