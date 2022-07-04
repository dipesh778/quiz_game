


// quiz page js file

const quizData = [
	{
		question: "1) What's the missing letter in this sequence?A - Y - C - W - E - U - G - ?",
		a: "H",
		b: "S",
		c: "A",
		d: "T",
		ans: "option2",
	},
	{
		question: '2)Which of these words is most similar to "trustworthy"?',
		a: "Resolute",
		b: "Tenacity",
		c: "Reliable",
		d: "Certain",
		ans: "option3",


	},
	{
		question: "3) You flip a coin ten times in a row. It comes up \"heads\" every time. You flip it one more time. What is the probability that it will come up \"heads\" again?",
		a: "50%",
		b: "90%",
		c: "25%",
		d: "75%",
		ans: "option1",


	},
	{
		question: "4) Forest is to tree as tree is to?:",
		a: "Plant",
		b: "Leaf",
		c: "Breanch",
		d: "Greass",
		ans: "option2",


	},
	{
		question: "5) If Sally's daughter is my son's mother, what relation am I to Sally? (I'm male)",
		a: "Son",
		b: "Son-in-law",
		c: "Brother-in-law",
		d: "Father",
		ans: "option2",


	},
	{
		question: "6) If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
		a: "100 minutes",
		b: "5 minutes",
		c: "50minutes",
		d: "72 minutes",
		ans: "option2",


	},
	{
		question: "7) The day after the day after tomorrow is four days before Monday. What day is it today?",
		a: "Monday",
		b: "Tuesday",
		c: "Wednesday",
		d: "Thursday",
		ans: "option1",


	},
	{
		question: "8) At the end of a banquet, 10 people shake hands with each other. How many handshakes will there be\?		",
		a: "100",
		b: "90",
		c: "45",
		d: "50",
		ans: "option3",


	},
	{
		question: "9) Question 3",
		a: "Option 31",
		b: "Option 32",
		c: "Option 33",
		d: "Option 34",
		ans: "option3",


	},
	{
		question: "10) In a lake, there is a patch of lily pads. Every day, the patch doubles in size.If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?",
		a: "36",
		b: "24",
		c: "16",
		d: "47",
		ans: "option4",


	}
];

let i = 0;
let totalScore = 0;
let x = document.getElementById('box1').innerText;
let y = document.getElementsByClassName("optn");

var audioOnClick = document.getElementById("myAudio"); 
function playAudio() { 
  audioOnClick.play(); 
} 


var nbtn = document.getElementById('nextBtn');
nbtn.onclick = () => {
	// if(i==quizData.length){
	// 	nbtn.style.opacity="0";
	// }
	playAudio();
	score(result());

}

// function try1(){
// 	console.log("ITs working");
// }
var sbtn = document.getElementById('submitBtn');
sbtn.onclick = () => {
	playAudio();
	score(result());

	quizEnd();
	resultPage();



}
const loadQuestion = () => {
	

	if (i == quizData.length) {
		nbtn.style.opacity = "0";

		quizEnd();
		resultPage();
	}
	else {
		x = quizData[i].question;
		document.getElementById('box1').innerText = x;

		y[0].nextElementSibling.innerText = quizData[i].a;
		y[1].nextElementSibling.innerText = quizData[i].b;
		y[2].nextElementSibling.innerText = quizData[i].c;
		y[3].nextElementSibling.innerText = quizData[i].d;


	}
}

const result = () => {
	let selectedAnswer;

	for (m = 0; m < 4; m++) {
		if (y[m].checked) {
			selectedAnswer = y[m].value;
			return selectedAnswer;
		}

	}
}

const score = (selectedAnswer) => {


	if (selectedAnswer == quizData[i].ans) {
		totalScore++;
	}
	i++;
	loadQuestion();


}
function resultPage() {
// console.log(document.getElementById("nameResult"));
console.log(name1);
	document.getElementById("nameResult").innerText = name1;
	document.getElementById("quizCont").style.opacity = 0;
	document.getElementById("resultCont").style.opacity = 1;
	document.getElementById("resultCont").style.zIndex = "3";

}
const quizEnd = () => {
	document.getElementById("score").innerText = totalScore;

	// console.log("Game Over , your score is: " + totalScore);
}

loadQuestion();

