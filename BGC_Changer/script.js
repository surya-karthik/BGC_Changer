const btn= document.getElementById("button");




const RandomColor = () => {
    let val="0123456789ABCDEF";
    let cons = "#";
    for(let i=0; i<6; i++){
        cons = cons+val[Math.floor(Math.random()*16)];
    }
    return cons;

}

//console.log(RandomColor());

function ColorChanger (){

    document.body.style.backgroundColor = RandomColor();
}

btn.addEventListener("click", ColorChanger);
