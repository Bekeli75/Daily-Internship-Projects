<?php

class BankAccount
{
    private $balance;

    public function __construct($balance)
    {
        $this->balance = $balance;
    }

    public function deposit($amount)
    {
        $this->balance += $amount;
    }

    public function withdraw($amount)
    {
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
        } else {
            echo "Insufficient balance.<br>";
        }
    }

    public function showBalance()
    {
        echo "Current Balance: {$this->balance}<br>";
    }
}

$account = new BankAccount(1000);

$account->deposit(500);
$account->withdraw(300);
$account->showBalance();