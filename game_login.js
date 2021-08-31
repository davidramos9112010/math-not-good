function  addUser() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
window.location="game_page.html"
}
function send(){
num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value;
actual_answer=parseInt(num1) * parseInt(num2);
question_num="<h4>"+ num1 + "x" + num2 +"</h4>";
input_box="<br> Answer:<input type'text' id='input_check_box'>";
check_button="<br><br><button class="btn btn-info" onclick ="check()">check </button>;
row=question_num + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";






}


