//evabe function build kore easy way te kora jai. 

function getInputFieldValueById(inputFieldID){
    const inputField=document.getElementById(inputFieldID);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

function getTextElementValueByID(elementID){
    const textElement=document.getElementById(elementID);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueByID(elementId, newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}