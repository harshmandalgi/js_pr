(function() {
    var questionArray = [];
    var score = 0;
    var Question = function(question, answerArray, correctAnswer) {
        this.question = question;
        this.answerArray = answerArray;
        this.correctAnswer = correctAnswer;
        questionArray.push(this);
    }
    Question.prototype.printQuestion = function() {
        console.log( this.question );
        for(var i = 0; i < this.answerArray.length; i++) {
            console.log((i+1) + '. ' + this.answerArray[i] );
        }
    }
    Question.prototype.checkAnswer = function(answerUser, fn) {
        if(answerUser === this.correctAnswer.toString()) {
            console.log('Correct Answer!');
            score++;
            return fn();
        }
        else if ( answerUser === 'exit') {
            console.log('quiz exited.')
            return 0;    
        }
        else {
            console.log('Wrong Answer.');
            return fn();
        }    
    } 
    var q1 = new Question("Choose the correct option:", ['Choudhary','Chaudhary', 'Choudhoury', 'Chaudhoury'], 1);
    var q2 = new Question("Choose the correct option:", ['Aggarwal','Agrawal', 'Aggrawal', 'Agarwal'], 1);
    var q3 = new Question("SVVV CS-B All time top scorer:", ['OPV','SSharma', 'Jainsaab', 'Khrapar'], 2);
    //var q4 = new Question("testques4", ['aa','bb', 'cc', 'dd'], 1);
    (function quiz() {
        var randomQuestion = Math.floor(Math.random() * questionArray.length);
        console.log('Score: ' + score + '--------------------------');
        questionArray[randomQuestion].printQuestion();
        questionArray[randomQuestion].checkAnswer(prompt('Answer: '), quiz);
    }
    )();
})();
