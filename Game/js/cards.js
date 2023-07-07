export const cards=[
    "../img/1.png",
    "../img/2.png",
    "../img/3.jpg",
    "../img/4.png",
    "../img/5.jpg",
    "../img/6.png",
    "../img/7.jpg",
    "../img/8.png",
    "../img/rubashka.png"

];

const back=[
    "/img/fon.jpg",
    "/img/fon2.jpg",


]
export class card{
    img;
    back = cards[8];
    status=false
    constructor(img){
        this.img=img;
    }

}
export const creatcards = (lvl) =>{
const array =[];
for(let i = 0; i<lvl/2; i++){
    array.push(new card(cards[i]));
    array.push(new card(cards[i]));
    }
    for(let i =0; i < lvl; i++){
        let a = array[i];
        let r = Math.floor(Math.random() * (lvl -1));
        array[i] = array[r];
        array[r] = a;


    }
    return array;

}
