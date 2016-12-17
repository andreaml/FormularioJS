/* Un formulario en Javascript que tenga una clase de progaramadores, con nombre, edad, lenguaje y color favorito, que genere a 4 programadores con los integrantes de este grupo. Los datos deberán ser representados en una lista por cada objeto (programador) y al hacer click en un elemento de una lista, deberá poderse cambiar el lenguaje o color favorito, pero no el nombre ni la edad. */
function Programador(nombre, edad, lenguaje, color){
    "use strict";
    this.nombre = nombre || "Sin nombre";
    this.edad = edad;
    this.lenguaje = lenguaje;
    this.color = color;
}

var programador1 = new Programador('Andrea', 20, 'Javascript', 'Morado');
var programador2 = new Programador('Ale', 19, 'Angular', 'Negro');
var programador3 = new Programador('Gustavo', 23, 'C#', 'Gris');
var programador4 = new Programador('Yair', 21, 'PHP', 'Azul');
function cambiarValores(clase, color){
    $('#nombre').val(clase.nombre);   $('#edad').val(clase.edad);  
    $('#lenguaje').val(clase.lenguaje);  
    $('#color').val(clase.color); 
    $('label').css('color',color);
    $('input').css('border-bottom-color',color);
}
function main(){
    $('#nombre').val(programador1.nombre);   $('#edad').val(programador1.edad);  
    $('#lenguaje').val(programador1.lenguaje);  
    $('#color').val(programador1.color); 
    /*$('.programador1').on('click', function(){
        $('#nombre').val(programador1.nombre);   $('#edad').val(programador1.edad);  
        $('#lenguaje').val(programador1.lenguaje);  
        $('#color').val(programador1.color); 
        $('label').css('color','#8C809F');
        $('input').css('border-bottom-color','#8C809F');
    });
    $('.programador2').on('click', function(){
        $('#nombre').val(programador2.nombre);   $('#edad').val(programador2.edad);  
        $('#lenguaje').val(programador2.lenguaje);  
        $('#color').val(programador2.color);         $('label').css('color','#73648A');
        $('input').css('border-bottom-color','#73648A');
    });
    $('.programador3').on('click', function(){
        $('#nombre').val(programador3.nombre);   $('#edad').val(programador3.edad);  
        $('#lenguaje').val(programador3.lenguaje);  
        $('#color').val(programador3.color);         $('label').css('color','#3C7A89');
        $('input').css('border-bottom-color','#3C7A89');
    });
    $('.programador4').on('click', function(){
        $('#nombre').val(programador4.nombre);   $('#edad').val(programador4.edad);  
        $('#lenguaje').val(programador4.lenguaje);  
        $('#color').val(programador4.color); 
        $('label').css('color','#2E4756');
        $('input').css('border-bottom-color','#2E4756');
    });*/
}
$(document).ready(main);