player_1=localStorage.getItem("player_1_name");
player_2=localStorage.getItem("player_2_name");

document.getElementById("player_1_name").innerHTML=player_1 + ":  ";
document.getElementById("player_2_name").innerHTML=player_2 + ":  ";

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualNumber=parseInt(number1) * parseInt(number2);

    question_number="<h4>"+number1 + " X " + number2 +"</h4>" ;
    input_box="<br>answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row=question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
var question_turn = "player_1";
var answer_turn = "player_2";

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);

    if(answer==actualNumber){
        if(answer_turn=="player_1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
        if(question_turn == "player_1"){
            question_turn = "player_2";
            document.getElementById("player_question").innerHTML="Question Turn: "+player_2;
        }
        else{
            question_turn="player_1";
            document.getElementById("player_question").innerHTML="Question Turn: "+player_1;
        }
        if(answer_turn=="player_2"){
            answer_turn="player_1";
            document.getElementById("player_answer").innerHTML="Answer Turn: "+player_1;
        }
        else{
            answer_turn="player_2";
            document.getElementById("player_answer").innerHTML="Answer Turn: "+player_2;
        }
        document.getElementById("output").innerHTML="";
    }
}