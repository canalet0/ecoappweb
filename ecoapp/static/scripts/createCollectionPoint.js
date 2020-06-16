$(document).ready(function(){

    populateUFs();
    addChangeEventToStateSelect();
    addClickEventHandlerToCollectionOptions();
});

function populateUFs() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for( const state of states ) {
            $("#stateSelect").append(`<option value="${state.id}">${state.nome}</option>`)
        }
    })
}

function addChangeEventToStateSelect(){
    $('#stateSelect').on('change', function(){
        getCities();
    });
}

function getCities() {
    const ufValue = $('#stateSelect').val();
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    const citySelect = $("#citySelect");
    citySelect.empty();
    citySelect.prop('disabled', "disabled");
    fetch(url)
    .then( res => res.json())
    .then( cities => {
        citySelect.append(`<option value>Selecione a Cidade</option>`);
        for( const city of cities ) {
            citySelect.append(`<option value="${city.nome}">${city.nome}</option>`)
        }
        citySelect.prop('disabled', false);
    })
}

function addClickEventHandlerToCollectionOptions(){
    $.each($("#collectionOptions").children(), function( index, liOptionElement ) {
        $(liOptionElement).on("click",handleSelectedItem);
    });
}

function handleSelectedItem(event){
    const collectionOption = event.target;

    if($(collectionOption).hasClass("active"))
        deactiveCollectionOption(collectionOption)
    else activeCollectionOption(collectionOption);
}

function activeCollectionOption(collectionOption){
    $(collectionOption).addClass("active");
}

function deactiveCollectionOption(collectionOption){
    $(collectionOption).removeClass("active");
}