<?php

class Employee
{
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function work()
    {
        echo "{$this->name} is working.<br>";
    }
}

class Manager extends Employee
{
    public function manage()
    {
        echo "{$this->name} is managing the team.<br>";
    }
}

$manager = new Manager("Bereket");

$manager->work();
$manager->manage();