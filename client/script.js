const url = 'http://localhost:3000/heroe';

function prueba() {
    // Get all the heroes from the server and print them to the html
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                document.write('<div>' +
                    data[i].id + " " + data[i].nombre + ' ' + data[i].avenger

                    +
                    '</div>')
            }
        })
        .catch(err => {
            console.log(err);
        });
}