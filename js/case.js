document.getElementById('case-plus-btn').addEventListener('click', function(){
     const increaseValue = increaseProduct('case-field');

     const calculatePrice = increaseValue * 65;
     document.getElementById('case-price').innerText = calculatePrice;
})

document.getElementById('case-minus-btn').addEventListener('click', function(){
     const decreaseValue = decreaseProduct('case-field');

     const calculatePrice = decreaseValue * 65;
     document.getElementById('case-price').innerText = calculatePrice;
})