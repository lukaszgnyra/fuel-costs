const distance = document.querySelector("#distance");
const avBurn = document.querySelector("#avBurn");
const  price = document.querySelector("#price");
const daysNumber = document.querySelector("#daysNumber");

const radio = document.querySelector("#yes");

const btn = document.querySelector(".calculate");

const answerSpan = document.querySelector("section span");

const zamienDistance = () =>{
    const a = distance.value.replace(',','.');
    return a
}
const zamienAvBurn = () =>{
    const b = avBurn.value.replace(',','.');
    return b
}
const zamienPrice = () =>{
    const c = price.value.replace(',','.');
    return c
}

const calculate = (e) => {
    e.preventDefault();
    if(typeof daysNumber == Number){
        alert("działa")
    }
    const cost = zamienDistance()*zamienAvBurn()*zamienPrice()*daysNumber.value  / 100;
    if (radio.checked){
        const doubleCost = cost*2;
        answerSpan.textContent = doubleCost.toFixed(2) + " ";
    }
    else{
        answerSpan.textContent = cost.toFixed(2) + " ";
    }
    
}

btn.addEventListener("click", calculate);