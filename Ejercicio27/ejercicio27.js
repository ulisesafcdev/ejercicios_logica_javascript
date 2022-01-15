/* 

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula {

    // creamos un constructor para mandar los datos en un objeto
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {

        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPaises(pais);
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)

    }

    // creamos un metodo static getter donde se alojan los generos aceptados
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "GameShow", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    // creamos un metodo static donde nos muestre en ppantalla el listado de generos
    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    // creamos un metodo para validar los "string" de los datos del objeto
    validarCadena(propiedad, valor) {

        if (!valor) return console.warn(`${propiedad}: ${valor} esta vacio`);
        if (typeof valor !== "string") return console.warn(`${propiedad}: ${valor} no es una cadena de texto`);

        // si no se cumple ningna de las anteriores condiciones es porque esta todo correcto
        // y retornara a true
        return true;

    }

    // creamos metodo para validar los "numbers"
    validarNumeros(propiedad, valor) {

        if (!valor) return console.warn(`${propiedad}: ${valor} esta vacio`);
        if (typeof valor !== "number") return console.warn(`${propiedad}: ${valor} no es un numero`);

        return true;

    }

    // creamos metodo para validar los "arreglos"
    validarArreglo(propiedad, valor) {

        if (!valor) return console.warn(`${propiedad}: ${valor} esta vacio`);
        if (!(valor instanceof Array)) return console.warn(`${propiedad}: ${valor} no es un arreglo`);
        if (valor.length === 0) return console.warn(`${propiedad}: ${valor} el arreglo no tiene datos`);

        for (let arr of valor) {
            if (typeof arr !== "string") {
                return console.warn(`El valor: ${valor} NO es una cadena de texto`);
            }
        }

        return true;

    }

    // creamos metodo para validar la longitud de caracteres de titulo y director
    validarLongitudCadena(propiedad, valor, longitud) {

        if (valor.length > longitud) {
            return console.warn(`${propiedad}: ${valor} sobrepasa la cantidad de caracteres permitidos, maximo deben ser ${longitud} caracteres`);
        }

        return true;

    }

    // creamos metodo para validar IMDB id
    validarIMDB(id) {

        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.warn(`IMDB id: "${id}" NO es válido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números!`);
            }
        }

    }

    // creamos metodo para validar el titulo
    validarTitulo(titulo) {

        if (this.validarCadena("Titulo", titulo)) {
            this.validarLongitudCadena("Titulo", titulo, 100)
        }

    }

    // creamos metodo para validar el director
    validarDirector(director) {

        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }

    }

    // creamos metodo para validar estreno
    validarEstreno(estreno) {
        if (this.validarNumeros("Año de estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.warn(`Año de estreno: "${estreno}" NO es valido, debe incluir 4 digitos`);
            }
        }
    }

    // creamos metodo para validar paises
    validarPaises(paises) {
        this.validarArreglo("Pais", paises);
    }

    // creamos metodo para validar generos
    validarGeneros(generos) {
        if (this.validarArreglo("Genero", generos)) {
            for (let gen of generos) {
                if (!Pelicula.listaGeneros.includes(gen)) {
                    console.warn(`Genero(s) incorrectos: ${generos.join(", ")}`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    // creamos metodo para validar calificacion
    validarCalificacion(calificacion) {
        if (this.validarNumeros("Calificacion", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
                ? console.warn(`La calificacion tiene que ser en un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    // creamos un metodo con todo la ficha tecnica
    fichaTecnica() {
        console.info(`Ficha Tecnica:\n\nIMDB id: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nEstreno: ${this.estreno}\nPais: ${this.pais}\nGenero: ${this.generos}\nCalificacion: ${this.calificacion}`);
    }

}

// Pelicula.generosAceptados()

/* const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Ulises AFC Dev",
    director: "Ulises AFC Dev",
    estreno: 2020,
    pais: ["El Salvador","Canada","China"],
    generos: ["Music"],
    calificacion: 8
});

peli.fichaTecnica() */


const misPelis = [{
    id: "tt1234567",
    titulo: "Ulises AFC Dev",
    director: "Ulises AFC Dev",
    estreno: 2020,
    pais: ["El Salvador", "Canada", "China"],
    generos: ["Music"],
    calificacion: 8
},
{
    id: "tt1234567",
    titulo: "AFC Dev",
    director: "AFC Dev",
    estreno: 2020,
    pais: ["El Salvador","Canada","China"],
    generos: ["Music"],
    calificacion: 8
},
{
    id: "tt1234567",
    titulo: "Dev",
    director: "Dev",
    estreno: 2020,
    pais: ["El Salvador","Canada","China"],
    generos: ["Music"],
    calificacion: 8
}]

// creamos instancias generadas a partir de un arreglo con el metodo forEach
misPelis.forEach(el => new Pelicula(el).fichaTecnica());