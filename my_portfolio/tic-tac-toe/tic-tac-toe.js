let divs = document.querySelectorAll("div");
let sign = "X";
// sign.style.color ="pink"
// sign.textContent.style.color="blue";


// var sign = true;
// Element.textContent = sign ? "X" : "0";
// sign = !sign;

counter = 0;
// function blabla (){
    
    for (let div of divs)
    // same as for ( i = 0 ; i < div.lenght ; i++ )
        div.addEventListener("click", function (e) {
    
            if (!div.textContent) {
                e.target.textContent = sign;
                checkwinner()
                // e.target.textContent.style.textAlign=center
                console.log("blabla")
                
            } else if (sign == "X") {
                sign = "O";
            } else {
                sign = "X";
            }
    
        });
    // if (checkwiner(sign)){
        // alert
    // }


let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");

function checkwinner() {

    const wins = [
        [box1, box2, box3,], [box4, box5, box6], [box7, box8, box9],
        [box1, box5, box9], [box3, box5, box7], [box1, box4, box7],
        [box2, box5, box8], [box3, box6, box9]
    ];


    for (let win of wins) {
        // const [a, b, c] = win;
        // a = index 0, b= index 1, c = index2;

        if (win[0].textContent == win[1].textContent && win[1].textContent == win[2].textContent && win[0].textContent) //here we needed to check if one of them had text content because we were automaticly winning since all of them were empty
        {
            win[0].style.backgroungColor = 'green';
            win[1].style.backgroungColor = 'green';
            win[2].style.backgroungColor = 'green';
            document.querySelector('#win-text').innerHTML= "You Won"
            // NOTTTT WWWOOORRRKKKIIINNNGGG !!!!
            setTimeout(function(){
                // alert("you Win")

            },600)
            
        }
    }
}


