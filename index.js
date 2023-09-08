const buttonsEl = document.querySelectorAll("button")

const inputResultEl = document.getElementById("result")


for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValues = buttonsEl[i].textContent
        if(buttonValues === "C"){
            clearResult()
        }else if(buttonValues === "="){
            calculateResult()
        }else if(buttonValues === "M-"){
            resultback()
        }else if(buttonValues === "M+"){
            resultIncrese()
        } else{
            appendResult(buttonValues)
        }
    })
}

function clearResult(){
    inputResultEl.value = ""
}
function calculateResult(buttonValues){
    inputResultEl.value = eval(inputResultEl.value)

}
function appendResult(buttonValues){
    inputResultEl.value += buttonValues
    // inputResultEl.value = inputResultEl.value + buttonValues
}
function resultback(buttonValues){
    inputResultEl.value = eval(inputResultEl.value -= buttonValues.value) 
}
function resultIncrese(){

}