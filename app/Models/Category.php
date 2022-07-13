<?php

namespace App\Models;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory, Multitenantable;

    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function budget():BelongsTo{
        return $this->belongsTo(Budget::class);
    }

    public function transaction():HasMany{
        return $this->hasMany(Transaction::class);
    }
}
