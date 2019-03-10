$(document).ready(function() {

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

function questionFunction(){
    index ++;
    $("main").empty();
    var viewQuestion = $("<div>");
    viewQuestion.attr("id", "view-question");
    
};

function startpage(){
    $("main").empty();
    $("main").append("<button id='start-button'>START!</button>");
    $("#start-button").on("click",questionFunction);
};

startpage();

});