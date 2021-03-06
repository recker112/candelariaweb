<?php

namespace Database\Factories\Gedure;

use App\Models\Gedure\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Post::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'title' => $this->faker->sentence,
			'content' => $this->faker->paragraph(10),
			'user_id' => rand(1,5),
			'only_users' => 0
		];
	}
}
