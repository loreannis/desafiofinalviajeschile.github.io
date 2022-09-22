//Oculta el texto del "segundo bloque" las cuatros cards
$(".card2").click(function(){
    $(".card-body2").toggle();
})

//Recordatorio de escribir los datos de los formularios y envio del mensaje
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))