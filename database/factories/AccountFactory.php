<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'account_name' => $this->faker->regexify('[A-Za-z0-9]{5}'),
            'account_type' => 'Checking',
            'account_balance' => $this->faker->randomNumber(3),
        ];
    }
}
