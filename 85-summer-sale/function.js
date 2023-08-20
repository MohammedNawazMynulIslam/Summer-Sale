let productCounter = 1;
let total = 0

function getName(target){
const productNameList = document.getElementById('product-list');
const productName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
const li = document.createElement('li');
li.innerText = `${productCounter}. ${productName}`;
productNameList.appendChild(li);
productCounter++;

const price =target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(" ")[0];
total = parseFloat(total) + parseFloat(price)

document.getElementById('total-price').innerText = total;
const purchase= document.getElementById('purchase-btn');
    if(total >= 200){
        purchase.removeAttribute('disabled')
        }else{
            purchase.setAttribute('disabled', true)

}
}
