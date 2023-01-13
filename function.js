const myForm1 = document.forms.myForm1;
const myForm2 = document.forms.myForm2;
const custom = document.forms.myForm3;
const btns = document.querySelectorAll(".tip");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const message = document.getElementById("message")
const reset = document.getElementById("equal");


 
btns.forEach(tip => {
    tip.addEventListener("click",()=>{
    if(myForm2.people.value == ""){
     message.innerHTML = "Can't be zero"
     myForm2.people.style.borderColor = "hsl(0, 100%, 66%)"
     reset.style.background= "hsl(186, 14%, 43%)"
     return false
    }
    else{
        message.innerHTML = ""
        reset.style.background= "hsl(172, 67%, 45%)"
    }
    
    amount.innerText = "$" + eval(tip.id/100 * myForm1.amount.value).toPrecision(5)
    total.innerText = "$" + eval((tip.id/100 * myForm1.amount.value) + (myForm1.amount.value/myForm2.people.value)).toPrecision(5)
    })
})

custom.addEventListener("keydown",()=>{
    amount.innerText = "$" + eval(myForm3.custom.value/100 * myForm1.amount.value).toPrecision(5)
    total.innerText = "$" + eval((myForm3.custom.value/100 * myForm1.amount.value) + (myForm1.amount.value/myForm2.people.value)).toPrecision(5)
})

reset.addEventListener("click", ()=>{
    myForm1.amount.value = "";
    myForm2.people.value = "";
    amount.innerText = "$0.00";
    total.innerText = "$0.00";
    myForm3.custom.value = ""
})

