function mensajeAlerta(){
    alert("Cargando el pronóstico...");
}

function cerrarAlerta(elemento){
    let contenedor = elemento.closest(".mensaje-alerta");
    contenedor.remove();        

}

function cambiarUnidadMedida(elemento){
    let contenidoElemento = elemento.value; //obtenemos si el usuario selecciono °f o °c, es decir el valor seleccionado y lo guardamos en una nueva variable
    let tempMax = document.getElementsByClassName("maxima"); //Buscamos en el html las clases con el nombre "maxima", nos daria un arreglo con todos los valores de las temperaturas maximas y lo guardamos en una nueva variable

    let tempMin = document.getElementsByClassName("minima"); //esto daria un arreglo con todas las temperaturas minimas y lo guardamos en una nueva variable
    if (contenidoElemento === "°f"){
        for (let i=0; i<tempMax.length; i++){
            //maximas
            let nuevaMax = tempMax[i].innerHTML;  //el contenido del arreglo[i] se va a guardar en la variable nuevaMax
            let maxFahrenheit = (nuevaMax * 9) / 5+32; //obtuvimos la temperatura en °f y guardamos el valor
            tempMax[i].innerHTML = Math.round(maxFahrenheit);//guardamos el nuevo valor obtenido. Utilizamos Math.round para redondear el resultado
            
            //minimas 
            let nuevaMin = tempMin[i].innerHTML;
            let minFahrenheit = (nuevaMin *9) / 5+32;
            tempMin[i].innerHTML = Math.round(minFahrenheit);
        }
    }
    if (contenidoElemento === "°c"){
        for (let i=0; i<tempMax.length; i++){
            let nuevaMax = tempMax[i].innerHTML;
            let maxCelsius = (nuevaMax-32)*(5/9);
            tempMax[i].innerHTML = Math.round(maxCelsius);

            let nuevaMin = Number(tempMin[i].innerHTML);
            let minCelsius = (nuevaMin-32)*(5/9);
            tempMin[i].innerHTML = Math.round(minCelsius);
        }
    }

}