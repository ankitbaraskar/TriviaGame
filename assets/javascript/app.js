$(document).ready(function () {

    var questionArr = [
        {
            question: "Which fictional city is the home of Batman?",
            option1: "Atlantis City",
            option2: "Springfield",
            option3: "Gotham City",
            option4: "Zion City"
        },
        {
            question: "Spinach is high in which mineral?",
            option1: "Zinc",
            option2: "Iron",
            option3: "Juice",
            option4: "Milk"
        },
        {
            question: "What is a Geiger Counter used to detect?",
            option1: "Chocolate temperature",
            option2: "Population Density",
            option3: "Wind Speed",
            option4: "Radiation"
        }
    ];

    
    var count = 0;
    var intervalid;
    var clicked = false;
    var time = 10;
    var timeIntervalID;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var missedAnswer = 0;

    //  Display the question function after hitting the start button
    function displayQuestion(index) {
        if (index < questionArr.length && time !== 0) {

            $("main").empty();
            var viewQuestion = $("<div>");
            viewQuestion.attr("id", "view-question");
            $("main").append(viewQuestion);

            //  Append the question to the div
            viewQuestion.append("<p id='question-id'>" + questionArr[index].question + "</p>");
            viewQuestion.append("<p id='option1-id' class='question-class'>" + questionArr[index].option1 + "</p>");
            viewQuestion.append("<p id='option2-id' class='question-class'>" + questionArr[index].option2 + "</p>");
            viewQuestion.append("<p id='option3-id' class='question-class'>" + questionArr[index].option3 + "</p>");
            viewQuestion.append("<p id='option4-id' class='question-class'>" + questionArr[index].option4 + "</p>");
        }
    };


    function inputAnswerCompare(event) {

        if (clicked == true) {
            console.log(event);
            if (event.currentTarget.innerHTML == "Gotham City" || event.currentTarget.innerHTML == "Iron" || event.currentTarget.innerHTML == "Radiation") {
                $("main").empty();
                $("main").text("Correct Answer!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 1000);

                clearInterval(timeIntervalID);
                $("#timer-id").empty();
                time = 10;
                correctAnswer++;
            }
            else {
                $("main").empty();
                $("main").text("Wrong Answer!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 1000);

                clearInterval(timeIntervalID);
                $("#timer-id").empty();
                time = 10;
                wrongAnswer++;
            }
        }

    };



    function displayQuestionAndListenForInput() {

        //  clear any timers first
        clearInterval(timeIntervalID);
        //  to display the 10seconds
        $("#timer-id").html("Time remaining: " + time);
        //  to decrease time by one second
        timeIntervalID = setInterval(function () {
            time--;
            $("#timer-id").html("Time remaining: " + time);

            if (clicked == false && time == 0) {
                clearInterval(timeIntervalID);
                $("#timer-id").empty();
                time = 10;

                $("main").empty();
                $("main").text("Times up!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 1000);
                missedAnswer++;
            }

        }, 1000);

        displayQuestion(count);


        $(".question-class").on("click", function (event) {

            clicked = true;
            inputAnswerCompare(event);
        });

        count++;


    };

    function timingQuestion() {

        displayQuestionAndListenForInput();


        // intervalid = setInterval(displayQuestionAndListenForInput, 10000);

        if (count == questionArr.length+1) {
            clearInterval(intervalid);
            clearInterval(timeIntervalID);
            $("#timer-id").empty();
            $("main").empty();

            time = 10;
            $("main").append("<p class='ending-stats'>Correct Answers: " + correctAnswer + "</p>");
            $("main").append("<p class='ending-stats'>Wrong Answers: " + wrongAnswer + "</p>");
            $("main").append("<p class='ending-stats'>Missed Answers: " + missedAnswer + "</p>");
        }
    };

    //  Display the start button on the start page
    function startpage() {
        $("main").empty();
        $("main").append("<button id='start-button'>START!</button>");
        $("#start-button").on("click", timingQuestion);
    };

    startpage();

});