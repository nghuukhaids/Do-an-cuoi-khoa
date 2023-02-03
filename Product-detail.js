let mainImg = document.querySelector('.main-img')
let listImg = document.querySelectorAll('.list-img img')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let currentIndex = 0;
function updateImgByIndex(index) {
    document.querySelectorAll('.list-img div').forEach(e => {
        e.classList.remove('active-img')
    })
    currentIndex = index;
    mainImg.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active-img')
}
listImg.forEach((imgClick, index) => {
    imgClick.addEventListener("click", e => {
        updateImgByIndex(index)
    })
}
)
prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    }
    else {
        currentIndex--
    }
    updateImgByIndex(currentIndex)
}
)
nextBtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    }
    else {
        currentIndex++
    }
    updateImgByIndex(currentIndex)
}
)
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let lessBtn = document.querySelector('.less')
let moreBtn = document.querySelector('.more')
let numberOrder = document.querySelector('.number p')
let num = 0;
lessBtn.addEventListener("click", lessNum => {
    if (num > 0) {
        num--;
        numberOrder.innerText = num
    }
})
moreBtn.addEventListener("click", moreNum => {
    num++;
    numberOrder.innerText = num
})
let heartIcon = document.querySelector('.save')
function changeColor() {
    heartIcon.addEventListener("click", e => {
        heartIcon.style.color = 'red';
        console.log('ok');
        black()
    })
}
changeColor();
function black() {
    heartIcon.addEventListener("click", e => {
        heartIcon.style.color = 'black';
        changeColor()
    }
    )
}
// ------------------------------------------
let buyBtn = document.querySelector('#order-btn-id');
console.log(buyBtn)

function addToCart() {
    let productImg = document.querySelector('.list-img div img').src
    console.log(productImg)
    let productHeading = product.querySelector('.col p').innerText
    let productPrice = product.querySelector('.col b').innerText
}

listBuyBtn.forEach(function (li, index) {
    li.addEventListener("click", e => {
        let btnItem = e.target;
        let product = btnItem.parentElement.parentElement.parentElement;
        let productImg = product.querySelector('.col img').src
        let productHeading = product.querySelector('.col p').innerText
        let productPrice = product.querySelector('.col b').innerText
        let amountOrder = document.querySelector('.cart p b')
        let amountOrder1 = document.querySelector('#cartBtn a span')
        num++;
        amountOrder.innerText = num
        amountOrder1.innerText = num
        addCart(productImg, productHeading, productPrice)
    })
})
// function addCart(productImg, productHeading, productPrice) {
//     let addtr = document.createElement('tr');
//     let content = `<tr class="cart-row d-flex">
//     <td ><img style="width:70px;margin-right:10px" src="`+ productImg + `"
//         alt=""></td>
// <td>
//     <b style="padding-right:70px">`+ productHeading + `</b>
// </td>
// <td>
//     <span style="padding-right:70px">Số lượng<span class="number-order"
//             style="margin-left:10px;padding:2px 10px;border:1px solid rgba(58, 58, 58, 0.722);border-radius:3px">1</span></span>
// </td>
// <td>
//     <span style="padding-right:70px">Thành tiền <span class="product-price-detail"
//             style="margin-left:10px;padding:2px 4px;border:1px solid rgba(58, 58, 58, 0.722);border-radius:3px">`+ productPrice + `</span></span>
// </td>
// <i id="cancel-btn" class="bi bi-x-lg"></i>
// </tr >`
//     addtr.innerHTML = content;
//     var listCart = document.querySelector('tbody')
//     listCart.append(addtr)
//     cartTotal()
// }

