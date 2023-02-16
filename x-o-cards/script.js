let h2 = document.querySelector("h2");
h2.textContent = "let's play !";

let button = document.querySelector("button");
let input = document.querySelector("input");
let userInput = parseInt(input.value);


button.addEventListener("click", function (e) {
    userInput = parseInt(input.value);
    console.log(userInput);
    addcards();
})
// this is to make my generate button 


startIndex = 0;
let winner = false;
// i set this variable to use it later on 
//this would be usefull to stop the game

const addcards = () => {
    const section = document.querySelector(".card-section");
    const random = Math.floor(Math.random() * (userInput));
    section.innerHTML = "";
    // to not add card again and again
    winner = false;
    let counter = 0;
    for (let i = startIndex; i < userInput; i++) {

        let card = document.createElement("div");
        card.className = "flip-card";
        // x is used to set the X and the O inside my inner HTML
        let x;
        if (i == random) {
            x = "O";
        } else {
            x = "X";
        }
        card.innerHTML += `<div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back">${x}</div></div>`;


        section.appendChild(card)
        card.addEventListener("click", function () {
            
            if (winner) {
                return;
            }
            counter++
            let tries = counter == 1 ? "try" : "tries";
            // my counter to set the value in my h2 for the number of tries
            card.classList.add("clicked");
            // were i change the style to flip the cards
            if (card.textContent == "O") {
                winner = true;
                // card.className = "won";
                h2.textContent = `You won after ${counter} ${tries} !!!!`;
            } else {
                h2.textContent = `You have used ${counter} ${tries} !`;
            }
        })
    }
}

addcards();
// call cards,  is usefull to load card at the beginning 























