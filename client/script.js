const url = 'http://localhost:3000/heroe';

// Get all
function verHeroes() {
    fetch(url)
        .then(res => res.json())
        .then(avenger => {
            const container = document.getElementById('container');
            for (let i = 0; i < avenger.length; i++) {
                let tarjetas = document.createElement('div');
                tarjetas.classList.add('tarjeta');
                tarjetas.innerHTML =
                    '<img src="../images/heroe' + i + '.jpeg' + '" alt="imagen" width="100">' +
                    '<div>' + 'ID: ' + avenger[i].id + '</div>' +
                    '<div>' + 'Nombre: ' + avenger[i].nombre + '</div>' +
                    '<div>' + 'Status: ' + avenger[i].avenger + '</div>' +
                    '<div>' + 'Points: ' + avenger[i].points + '</div>';
                container.appendChild(tarjetas);
            }
        })
        .catch(err => {
            console.log(err);
        });
}

// Get one
function buscarHeroe() {
    let id = document.getElementById('busqueda').value;
    fetch(url)
        .then(res => res.json())
        .then(avenger => {
            const container = document.getElementById('resultadoBusqueda');
            for (let i = 0; i < avenger.length; i++) {
                if (id == avenger[i].id) {
                    let tarjetas = document.createElement('div');
                    tarjetas.classList.add('tarjeta');
                    tarjetas.innerHTML =
                        '<img src="../images/heroe' + i + '.jpeg' + '" alt="imagen" width="100">' +
                        '<div>' + 'ID: ' + avenger[i].id + '</div>' +
                        '<div>' + 'Nombre: ' + avenger[i].nombre + '</div>' +
                        '<div>' + 'Status: ' + avenger[i].avenger + '</div>' +
                        '<div>' + 'Points: ' + avenger[i].points + '</div>';
                    container.appendChild(tarjetas);
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
};