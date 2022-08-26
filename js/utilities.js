// product increasing function
function increaseProduct(elementId){
     const element = document.getElementById(elementId);
     const elementValueString = element.value;
     const elementPreviousValue = parseInt(elementValueString);

     const elementValueIncrease = elementPreviousValue + 1;
     const elementValue = element.value = elementValueIncrease;
     return elementValue;
}

// product decreasing function
function decreaseProduct(elementId){
     const element = document.getElementById(elementId);
     const elementValueString = element.value;
     const elementPreviousValue = parseInt(elementValueString);

     const elementValueDecrease = elementPreviousValue - 1;
     if(elementValueDecrease === 0){
          alert("You can't decrease more");
     }else{
          const elementValue = element.value = elementValueDecrease;
          return elementValue;
     }
}

// product price
function productPrice(elementId){
     const element = document.getElementById(elementId);
     const elementValueString = element.innerText;
     const elementPreviousValue = parseInt(elementValueString);
     return elementPreviousValue;
}