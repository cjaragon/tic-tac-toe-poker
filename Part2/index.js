let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

const setCard = () =>{
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    document.getElementById('idInput').value = ''
    document.getElementById('colorInput').value = ''
}

const resetCards = () =>{
    let cards = document.getElementsByClassName('card')
    for (i = 0; i < cards.length; i++){
        cards[i].style.color = 'grey'
    }
}