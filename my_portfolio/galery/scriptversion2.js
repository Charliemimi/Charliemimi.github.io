const data = [
    {
        image: "https://picsum.photos/id/237/200/200",
        title: "Dog",
        creator: "Jim Beam",
        price: "$9.99",
    },
    {
        image: "https://picsum.photos/id/238/200/200",
        title: "City",
        creator: "Jack Daniels",
        price: "$6.50",
    },
    {
        image: "https://picsum.photos/id/239/200/200",
        title: "Dandelion",
        creator: "Johnnie Walker",
        price: "$19.00",
    },
    {
        image: "https://picsum.photos/id/244/200/200",
        title: "Pelicans",
        creator: "John Jameson",
        price: "$12.50",
    },
    {
        image: "https://picsum.photos/id/248/200/200",
        title: "Cactus",
        creator: "Jim Beam",
        price: "$15.99",
    },
    {
        image: "https://picsum.photos/id/249/200/200",
        title: "Bridge",
        creator: "William Grant",
        price: "$29.99",
    },
    {
        image: "https://picsum.photos/id/250/200/200",
        title: "Camera",
        creator: "George Smith",
        price: "$10.00",
    },
    {
        image: "https://picsum.photos/id/251/200/200",
        title: "Landscape",
        creator: "Johnnie Walker",
        price: "$29.00",
    },
    {
        image: "https://picsum.photos/id/255/200/200",
        title: "Private Drive",
        creator: "John Jameson",
        price: "$19.00",
    },
    {
        image: "https://picsum.photos/id/256/200/200",
        title: "Snowy Mountains",
        creator: "William Grant",
        price: "$19.99",
    },
    {
        image: "https://picsum.photos/id/257/200/200",
        title: "Canal",
        creator: "Jim Beam",
        price: "$19.99",
    },
    {
        image: "https://picsum.photos/id/258/200/200",
        title: "Birds",
        creator: "Johnnie Walker",
        price: "$24.00",
    },
    {
        image: "https://picsum.photos/id/259/200/200",
        title: "Waterfront",
        creator: "George Smith",
        price: "$15.00",
    },
    {
        image: "https://picsum.photos/id/261/200/200",
        title: "Dune",
        creator: "John Jameson",
        price: "$7.50",
    },
    {
        image: "https://picsum.photos/id/274/200/200",
        title: "City Night",
        creator: "Jim Beam",
        price: "$14.99",
    },
];

let section = document.querySelector("section");


let div = document.createElement("div")
section.appendChild(div);


// for (let i = 0; i < data.length; i++) {
//     let div = document.createElement("div");
//     div.setAttribute("class", "cards");
//     section.appendChild(div);

//     let img = document.createElement("img");
//     img.width = "150";
//     img.src = (data[i].image);
//     img.alt = "";
//     img.height = "150";
//     img.style.borderRadius = "10"
//     div.appendChild(img);

//     let title = document.createElement("h3");
//     title.textContent = (data[i].title);
//     div.appendChild(title);

//     let creator = document.createElement("h4");
//     creator.textContent = (data[i].creator);
//     div.appendChild(creator);

//     let price = document.createElement("h4");
//     price.textContent = (data[i].price);
//     div.appendChild(price);


// }




let show = document.createElement("div")
show.setAttribute("class", "cards shox");
// show.setAttribute("class", "shox");

show.addEventListener("click", function (e) {
    console.log("hello")
    stratIndex += 3;
    endIndex += 3;
    addcards();
});

show.textContent = "Show More!", "+";


section.appendChild(show);


// function addcards (){


let stratIndex = 0;
let endIndex = 3;


const addcards = () => {
    const main = document.querySelector("section");
    for (let i = stratIndex; i < endIndex; i++) {
        let jeez = document.createElement("div");
        jeez.innerHTML = `<img src =${data[i].image}/><h3>${data[i].title}</h3><h3>${data[i].creator}</h3><h3>${data[i].price}</h3>`
        //Code to generate cards
        jeez.className = "jeez cards";
        main.insertBefore(jeez, main.lastElementChild);
        if (i >= data.length - 1) {
            main.removeChild(main.lastElementChild);

        }
    }
}
addcards();





