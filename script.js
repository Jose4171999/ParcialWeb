const obtenerUbicacion = () => {
    const input = document.getElementById('ip').value;
    const url = `http://ip-api.com/json/${input}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            
            const ObjetoDatos = {
                Ip_o_Dominio: data.query,
                País: data.country,
                Ciudad: data.city,
                Región: data.regionName,
                Latitud: data.lat,
                Longitud: data.lon,
                ISP: data.isp
            };


            const arregloDatos = Object.entries(ObjetoDatos);

            // Mostramos los datos en el HTML
            mostrarDatos(arregloDatos);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
};

// Función que muestra los datos en pantalla
const mostrarDatos = (arregloDatos) => {

    
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = arregloDatos.map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('');
    
};

document.getElementById('boton').addEventListener('click', obtenerUbicacion);
