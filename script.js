var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var userChoice;
var computerChoice;

function compChoice()
    {   
        console.log("inside the computer choice fn");
        computerChoice = Math.random();

        if (computerChoice < 0.34) 
        {
            alert("computer chose rock");
            return "rock";
        } 
        else 
        if(computerChoice <= 0.67) 
        {
            alert("computer chose paper");
            return "paper";
        } 
        else 
        {
            alert("computer chose scissors");
            return "scissors";
        }
    }

function usChoice() 
	{
		rock.addEventListener("click", () => {
//             userChoice = "rock";
			alert("you chose rock");
//             console.log(userChoice);
//		return "rock";
			alert(compare("rock", compChoice()));
			

    	});

	    paper.addEventListener("click", () => {

// 	        userChoice = "paper";
            alert("you chose paper");
//             console.log(userChoice);
            //return "paper";
		    alert(compare("paper", compChoice()));
		    
	    });

	    scissors.addEventListener("click", () => {
// 	        userChoice = "scissors";
            alert("you chose scissors");
//             console.log(userChoice);
            //return "scissors";
		    alert(compare("scissors", compChoice()));
	    });
	}

function compare(choice1, choice2) 
{
    if(choice1 === choice2) 
    {
        return "The result is a tie!";
    }
    if(choice1 === "rock") 
    {
        if(choice2 === "scissors") 
        {
            return "rock wins";
        } 
        else 
        {
            return "paper wins";
        }
    }
    if(choice1 === "paper") 
    {
        if(choice2 === "rock") 
        {
            return "paper wins";
        } 
        else 
        {
            if(choice2 === "scissors") 
            {
                return "scissors wins";
            }       
        }
    }
        if(choice1 === "scissors") 
        {
            if(choice2 === "rock") 
            {
                return "rock wins";
            } 
            else 
            {
                if(choice2 === "paper") 
                {
                    return "scissors wins";
                }
            }
        }
};


//userChoice = usChoice();
usChoice();
// if(userChoice !== undefined)
// {
//     computerChoice = compChoice();
//     alert(compare(userChoice, computerChoice));
// }
