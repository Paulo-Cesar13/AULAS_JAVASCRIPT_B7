let cart = [];
let modalQt = 1;
let modalkey = 0;
const dq = (el)=>document.querySelector(el);
const dqA = (el)=>document.querySelectorAll(el);

// LISTAGEM DAS PIZZAS

pizzaJson.map((item, index)=>{
    let pizzzItem = dq('.models .pizza-item').cloneNode(true);

    pizzzItem.setAttribute('data-key', index);
    pizzzItem.querySelector('.pizza-item--img img').src = item.img;
    pizzzItem.querySelector('.pizza-item--price').innerHTML = 'R$ '+item.price.toFixed(2);
    pizzzItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzzItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // EVENTO DE ABRIR O MODAL
    pizzzItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt =1;
        modalkey = key;
        
        dq('.pizzaBig img').src = pizzaJson[key].img;
        dq('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        dq('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        dq('.pizzaInfo--actualPrice').innerHTML ='R$ '+pizzaJson[key].price.toFixed(2);
        dq('.pizzaInfo--size.selected').classList.remove('selected');
        dqA('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        dq('.pizzaInfo--qt').innerHTML = modalQt;

        dq('.pizzaWindowArea').style.opacity = 0;
        dq('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            dq('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    

    dq('.pizza-area').append( pizzzItem );
});

// EVENTOS DO MODAL

function closeModal() {
    dq('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        dq('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

dqA('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> {
    item.addEventListener('click', closeModal);
});

//BOTÕES MAIS E MENOS DO MODAL

dq('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if(modalQt > 1) {
        modalQt--;
        dq('.pizzaInfo--qt').innerHTML = modalQt;
    };
});

dq('.pizzaInfo--qtmais').addEventListener('click',()=>{
    modalQt++;
    dq('.pizzaInfo--qt').innerHTML = modalQt;
});

// EVENTO CLICAR BOTÕES DE TAMANHO

dqA('.pizzaInfo--size').forEach((size, sizeIndex)=>{
   size.addEventListener('click',(e)=>{
       dq('.pizzaInfo--size.selected').classList.remove('selected');
       size.classList.add('selected');
   });
});

// EVENTO BOTÃO ADD AO CARRINHO

dq('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(dq('.pizzaInfo--size.selected').getAttribute('data-key'));
    let indentifier = pizzaJson[modalkey].id+'@'+size;
    let key = cart.findIndex((item)=>item.indentifier == indentifier);
    if(key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push({
            indentifier,
            id:pizzaJson[modalkey].id,
            size:size,
            qt:modalQt
        });
    }
    updateCart();
    closeModal();
});

function updateCart() {
    if(cart.length > 0) {
        dq('aside').classList.add('show');
        dq('.cart').innerHTML ='';
        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
            let cartItem = dq('.models .cart--item').cloneNode(true);
            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            };
            let pizzaName = `${pizzaItem.name} ${pizzaSizeName}`;
            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-name').innerHTML = pizzaName;
            dq('.cart').append(cartItem);
        }
    } else {
        dq('aside').classList.remove('show');
    }
};