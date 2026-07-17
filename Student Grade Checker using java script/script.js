function checkGrade(){

    let name = prompt("Enter your name:");

    let score = Number(prompt("Enter your score:"));

    let grade;

    if(score>=90){
        grade="A";
    }
    else if(score>=80){
        grade="B";
    }
    else if(score>=70){
        grade="C";
    }
    else if(score>=60){
        grade="D";
    }
    else{
        grade="F";
    }

    document.getElementById("result").innerHTML =
    `Student: ${name}<br>Score: ${score}<br>Grade: ${grade}`;

}