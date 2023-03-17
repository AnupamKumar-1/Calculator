var buttons = document.getElementsByClassName("button");
var display = document.getElementById("dis_op");

var operand1 = 0;
var operand2 = null;
var operator = null;


function Allclear() {
    document.getElementById("dis_op").value='';
}

for(var i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value'); 

        if(value == "%" ){
            operator= value;
            
            operand2 =  parseFloat(display.value);
            display.value = (operand2/100)*operand1;
        }
        
         if(value == '+/-'){
            display.value = eval(parseFloat(display.value) * (-1) );
        }
        else if(value == '+' || value == '-' || value == "*" || value == "/" ){
        
            operator = value;
            operand1 = parseFloat(display.value);
            display.value = null;
    }
    

    else if(value == '='){            
        if(operator != null){
            operand2 = parseFloat(display.value);
            display.value = eval(operand1+" "+operator+" "+operand2);
        }
        else{
            display.value = "Error";
        }
    }

    

    else if(value == '.') {
        if(display.value.length && !display.value.includes('.') ) {
            display.value += value;
        }
    }
        
       
      
        else{

            dis_op.value += value;
            
        }

        
    });

}

function light() {
    var element = document.body;
    
    element.classList.toggle("light-mode");
    e.classList.toggle("light-mode");
 }