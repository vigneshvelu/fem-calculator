let displayValue= document.querySelector('.display');
const pressedButton = document.querySelector('.calculator');
let runningTotal='';
let operator='';
let lastResults = false;//This is a boolean value to denote if the displayValue is the result
pressedButton.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        pressedValue=event.target.innerText;
        if(!isNaN(parseInt(pressedValue)))
        {
            if(lastResults){
                displayValue.innerText = parseInt(pressedValue);
                lastResults=false;
            }
            else{
                displayValue.innerText= parseInt(displayValue.innerText)*10 + parseInt(pressedValue);
            }
        }
        else if(pressedValue == 'C'){
            clear();
            displayValue.innerText=0;
        }
        else if(pressedValue == '←'){
            if(displayValue.innerText !== 0){
                displayValue.innerText= Math.floor(parseInt(displayValue.innerText)/10);
            }
        }
        else if(pressedValue == '÷' || pressedValue=='x' || pressedValue == '-' || pressedValue == '+'){
            if(operator==''){
                runningTotal=displayValue.innerText;
                operator = pressedValue;    
            } else {
                if(operator=='+'){
                    runningTotal=parseInt(runningTotal)+ parseInt(displayValue.innerText);
                    operator = pressedValue;    
                }
                else if(operator == '-'){
                    runningTotal=parseInt(runningTotal) - parseInt(displayValue.innerText);
                    operator = pressedValue;    
                }
                else if(operator == 'x'){
                    runningTotal=parseInt(runningTotal) * parseInt(displayValue.innerText);
                    operator = pressedValue;    
                }
                else if(operator == '÷'){
                    runningTotal=Math.round(parseInt(runningTotal)/parseInt(displayValue.innerText));
                    operator = pressedValue;    
                }
            }
            displayValue.innerText=0;
            
        }
        else if(pressedValue == '='){
            if(operator=='+'){
                displayValue.innerText=parseInt(runningTotal)+ parseInt(displayValue.innerText);
            }
            else if(operator == '-'){
                displayValue.innerText=parseInt(runningTotal) - parseInt(displayValue.innerText);
            }
            else if(operator == 'x'){
                displayValue.innerText=parseInt(runningTotal) * parseInt(displayValue.innerText);
            }
            else if(operator == '÷'){
                displayValue.innerText=Math.round(parseInt(runningTotal)/parseInt(displayValue.innerText));
            }
            if(operator=''){
                clear();
             lastResults = true;
            }
            
        }
        

    }  

    event.stopPropagation();  
});

function clear(){
    runningTotal='';
    operator='';
}


