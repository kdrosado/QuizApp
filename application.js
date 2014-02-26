// Javascript application for Fine Wine Quiz App

$(document).ready(function(){

$(document).on('click', 'button', function(){
		location.reload(); 
	});

var quizQuestionArray = [];

//Create quizQuestion class
function quizQuestion(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
	quizQuestionArray.push(this);
}

//Create each class instance
var question1 = new quizQuestion(question1Question, question1Answers, question1Correct );
var question2 = new quizQuestion(question2Question, question2Answers, question2Correct );
var question3 = new quizQuestion(question3Question, question3Answers, question3Correct );
var question4 = new quizQuestion(question4Question, question4Answers, question4Correct );
var question5 = new quizQuestion(question5Question, question5Answers, question5Correct );

//Array of all of the questions
var questions = [question1, question2, question3, question4, question5];

//Display the current question
function displayQuestion(questionNumber) {
	 $('#singlequestion').html(questions[questionNumber-1].question);
}

//Display answers for the current question
function displayAnswers(questionNumber){
	for (var i = 0; i < questions[questionNumber-1].answers.length; i++) {
		$('#choice'+i).html(questions[questionNumber-1].answers[i]);		
	}
}
//Displays what question user is on of total number of questions
function numQuestions(questionNumber){
	var numQuestions = questions.length;
	$('#number').html(questionNumber);
	$('#total').html(numQuestions);
	return numQuestions;
}

var numCorrect = 0;
var correctArray = [];

//Displays the quiz
function displayQuiz(questionNumber) {
	
	numQuestions(questionNumber);	

	displayQuestion(questionNumber);
	displayAnswers(questionNumber);

	$('.submit').click(function(e) {
		
		var answer = $('input[name="answers"]:checked').val();
		
		if (answer == questions[questionNumber -1].correct) {
			numCorrect = numCorrect+1;
			correctArray.push(answer);
		} else {
			numCorrect = numCorrect+0 ;
		}
		
		$('#numcorrect').html('Correct Answers: '+correctArray.length);
        
        e.preventDefault();
        if (questionNumber == questions.length) {
        	$('#singlequestion').html('That is the end of the quiz');
        	$('#progress').hide();
        	$('form').hide();
        	$('#numcorrect').html('You got '+numCorrect+' out of ' +questions.length+ ' questions correct!');
        	$('#startover').show();
        	
        } else {
        questionNumber++;
        $('.submit').off('click');
        displayQuiz(questionNumber);
    }
    });
}

displayQuiz(1);
});

// Question 1, choices, and answer
var question1Question = "What does a slope-shouldered bottle indicate?";
var question1Answers = ["The wine is a burgundy bottle", "The wine maker had bad posture", "The wine will contain sediment", "None of the above"];
var question1Correct = 2;

// Question 2, choices, and answer
var question2Question = "When a wine is called hot, what does this mean?";
var question2Answers = ["Its been stored at room temperature", "It has too much alcohol", "Its spicy", "All of the above"];
var question2Correct = 1;

// Question 3, choices, and answer
var question3Question = "When you swirl a glass of wine, what aromatic compounds are released?";
var question3Answers = ["Esters", "Ethenol", "Ethers", "Ernestos"];
var question3Correct = 0;

// Question 4, choices, and answer
var question4Question = "Which grape is the most planted in the world?";
var question4Answers = ["Pinotage", "Semillon", "Reisling", "None of the above"];
var question4Correct = 2;

// Question 5, choices, and answer
var question5Question = "Which of the following is a Napa appellation?";
var question5Answers = ["Mount Shasta", "Mount Eden", "Mount Napa", "Mount Veeder"];
var question5Correct = 3;
