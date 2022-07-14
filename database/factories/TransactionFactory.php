<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'transaction_payee' => $this->faker->regexify('[A-Za-z0-9]{5}'),
            'transaction_outflow' => $this->faker->randomFloat(1, 1, 5000),
            'transaction_inflow' => $this->faker->randomFloat(1, 1, 5000),
        ];
    }
}
