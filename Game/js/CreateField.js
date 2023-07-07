import { CreateMenu } from "./CreateMenu.js";
import { creatcards } from "./cards.js";

export const createfild = (lvl)=>{
    const main =document.querySelector("main");
    main.classList.add("null");
    

    console.log(lvl);
    let lvltext;

    switch(lvl){
    case 8:  
    lvltext="Лёгкий уровень"
    break;
    case 12:
    lvltext="Средний уровень"
    break;
    case 16:
    lvltext="Сложный уровень"
    break;
    }
    const game = document.querySelector(".game");
    game.style.display = "block";

    const level = game.querySelector(".lvl");
    level.textContent=lvltext;

    const menu = game.querySelector(".btn");
    menu.addEventListener('click',()=>{
        CreateMenu();

    })

const cards = creatcards (lvl);
console.log(cards);

const gamecards = game.querySelector(".game-cards");
gamecards.innerHTML=" ";
let prev=null;
cards.forEach(el => {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage= `url(${el.back})`;
    gamecards.appendChild(card);

    
    
    card.addEventListener('click',()=>{
        console.log(prev);
        console.log.apply(card);
        card.classList.add("rotate");
        card.style.backgroundImage = `url(${el.img})`;
        if(prev==null){
            prev=card
        }
        else{
            if(prev.style.backgroundImage == card.style.backgroundImage){
               prev=null;
            }

            else{
                card.classList.remove("rotate");
                card.style.backgroundImage =`url(${el.back})`;
                card.classList.remove("rotate");
                card.style.backgroundImage =`url(${el.back})`;
                if (prev == null){

                }
            }

        }


    })

})

}


