$(document).ready(function () {

var generatedNumbers = []
var wins=0;
var losses=0;
var total=0;
$("#numberWins").text(wins);
$("#numberLosses").text(losses);


var randomNumber = Math.floor(Math.random() * 101 + 19)
console.log(randomNumber)
$("#number").text(randomNumber);

function gemRandomNumbers ()  {
    for (i= 0; i<4; i++)  {
        var num = Math.floor(Math.random()*11+1);
        generatedNumbers.push(num);
    }
    console.log(generatedNumbers)
}

gemRandomNumbers();

function reset()  {
    randomNumber = Math.floor(Math.random() * 101 + 19);
    console.log(randomNumber)
    $("#number").text(randomNumber);
    generatedNumbers = [];
    gemRandomNumbers();
    total = 0;
    $("#sum").text(total);
}

function winner()  {
    alert('congrats you are a winner');
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function loser()  {
    alert("Sorry, you lost");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}

$("#firstJewel").on("click",function()  {
    total = total + generatedNumbers[0];
    console.log("New total= " + total);
    $("#sum").text(total);

      if (total == randomNumber)  {
          winner();
      }

      else if (total > randomNumber) {
        loser();
    }
    })

$("#secondJewel").on("click",function()  {
    total = total + generatedNumbers[1];
    console.log("New total= " + total);
    $("#sum").text(total);

      if (total == randomNumber)  {
          winner();
      }

      else if (total > randomNumber) {
        loser();
    }
    })

$("#thirdJewel").on("click",function()  {
    total = total + generatedNumbers[2];
    console.log("New total= " + total);
    $("#sum").text(total);

        if (total == randomNumber)  {
            winner();
        }

        else if (total > randomNumber) {
        loser();
    }
    })

$("#fourthJewel").on("click",function()  {
    total = total + generatedNumbers[3];
    console.log("New total= " + total);
    $("#sum").text(total);

        if (total == randomNumber)  {
            winner();
        }

        else if (total > randomNumber) {
        loser();
    }
    })
});