function modificarfecha() {
    const fecha=new Date();
    document.getElementById('fecha').innerText=fecha.getFullYear();
    console.log(fecha);
}

window.addEventListener('load', modificarfecha);