<?php

namespace App\Models;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Account extends Model
{
    use HasFactory, Multitenantable;
    protected $fillable = [
        'account_name',
        'account_type',
        'account_balance',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function budget():BelongsTo
    {
        return $this->belongsTo(Budget::class);
    }

   public function transaction():HasMany
    {
        return $this->hasMany(Transaction::class);
    }



}
