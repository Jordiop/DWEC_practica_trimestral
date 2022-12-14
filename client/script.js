const url = 'http://localhost:3000/heroe';

// Get all async-await version
async function verHeroes() {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            let avenger = await response.json();
            const container = document.getElementById('container');
            for (let i = 0; i < avenger.length; i++) {
                let tarjetas = document.createElement('div');
                tarjetas.classList.add('tarjeta');
                tarjetas.innerHTML =
                    '<img src="../images/heroe' + i + '.jpeg' + '" alt="imagen" width="100">' +
                    '<div>' + 'ID: ' + avenger[i].id + '</div>' +
                    '<div>' + 'Nombre: ' + avenger[i].nombre + '</div>' +
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
        let response = await fetch(url);
        if (response.status === 200) {
            let id = document.getElementById('busqueda').value;
            let avenger = await response.json();
            const container = document.getElementById('resultadoBusqueda');
            container.innerHTML = '';
            for (let i = 0; i < avenger.length; i++) {
                if (id == avenger[i].id) {
                    let tarjetas = document.createElement('div');
                    tarjetas.classList.add('tarjeta');
                    tarjetas.innerHTML =
                        '<img src="../images/heroe' + i + '.jpeg' + '" alt="imagen" width="100">' +
                        '<div>' + 'ID: ' + avenger[i].id + '</div>' +
                        '<div>' + 'Nombre: ' + avenger[i].nombre + '</div>' +
                        '<div>' + 'Status: ' + avenger[i].avenger + '</div>' +
                        '<div>' + 'Vida: ' + avenger[i].vida + '</div>';
                    container.appendChild(tarjetas);
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
};


// Post
async function agregarHeroe() {
    try {
        let nombre = document.getElementById('nombreAgregar').value;
        let imagen = document.getElementById('imagenAgregar').value;
        let vida = document.getElementById('vidaAgregar').value;
        let status = document.getElementById('statusAgregar').value;
        // Comprobamos que los campos no esten vacios
        if (nombre != '' || imagen != '' || vida != '' || status != '') {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        imagen: imagen,
                        vidas: vida,
                        status: status
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

    } catch (err) {
        console.log(err);
    }
}