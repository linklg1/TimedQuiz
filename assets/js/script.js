//start button//
var startbutton = document.querySelector("#startbutton");


//questions//
var allquestions = document.querySelector("#allquestions")

var question1 = document.querySelector("#question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");

//buttons: answer set 1//
var correct1 = document.querySelector("#correct1");
var incorrect1of1 = document.querySelector("#incorrect1of1");
var incorrect2of1 = document.querySelector("#incorrect2of1");
var incorrect3of1 = document.querySelector("#incorrect3of1");

//buttons: answer set 2//
var correct2 = document.querySelector("#correct2");
var incorrect1of2 = document.querySelector("#incorrect1of2");
var incorrect2of2 = document.querySelector("#incorrect2of2");
var incorrect3of2 = document.querySelector("#incorrect3of2");

//buttons: answer set 3//
var correct3 = document.querySelector("#correct3");
var incorrect1of3 = document.querySelector("#incorrect1of3");
var incorrect2of3 = document.querySelector("#incorrect2of3");
var incorrect3of3 = document.querySelector("#incorrect3of3");

//buttons: answer set 4//
var correct4 = document.querySelector("#correct4");
var incorrect1of4 = document.querySelector("#incorrect1of4");
var incorrect2of4 = document.querySelector("#incorrect2of4");
var incorrect3of4 = document.querySelector("#incorrect3of4");


//last page//
var highscores = document.querySelector("#HS");
var topscore = document.querySelector("#TopScore");


//values and timer//
var count = 0;
var timeEl = document.querySelector("#timer");
var secondsLeft = 30;
var username = "";
var timerInterval;



//Functions//


//timer// 

function setTime() {
    
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Seconds left";
  
      if(secondsLeft <= 0) {
        
        clearInterval(timerInterval);
        
        alert('Out of time!! Please submit')
        runhighscores()  
     }
  
    }, 1000);
  }

//run questions //

function runquiz(){
    startbutton.setAttribute("style", "display: none;");
    question1.setAttribute("style","display: block; margin-left: 25%; margin-top: 25%;");
    setTime()
}

function runquestion2(){
    question1.setAttribute("style","display: none;");
    question2.setAttribute("style","display: block; margin-left: 25%; margin-top: 25%");
}

function runquestion3(){
    question2.setAttribute("style","display: none;");
    question3.setAttribute("style","display: block; margin-left: 25%; margin-top: 25%");
}

function runquestion4(){
    question3.setAttribute("style","display: none;");
    question4.setAttribute("style","display: block; margin-left: 25%; margin-top: 25%");
}

// run high scores, store username and score, and stop timer//

function stoptimer() {
    clearInterval(timerInterval);
}

function runhighscores() {
    username = prompt("End of Quiz - Enter Your Initials");
    var bestuser = localStorage.getItem("username");
    var bestcount = localStorage.getItem("score");

    if (bestcount === null && bestuser === null){
        localStorage.setItem("username", username);
        localStorage.setItem("score", count);  
        bestuser = localStorage.getItem("username");
        bestcount = localStorage.getItem("score");
    }

    else if (bestcount <= count) {
        localStorage.setItem("username", username);
        localStorage.setItem("score", count); 
        bestuser = localStorage.getItem("username");
        bestcount = localStorage.getItem("score");
    }
    
    allquestions.setAttribute("style","display: none;");
    highscores.setAttribute("style","display: block; margin-left: 25%; margin-top: 20%");
    timeEl.setAttribute("style", "display: none;");
    topscore.textContent = `${bestuser} Score: ${bestcount}`;
    stoptimer();
}


// Answer set 1 //

function correctanswer1() {
count ++;
secondsLeft = secondsLeft + 10;
correct1.setAttribute("style", "background: green");
setTimeout(()=> {
runquestion2()
}, "500");
}

function wronganswer1of1() {

secondsLeft = secondsLeft - 10;
incorrect1of1.setAttribute("style", "background: red");
setTimeout(()=> {
runquestion2()
}, "500");
}

