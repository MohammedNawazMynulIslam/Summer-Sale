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

const purchase = document.getElementById('purchase-btn');
    if(total >= 0){
        purchase.removeAttribute('disabled')
        }else{
            purchase.setAttribute('disabled', true)
}

const CouponButton = document.getElementById('apply-coupon');
if(total>=200){
    CouponButton.removeAttribute('disabled')
        }else{
            CouponButton.setAttribute('disabled', true)
}

const applyCoupon = document.getElementById('apply-coupon').addEventListener('click',function(){
    const couponCode=document.getElementById('coupon-code').value;
    if(couponCode === "SELL200"){
        const totalPrice = (total * 0.2).toFixed(2)
        const CurrentDiscount = document.getElementById('discount')
        const discountAmountOnly =parseFloat(totalPrice).toFixed(2) ;
        CurrentDiscount.innerText = discountAmountOnly;

        const Total = document.getElementById('Total')
        const currentTotal = Total.innerText;
        const newTotal = total - discountAmountOnly
        Total.innerText = newTotal;
    }
})
}
function GoHome() {
    window.location.reload();
  }
