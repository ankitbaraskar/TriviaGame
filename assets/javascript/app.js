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

    //  Display the question function after hitting the start button
    function displayQuestion(index) {
        if (index < questionArr.length) {

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
            }
            else {
                $("main").empty();
                $("main").text("Wrong Answer!");
                clearInterval(intervalid);
                setTimeout(timingQuestion, 1000);
            }
        }
        
    };



    function displayQuestionAndListenForInput() {
        displayQuestion(count);

        $(".question-class").on("click", function (event) {

            clicked = true;
            
            // $(".question-class").on("click", inputAnswerCompare);
            inputAnswerCompare(event);
            //}

        });
        // if (clicked == false) {
        //     $("main").empty();
        //     $("main").text("Times up!");
        //     clearInterval(intervalid);
        //     setTimeout(timingQuestion, 1000);
        // }

        count++;

    };

    function timingQuestion() {
        displayQuestionAndListenForInput();
        intervalid = setInterval(displayQuestionAndListenForInput, 10000);

        if (count == questionArr.length) {
            clearInterval(intervalid);
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