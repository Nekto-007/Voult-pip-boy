import { CreateMenu } from "./CreateMenu.js";

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
}
