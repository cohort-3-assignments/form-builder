function addElementToFormPreview(element){
    document.querySelector('#form-preview').appendChild(element);
}



function getPlaceholder(type){
    switch(type){
        case 'text':
            return 'Enter your text';
        case 'email':
            return 'youremail@gmail.com';
        case 'password':
            return '******';
        case 'number':
            return '0';
        case 'date':
            return 'yyyy-mm-dd';
        default:
            return 'Enter your text';
    }
}

function createInputElement(label, type){

    if(type=='textarea'){
        let textarea = document.createElement('textarea');
        textarea.setAttribute('placeholder', getPlaceholder(type));
        textarea.setAttribute('class', 'form-control');
        return textarea;
    }
    let input = document.createElement('input');
    input.setAttribute('type', type);

    let placeholder = getPlaceholder(type);
    input.setAttribute('placeholder', placeholder);

    input.setAttribute('class', 'form-control');

    
    return input;
}

function createLabelElement(label){
    let labelElement = document.createElement('label');
    labelElement.innerText = label;
    return labelElement;
}


function createFormElement(label, type){
    let formElement = document.createElement('div');
    formElement.appendChild(createLabelElement(label));
    formElement.appendChild(createInputElement(label, type));
    return formElement;
}

// onload 
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('addField').addEventListener('click', function(){
        
        let label = document.getElementById('form-label').value;
        let type = document.getElementById('form-element').value;

        
        const element = createFormElement(label, type);
        addElementToFormPreview(element);

    });
    
})