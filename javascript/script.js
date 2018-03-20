const total = 5;
let score = 0;
let timer = 30; //this is 30,000 in MS ~ 30000

// $("#timer").text(timer);

//Set Timeout
//setTimeout(callbackFunction, 5000)
// setInterval()
//setInterval(callbackFunction, 1000)
//Progress to next question
//Question is rendered incorrect if time runs out


let interval = setInterval(function(){
	timer--
    $("#timer").text(timer);
    console.log (timer)
}, 1000)

setTimeout(function(){
    clearInterval(interval)
    if(alert('You ran out of time!')){

    }else (window.location.reload()); 

    let results = document.getElementById('results');
    alert('You Scored ' + score + ' out of ' + total);

    return false;
}, 30000)

function submitAnswers() {
    //Get user input
    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;
    let q3 = document.forms["quizForm"]["q3"].value;
    let q4 = document.forms["quizForm"]["q4"].value;
    let q5 = document.forms["quizForm"]["q5"].value;

    //Validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('You Missed question ' + i);
            return false;
        };
    }
    //Set Corrent Answers
    let answers = ["b", "d", "a", "a", "c"];

    //Check Answers
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    // Display Results
    let results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You Scored ' + score + ' out of ' + total);

    return false;
}