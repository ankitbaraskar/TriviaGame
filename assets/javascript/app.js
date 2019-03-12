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
        },
        {
            question: "Who is the author of the “Harry Potter” books?",
            option1: "J. K. Rowling",
            option2: "J. R. R. Tolkien",
            option3: "Charles Dickens",
            option4: "Ernest Hemingway"
        },
        {
            question: "How many sides does an octagon have?",
            option1: "Two",
            option2: "Four",
            option3: "Twenty",
            option4: "Eight"
        }
    ];


    var count = 0;
    var intervalid;
    var clicked = false;
    var time = 30;
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
            if (event.currentTarget.innerHTML == "Gotham City" || event.currentTarget.innerHTML == "Iron" || event.currentTarget.innerHTML == "Radiation" || event.currentTarget.innerHTML == "J. K. Rowling" || event.currentTarget.innerHTML == "Eight") {
                $("main").empty();
                $("main").text("Correct Answer!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 3000);

                clearInterval(timeIntervalID);
                $("#timer-id").empty();
                time = 30;
                correctAnswer++;
                clicked = false;
            }
            else {
                $("main").empty();
                $("main").text("Wrong Answer!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 3000);

                clearInterval(timeIntervalID);
                $("#timer-id").empty();
                time = 30;
                wrongAnswer++;
                clicked = false;
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
                time = 30;

                $("main").empty();
                $("main").text("Times up!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 3000);
                missedAnswer++;
            }

        }, 1000);

        // display question based on the count index
        displayQuestion(count);


        // click listener that then compares if the answer is true or false
        $(".question-class").on("click", function (event) {

            clicked = true;
            inputAnswerCompare(event);
        });


        // increase the index for the array by one
        count++;


    };


    // for the end page
    function timingQuestion() {
        
        displayQuestionAndListenForInput();


        if (count == questionArr.length + 1) {
            clearInterval(intervalid);
            clearInterval(timeIntervalID);
            $("#timer-id").empty();
            $("main").empty();

            
            $("main").append("<p class='ending-stats'>Correct Answers: " + correctAnswer + "</p>");
            $("main").append("<p class='ending-stats'>Wrong Answers: " + wrongAnswer + "</p>");
            $("main").append("<p class='ending-stats'>Missed Answers: " + missedAnswer + "</p>");

            time = 30;
            clicked = false;
            count =0;
            correctAnswer = 0;
            wrongAnswer = 0;
            missedAnswer = 0;

            $("main").append("<button id='start-button'>RESTART!</button>");
            $("#start-button").on("click", timingQuestion);
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