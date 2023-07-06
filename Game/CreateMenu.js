import { createfild } from "./CreateField.js";

export const CreateMenu=()=>{
    const menu = document.querySelector(".menu");
    menu.style.display ="block";

    const btn = menu.querySelectorAll(".btn");
    btn.forEach(el => {
        el.addEventListener('click', () => {
            console.log(el.textContent);
            switch(el.textContent){
                case "Лёгкий":
                    createfild(8);
                    break;
                case "Средний":
                    createfild(12);
                    break;
                case "Сложный":
                    createfild(16);
                    break;
            }
        })

    })
}
        

