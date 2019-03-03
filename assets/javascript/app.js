
var game = {
    questions: [
        {
            id: 'question1',
            question:'how many legs does a centipede have?',
            answers:['20','90','500','100'],
            answer: 3
        },
        {
            id: 'question2',
            question: 'how many hotdogs were eaten in a single sitting for the world record?',
            answers:['48','57','85','70'],
            answer: 3
        },
        {
            id: 'question3',
            question:'how many dogs are there in the world?',
            answers: ['2','50million','900million','900'],
            answer: 2
        },
    ]
}
// startgame feature
$(".startgame").on("click",function() {
    $('.wrapper').show();
    console.log('howdy');
    (this).hide();
})
// timer
var number = 120;
    $('#timeLeft').on('click', run);

    function decrement {
number--;
$('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
if (number===0){
    stop();
    ("#message").html("times up!!!");
    checkAnswers();
    clearInterval(number);
}
    }
    {
        $("#question1").text
    }

