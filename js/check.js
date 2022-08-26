document.getElementById('check-btn').addEventListener('click', function(){
     const iphonePrice = productPrice('iphone-price');
     const casePrice = productPrice('case-price');
     const allProductPrice = iphonePrice + casePrice;
     const subtotal = document.getElementById('subtotal').innerText = allProductPrice;
     const tax = subtotal * 0.15;
     const finalPrice = subtotal + tax;
     document.getElementById('final-price').innerText = finalPrice;
})