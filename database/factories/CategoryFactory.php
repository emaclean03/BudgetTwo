<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $amount = $this->faker->randomFloat(1, 1, 5000);
        return [
            'category_name'=>$this->faker->regexify('[A-Za-z0-9]{5}'),
            'category_amount_assigned'=>$amount,
            'category_amount_activity'=>0,
            'category_amount_available'=>$amount,
        ];
    }
}
