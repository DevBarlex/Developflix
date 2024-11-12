import peliculas from './peliculas.js'

//OPCION 1
/*
function mostrarPeliculasPorGenero(genreId, ContainerId) {
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(genreId));
   
    const contenedor = document.getElementById(ContainerId)
    console.log(contenedor);
    
    contenedor.innerHTML = ''
 
    peliculasFiltradas.forEach(function (pelicula) {
        const peliculasDiv = document.createElement('div')
        peliculasDiv.classList.add('pelicula')
        peliculasDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>`;
        contenedor.appendChild(peliculasDiv)
        
    })
}


mostrarPeliculasPorGenero(28, 'genero-28')
mostrarPeliculasPorGenero(53, 'genero-53')
mostrarPeliculasPorGenero(12, 'genero-12')
*/

//OPCION 2

function mostrarPeliculasPorGenero(genreId, ContainerId) {
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(genreId));
    const imageBase = 'https://image.tmdb.org/t/p/w200'
    const contendeor = document.getElementById(ContainerId)

    peliculasFiltradas.forEach(pelicula => {
        const peliculasDiv = document.createElement('div')
        peliculasDiv.classList.add('pelicula')

        const titulo = document.createElement('h3')
        titulo.classList.add('titulo')
        titulo.textContent = pelicula.title

        const portada = document.createElement('img')
        portada.classList.add('portada')
        portada.src = `${imageBase}${pelicula.poster_path}`
        portada.alt = pelicula.title

        peliculasDiv.appendChild(portada)
        peliculasDiv.appendChild(titulo)
        contendeor.appendChild(peliculasDiv)
    })
}

mostrarPeliculasPorGenero(28, 'genero-28')
mostrarPeliculasPorGenero(53, 'genero-53')
mostrarPeliculasPorGenero(12, 'genero-12')