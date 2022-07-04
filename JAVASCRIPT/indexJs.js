var audioOnClick = document.getElementById("myAudio"); 
function playAudio() { 
  audioOnClick.play(); 
  console.log("yes");
} 



let name1;

function nextPage(){
	playAudio();
	let nameValue= document.getElementById("name").value;
	nameValue=nameValue.toUpperCase();
	document.getElementById("a1").style.opacity=0;
	document.getElementById("a2").style.opacity=1;


	document.getElementById("a2").style.zIndex="3";
	document.getElementById("nameOfPerson").innerText=nameValue;
	name1=nameValue;
	console.log(name1);

}

function previousPage(){
	playAudio();
	document.getElementById("a2").style.zIndex="1";
	document.getElementById("a1").style.opacity=1;
	document.getElementById("a2").style.opacity=0;
	

}

function loadQuiz(){
	playAudio();
	window.open("./HTML/game.html","_self");
}