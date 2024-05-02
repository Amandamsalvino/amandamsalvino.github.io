const produto = document.querySelector(".product")


const botaoCardapio = document.querySelector(".cardapio")
const botaoDesconto = document.querySelector(".desconto")
const botaoTotal = document.querySelector(".total")
const botaoFiltrar = document.querySelector(".filtrar")



function real (valor){

    const newReal = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return newReal
}


function cardapio (arrayproduto){

let lista = ''

arrayproduto.forEach(item => {
     lista += 
 `
        <li >

            <img class="img-bacon" src="${item.src}">

            <p class="nome-bacon"> ${item.name}</p>

            <p class="preco-bacon">  ${real(item.price)} </p>

        </li>  
 `    

 produto.innerHTML = lista

});
}


function desconto (){

    let novoValor = menuOptions.map(item =>({
        
        ...item,

        price: item.price - (item.price * 0.10)       
       
        
    }))
cardapio(novoValor)

}

function total (){
    let valorTotal = menuOptions.reduce((acumulador, item) =>{
        acumulador += item.price 
        return acumulador
    },0)

    produto.innerHTML = `
        <li>

        <p>O Valor total dos itens é ${real(valorTotal)}</p>

        </li>
    `
}


function filtrar (){

    let filtro = menuOptions.filter(item => item.vegan ===true)

    cardapio(filtro)
}




botaoCardapio.addEventListener("click", ()=> cardapio(menuOptions))
botaoDesconto.addEventListener("click", desconto)
botaoTotal.addEventListener("click", total)
botaoFiltrar.addEventListener("click", filtrar)