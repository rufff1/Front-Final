function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));
let item = ''
basket.forEach(x => {
    item += `
    <div class="col-lg-12 ado list-bskt">
    <a href="/shop-detail.html"><img src="${x.Image}" alt=""></a>
    <h2 class="cc product-name">${x.Name}</h2>
    <input type="number" value=${x.Count}>
    <h3 class="product-price">$ ${x.Price}</h3>
    </div>
    `
})
document.getElementById('basket-list').innerHTML = item
}

GetProducts()


function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket.length === 0 ) {
        document.getElementById('count').style.display = 'none'
    }
    else{
        document.getElementById('count').style.display = 'block'
    }
    document.getElementById('count').innerHTML = basket.length
}

CountBasket()

function Calculator() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let AllPrice=0;
    let AllCount=0;
      basket.forEach(x => {
           let Price=parseFloat(x.Price);
           let FullPrice=x.Count*Price;
           AllPrice+=FullPrice;
           AllCount+=x.Count;
      });
         
         let items="";

         items=`
         <div class="basket-box w-100 mx-auto  col-lg-12 d-flex align-items-center justify-content-between">
         <h4 class="allcount">AllCount:${AllCount}</h4>
         <h4 class="allprice">AllPrice:${AllPrice}</h4>
     </div>
    
         `
         document.getElementById('calc').innerHTML = items;
            

}
Calculator();