function wronganswer2of1() {

secondsLeft = secondsLeft - 10;
incorrect2of1.setAttribute("style", "background: red");
setTimeout(()=> {
runquestion2()
}, "500");
}

function wronganswer3of1() {

secondsLeft = secondsLeft - 10;
incorrect3of1.setAttribute("style", "background: red");
setTimeout(()=> {
runquestion2()
}, "500");
}

// Answer set 2 //

function correctanswer2() {
    count ++;
    secondsLeft = secondsLeft + 10;
    correct2.setAttribute("style", "background: green");
    setTimeout(()=> {
    runquestion3()
    }, "500");
    }
    
    function wronganswer1of2() {
    
    secondsLeft = secondsLeft - 10;
    incorrect1of2.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion3()
    }, "500");
    }
    
    function wronganswer2of2() {
    
    secondsLeft = secondsLeft - 10;
    incorrect2of2.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion3()
    }, "500");
    }
    
    function wronganswer3of2() {
    
    secondsLeft = secondsLeft - 10;
    incorrect3of2.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion3()
    }, "500");
    }
    
// Answer set 3 //

function correctanswer3() {
    count ++;
    secondsLeft = secondsLeft + 10;
    correct3.setAttribute("style", "background: green");
    setTimeout(()=> {
    runquestion4()
    }, "500");
    }
    
    function wronganswer1of3() {
    
    secondsLeft = secondsLeft - 10;
    incorrect1of3.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion4()
    }, "500");
    }
    
    function wronganswer2of3() {
    
    secondsLeft = secondsLeft - 10;
    incorrect2of3.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion4()
    }, "500");
    }
    
    function wronganswer3of3() {
    
    secondsLeft = secondsLeft - 10;
    incorrect3of3.setAttribute("style", "background: red");
    setTimeout(()=> {
    runquestion4()
    }, "500");
    }

    // Answer set 4 //

function correctanswer4() {
    count ++;
    secondsLeft = secondsLeft + 10;
    correct4.setAttribute("style", "background: green");
    setTimeout(()=> {
        runhighscores()
        }, "500");
     }
    
    function wronganswer1of4() {
    
    secondsLeft = secondsLeft - 10;
    incorrect1of4.setAttribute("style", "background: red");
    setTimeout(()=> {
        runhighscores()
        }, "500");
       }
    
    function wronganswer2of4() {
    
    secondsLeft = secondsLeft - 10;
    incorrect2of4.setAttribute("style", "background: red");
    setTimeout(()=> {
        runhighscores()
        }, "500");
       }
    
    function wronganswer3of4() {
    
    secondsLeft = secondsLeft - 10;
    incorrect3of4.setAttribute("style", "background: red");
    setTimeout(()=> {
        runhighscores()
        }, "500");
        }
    


    // button event listeners//

    // start //
startbutton.addEventListener("click", runquiz) 



//answer set 1//

correct1.addEventListener("click", correctanswer1)

incorrect1of1.addEventListener("click", wronganswer1of1)

incorrect2of1.addEventListener("click", wronganswer2of1)

incorrect3of1.addEventListener("click", wronganswer3of1)

//answer set 2//

correct2.addEventListener("click", correctanswer2)

incorrect1of2.addEventListener("click", wronganswer1of2)

incorrect2of2.addEventListener("click", wronganswer2of2)

incorrect3of2.addEventListener("click", wronganswer3of2)

//answer set 3//

correct3.addEventListener("click", correctanswer3)

incorrect1of3.addEventListener("click", wronganswer1of3)

incorrect2of3.addEventListener("click", wronganswer2of3)

incorrect3of3.addEventListener("click", wronganswer3of3)


//answer set 4//

correct4.addEventListener("click", correctanswer4)

incorrect1of4.addEventListener("click", wronganswer1of4)

incorrect2of4.addEventListener("click", wronganswer2of4)

incorrect3of4.addEventListener("click", wronganswer3of4)