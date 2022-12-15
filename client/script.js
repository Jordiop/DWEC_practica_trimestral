const url = 'http://localhost:3000/heroe';


// Get all async-await version
async function verHeroes() {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            let avenger = await response.json();
            const container = document.getElementById('container');
            container.innerHTML = '';
            for (let i = 0; i < avenger.length; i++) {
                let tarjetas = document.createElement('div');
                tarjetas.classList.add('tarjeta');
                tarjetas.innerHTML =
                    '<img src="../server/images/heroe' + i + '.jpeg' + '" alt="imagen" width="100">' +
                    '<div>' + 'ID: ' + avenger[i].id + '</div>' +
                    '<div>' + 'Name: ' + avenger[i].nombre + '</div>' +
                    '<div>' + 'Status: ' + avenger[i].avenger + '</div>' +
                    '<div>' + 'Vida: ' + avenger[i].vida + '</div>';
                container.appendChild(tarjetas);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Get one async-await version
async function buscarHeroe() {
    try {
        let id = document.getElementById('busqueda').value;
        let response = await fetch(url + '/' + id);
        if (response.status === 200) {
            let avenger = await response.json();
            const container = document.getElementById('resultadoBusqueda');
            container.innerHTML = '';
            let tarjetas = document.createElement('div');
            tarjetas.classList.add('tarjeta');
            tarjetas.innerHTML =
                '<img src="../server/images/heroe' + id + '.jpeg' + '" alt="imagen" width="100">' +
                '<div>' + 'ID: ' + avenger.id + '</div>' +
                '<div>' + 'Name: ' + avenger.nombre + '</div>' +
                '<div>' + 'Status: ' + avenger.avenger + '</div>' +
                '<div>' + 'Vida: ' + avenger.vida + '</div>';
            container.appendChild(tarjetas);
        }


    } catch (err) {
        console.log(err);
    }
}



// Post async-await version
// Anida dos fetch
async function agregarHeroe() {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            let nombre = document.getElementById('nombreAgregar').value;
            let imagen = document.getElementById('imagenAgregar').value;
            let vida = document.getElementById('vidaAgregar').value;
            let status = document.getElementById('statusAgregar').value;
            // Comprobams que els camps no siguin buits
            if (nombre != '' || imagen != '' || vida != '' || status != '') {
                fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nombre: nombre,
                            imagen: imagen,
                            vida: vida,
                            avenger: status
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Put async-await version
// Anida dos metodes, primer fa un get per obtenir el personatge i després un put per modificar-lo a la db
// El primer que fa es fer un GET One per obtenir el personatge i després un PUT per modificar-lo a la db
async function modificarVida() {
    let id = document.getElementById('vidaBusqueda').value;
    try {
        let response = await fetch(url + '/' + id);
        if (response.status === 200) {
            let vida = document.getElementById('vidaModificar').value;
            let data = await response.json();
            // Comprobamos que los campos no esten vacios
            if (id != '' && vida != '') {
                data.vida = vida;
                await fetch(url + '/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// Mètode DELETE async-await version
async function borrarHeroe() {
    try {
        let id = document.getElementById('borrarBusqueda').value;
        const data =
            await fetch(url + '/' + id, {
                method: 'DELETE'
            });
    } catch (err) {
        console.log(err);
    }
}

// Mètode simple per borrar el contingut del Get One manualment
async function borrar() {
    let container = document.getElementById('resultadoBusqueda');
    container.innerHTML = '';
}