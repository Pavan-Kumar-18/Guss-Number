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


    if(Value ===18){
 Output.textContent  = "Congralation You Guss the number🎇🎉🎉" 
    }else{
        Output.textContent = "Random number was  " + Random + "😥"
    }



Button.addEventListener("click",()=>{
    randomNumber()
})
