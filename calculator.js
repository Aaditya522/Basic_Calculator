let inputField=document.getElementById("inputField");

function Clear(){
    inputField.value="";
}

function Del() {
    if (inputField.value.length > 0) {
      inputField.value = inputField.value.slice(0,-1);
    }
}


function btnClick(input){
    if(inputField.value=="Syntax Error "){
        return;
    }
    inputField.value+=input;
}

function Evaluate(){
    try{
        inputField.value = eval(inputField.value);
    }
    catch(string){
        Clear();
            inputField.value="Syntax Error ";
    }
}
