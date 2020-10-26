//create map
const map = L.map('mapid').setView([-23.5520361,-46.636623], 15);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;


// create and add markes
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon Layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map);
});

// adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images

    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da ultima imagem adicionada.

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo esta vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    
    // limpar o campo antes de adicionar ao container de iamgens
    input.value = ""

    // adicionar o clone ao container de #images

    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')

    const tamanho = fieldsContainer.length

    if(tamanho <= 1){

        span.parentNode.children[0].value = ""
        return
    }

     span.parentNode.remove();
}

// selecionar sim ou nao

function toggleSelect(event){
    //verificar se é sim ou nao

 
    
    // retirar a class .active DOS BOTOES
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })

    // colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valores
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event){

    const lat = document.querySelector('[name=lat]');
    const lng = document.querySelector('[name=lng]');
    console.log(lat)
    // validar se lat e lng estao preenchidos
  /*  if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }*/
}