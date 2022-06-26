<?php

namespace Tests\Feature\Budget;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BudgetTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_budget_can_be_created(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
