//function for getElementById
function getId(id){
    const elementId = document.getElementById(id);
    return elementId;
}

//function for getElementsByClassName
function getClass(className){
    const elementClass = document.getElementsByClassName(className);
    return elementClass;
}

//function for getInnerText
function getText(id){
    const textId = document.getElementById(id);
    const getInnerText = Number(textId.innerText);
    return getInnerText;
}


//heart icon clicked part
const heartIcons = getClass('heart-icon');
for(const icon of heartIcons){
    icon.addEventListener('click',function(){
        let heartCountValue = getText('heart-count');
        heartCountValue++;
        getId('heart-count').innerText = heartCountValue;
    })
}

//copy part






