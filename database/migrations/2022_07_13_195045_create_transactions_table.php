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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('budget_id')->constrained();
            $table->foreignId('account_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->string('transaction_payee')->nullable(false);
            $table->decimal('transaction_outflow')->default(0.00);
            $table->decimal('transaction_inflow')->default(0.00);
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
        Schema::dropIfExists('transactions');
    }
};
