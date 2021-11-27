function send(){
    number1=document.getElementById("number1").value;
    number1=document.getElementById("number1").value;
    actual_answer=parseInt(number1) * parseInt(number2);

}


function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    console.log("player1_name");
    player2_name=document.getElementById("player2_name_input").value;
    console.log("player2_name");
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location.replace("quiz_game_page.html");

}