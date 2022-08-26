document.getElementById('iphone-plus-btn').addEventListener('click', function(){
     const increaseValue = increaseProduct('iphone-field');

     const calculatePrice = increaseValue * 1250;
     document.getElementById('iphone-price').innerText = calculatePrice;
})

document.getElementById('iphone-minus-btn').addEventListener('click', function(){
     const decreaseValue = decreaseProduct('iphone-field');

     const calculatePrice = decreaseValue * 1250;
     document.getElementById('iphone-price').innerText = calculatePrice;
})