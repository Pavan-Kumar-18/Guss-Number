const Input = document.querySelector("input")
const Button = document.querySelector("button")
const Output = document.querySelector("span")

function randomNumber(){
    const Random = Math.floor(Math.random()*100)
    const Value = Input.value

let atempt = 0
if (isNaN(Value) || Value < 1 || Value > 100) {
    Output.textContent = "Please enter a valid number between 1 and 100.";
    Input.focus();
    return;
}

if(Value.atempt > 10){
    Output.textContent = "You have exceed atempt"
}else{
    if(Random === Value){
 Output.textContent  = "Congralation You Guss the number🎇🎉🎉" + Random
    }else{
        Output.textContent = "Random number was  " + Random + "😥"
    }
}
Input.value = ''
}



Button.addEventListener("click",()=>{
    randomNumber()
})