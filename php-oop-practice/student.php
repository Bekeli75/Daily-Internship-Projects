<?php

class Student
{
    public $name;
    public $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce()
    {
        echo "Hello, my name is {$this->name} and I am {$this->age} years old.<br>";
    }
}

$student1 = new Student("Bereket", 22);
$student2 = new Student("Kokebe", 20);

$student1->introduce();
$student2->introduce();