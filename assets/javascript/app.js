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
        }
    ];

    var index = -1;

    //  Display the question function after hitting the start button
    function questionFunction() {
        index++;
        $("main").empty();
        var viewQuestion = $("<div>");
        viewQuestion.attr("id", "view-question");
        $("main").append(viewQuestion);

        //  Append the question to the div
        viewQuestion.append("<p id='question-id'>" + questionArr[index].question + "</p>");
        viewQuestion.append("<p id='option1-id'>" + questionArr[index].option1 + "</p>");
        viewQuestion.append("<p id='option2-id'>" + questionArr[index].option2 + "</p>");
        viewQuestion.append("<p id='option3-id'>" + questionArr[index].option3 + "</p>");
        viewQuestion.append("<p id='option4-id'>" + questionArr[index].option4 + "</p>");
    };

    //  Display the start button on the start page
    function startpage() {
        $("main").empty();
        $("main").append("<button id='start-button'>START!</button>");
        $("#start-button").on("click", questionFunction);
    };

    startpage();

});