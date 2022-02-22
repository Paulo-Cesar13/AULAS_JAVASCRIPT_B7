const cod = (elemento) =>document.querySelector(elemento);
const cods = (elemento) =>document.querySelector(elemento);

pizzaJson.map((item, index) =>{
    let pizzaItem = cod(".models", ".pizza-item").cloneNode(true);

    // PREENCHENDO COM INFORMAÇÕES A PIZZA-AREA

    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;

    cod(".pizza-area").append( pizzaItem );
});