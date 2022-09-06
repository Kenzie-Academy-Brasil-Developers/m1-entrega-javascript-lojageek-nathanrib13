const itens  = [
    produto1 = {
        image: "animewoman.jpg",
        name: "Woman",
        price: 99.90,
        type: "actions"
    },
    produto2 = {
        image: "dragonballpersonagem.jpg",
        name: "Dragon Ball",
        price: 99.90,
        type: "actions"
    },
    produto3 = {
        image: "starwarspersonagem.jpg",
        name: "Star Wars",
        price: 99.90,
        type: "actions"
    },
    produto4 = {
        image: "clock.jpg",
        name: "Clock",
        price: 49.90,
        type: "paintings"
    },
    produto5 = {
        image: "gamepad.jpg",
        name: "Gamepad",
        price: 49.90,
        type: "paintings"
    },
    produto6 = {
        image: "personagem.jpg",
        name: "Personagem",
        price: 49.90,
        type: "paintings"
    }
    ]

const listFigures = []
const listFrames = []
separaItens(itens)

let secaolistPaintings = document.getElementsByClassName('paintings-list')[0]
let secaolistActions = document.getElementsByClassName('actionFigures-list')[0]




for(let i = 0; i < listFigures.length; i++){
    let elementoLista = document.createElement('li')
    let img           = document.createElement("img")
    let valor         = document.createElement("p")
    let nome          = document.createElement('span')
    nome.innerText    = `${listFigures[i].name}`
    valor.innerHTML   = `R$ ${listFigures[i].price}`
    img.src = `./assets/img/actions/${listFigures[i].image}`
    elementoLista.appendChild(img)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    secaolistPaintings.appendChild(elementoLista)

  }

for(let i = 0; i < listFrames.length; i++){
    let elementoLista = document.createElement('li')
    let img           = document.createElement("img")
    let valor         = document.createElement("p")
    let nome = document.createElement('span')
    nome.innerText = `${listFrames[i].name}`
    valor.innerHTML   = `R$ ${listFrames[i].price}`
    img.src = `./assets/img/painting/${listFrames[i].image}`
    elementoLista.appendChild(img)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    secaolistActions.appendChild(elementoLista)

  }
  

function separaItens(itens){
    for(let i = 0; i<itens.length; i++){ 
    if(itens[i].type === "actions"){ 
        listFigures.push(itens[i])
    } else{ 
         listFrames.push(itens[i])
}
}
}



//let body = document.querySelector('body')
//console.log(body)