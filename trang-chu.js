let listBuyBtn = document.querySelectorAll('.click-to-buy');
listBuyBtn.forEach(function (li, index) {
    li.addEventListener("click", e => {
        let btnItem = e.target;
        let product = btnItem.parentElement.parentElement.parentElement;
        let productImg = product.querySelector('.col img').src
        let productHeading = product.querySelector('.col p').innerText
        let productPrice = product.querySelector('.col b').innerText
        addCart(productImg, productHeading, productPrice)
    })
})
function addCart(productImg, productHeading, productPrice) {
    let addtr = document.createElement('tr');
    let content = `<tr class="cart-row d-flex">
    <td ><img style="width:70px;margin-right:10px" src="`+ productImg + `"
        alt=""></td>
<td>
    <b style="padding-right:70px">`+ productHeading + `</b>
</td>
<td>
    <span style="padding-right:70px">Số lượng<span class="number-order"
            style="margin-left:10px;padding:2px 10px;border:1px solid rgba(58, 58, 58, 0.722);border-radius:3px">1</span></span>
</td>
<td>
    <span style="padding-right:70px">Thành tiền <span class="product-price-detail"
            style="margin-left:10px;padding:2px 4px;border:1px solid rgba(58, 58, 58, 0.722);border-radius:3px">`+ productPrice + `</span></span>
</td>
<i id="cancel-btn" class="bi bi-x-lg"></i>
</tr >`
    addtr.innerHTML = content;
    var listCart = document.querySelector('tbody')
    listCart.append(addtr)
    cartTotal()
}
let num = 0;
function cartTotal() {
    let cartItem = document.querySelectorAll('tbody tr')
    let total = 0;
    for (let index = 0; index < cartItem.length; index++) {
        let inputValue = cartItem[index].querySelector('.number-order').innerText;
        let productPrice = cartItem[index].querySelector('.product-price-detail').innerText;
        let newproductPrice1 = productPrice.replace('.', '')
        let newproductPrice2 = newproductPrice1.replace('₫', '')
        let newproductPrice3 = newproductPrice2.replace('.', '')
        let totalA = Number(inputValue) * Number(newproductPrice3);
        total = total + totalA;
        totalB = total.toLocaleString('de-DE')
        let totalShow = document.querySelector('.money');
        totalShow.innerHTML = totalB;
    }
    let amountOrder = document.querySelector('.cart p b')
    let amountOrder1 = document.querySelector('#cartBtn a span')
    num++;
    amountOrder.innerText = num
    amountOrder1.innerText = num
    let cancelOrder = document.querySelectorAll('#cancel-btn')
    cancelOrder.forEach(function (i) {
        i.addEventListener("click", e => {
            let cancelItem = e.target
            let cancelItem1 = cancelItem.parentElement
            var listCart = document.querySelector('tbody')
            listCart.removeChild(cancelItem1)
            // for (let index = 0; index < cancelItem1.length; index++) {
            //     let orderNumReduce = cancelItem1[index].querySelector('.number-order').innerText;
            //     let productPriceReduce = cancelItem1[index].querySelector('.product-price-detail').innerText;
            //     let totalreduceA = Number(orderNumReduce) * Number(productPriceReduce);
            //     totalreduce = totalreduce - totalreduceA;
            //     totalreduceB = totalreduce.toLocaleString('de-DE')
            //     let totalShow = document.querySelector('.money');
            //     totalShow.innerHTML = totalreduceB;
            // }
        })
    })
}


let productPrice = document.querySelectorAll('.col p b')
for (let index = 0; index < productPrice.length; index++) {
    let value = productPrice[index].innerText
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    console.log(value)
    console.log(VND.format(value))
    // let format = VND.format(value)
    // console.log(format)
    productPrice[index].innerText = VND.format(value)
}

// productPrice.forEach(function () {
//     productPrice.innerText.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
//     console.log(productPrice)
// })
// new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000);


// console.log(productPrice)
// const VND = new Intl.NumberFormat('vi-VN', {
//     style: 'currency',
//     currency: 'VND',
// });
// let format = VND.format(productPrice)
// console.log(VND.format(productPrice))
// productPrice.innerText = format

