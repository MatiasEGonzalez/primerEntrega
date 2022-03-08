alert("Bienvenidos a AcaCcomeRico");

let ordenComida;
let ordenBebida;
let ordenPostre;
let comida;
let bebida;
let postre;
let contador = 0;

const categorias = ["DESAYUNO Y MERIENDA ", "ALMUERZO Y CENA ", "POSTRES ", "BEBIDAS "];

console.log("Tenemos " + categorias.length + " Categorias en el menú\n" + categorias);

class Lista {
    constructor(id, nombre, precio, category, imgValor) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.category = category;
        this.img = imgValor;      
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

let listaProductosMenu = "Estos son nuestros productos";

const listaProductos = [];

listaProductos.push(new Lista(1, "pizza", 600, categorias[1], "./img/pizza.jpg"));
listaProductos.push(new Lista(1, "milanesas con pure", 550, categorias[1], "./img/milanesaConPure.jpg"));
listaProductos.push(new Lista(2, "milanesas con ensalada", 550, categorias[1], "./img/milanesaConEnsalada.jpg"));
listaProductos.push(new Lista(3, "milanesas con papas fritas", 550, categorias[1], "./img/milanesasConPapasFritas.jpg"));
listaProductos.push(new Lista(4, "asado con pure", 550, categorias[1], "./img/asadoConPure.jpg"));
listaProductos.push(new Lista(5, "asado con ensalada", 550, categorias[1], "./img/asadoConEnsalada.jpg"));
listaProductos.push(new Lista(5, "sopa de verduras", 550, categorias[1], "./img/SopaDeVerduras.jpg"));
listaProductos.push(new Lista(6, "pastafrola", 150, categorias[0], "./img/pastafrola.jpg"));
listaProductos.push(new Lista(7, "cafe con leche", 220, categorias[0], "./img/cafeConLeche.jpg"));
listaProductos.push(new Lista(8, "flan", 170, categorias[2], "./img/flan.jpg"));
listaProductos.push(new Lista(8, "helado", 240, categorias[2], "./img/helado.jpg"));
listaProductos.push(new Lista(9, "fernet con coca", 450, categorias[3], "./img/fernetConCoca.jpg"));
listaProductos.push(new Lista(10, "cerveza pinta", 220, categorias[3], "./img/cervezaPinta.jpg"));
listaProductos.push(new Lista(11, "cerveza botella", 340, categorias[3], "./img/cervezaBotella.jpg"));
listaProductos.push(new Lista(12, "coca cola", 170, categorias[3], "./img/cocaCola.jpg"));
listaProductos.push(new Lista(13, "sprite", 170, categorias[3], "./img/sprite.jpg"));

function total(){
    comida.sumarIva();

    bebida.sumarIva();
    
    postre.sumarIva();

    let totalAbonar = (comida.precio + bebida.precio + postre.precio);

    alert("Total a abonar $ " + totalAbonar + " (Iva incluido)");
   
}

function encontrarOrden() {
    comida = listaProductos.find(producto => producto.nombre == ordenComida.toLowerCase());

    bebida = listaProductos.find(producto => producto.nombre == ordenBebida.toLowerCase());

    postre = listaProductos.find(producto => producto.nombre == ordenPostre.toLowerCase());

    console.log(comida, bebida, postre);

    if (comida == undefined) {
        alert("No tenemos ese menú");
    }
    else if (bebida == undefined) {
        alert("No tenemos esa bebida");
    }
    else if (postre == undefined) {
        alert("No tenemos ese postre");
    }
}

function realizarOtraOrden(){
    let continuar = prompt("Quiere realizar otra orden?\nsi/no");

    switch (continuar) {
        case "si":
            listarProductos();

            orden();

        case "no":

            alert("Su orden estara lista en 15 minutos");

            saludar("Gracias por visitar");
    }
}

function orden() {
    ordenComida = prompt("Que desea pedir para Comer?");

    ordenBebida = prompt("Que desea pedir para Beber?");

    ordenPostre = prompt("Que desea pedir de postre?");

    console.log("Orden a preparar " + ordenComida, ordenBebida, ordenPostre);

    encontrarOrden();

    total();

    realizarOtraOrden();
    
}

function saludar(saludo) {
    alert(saludo + " nuestra pagina!");
}

function listarProductos() {
    alert(listaProductosMenu);
}

for (const producto of listaProductos) {
    contador++;
    
    listaProductosMenu += "\n" + contador + "- " + producto.nombre + " $" + producto.precio + " " + producto.category;
}

function menu() {
    let opcion = prompt("Menu: \n1 - Ver productos\nESC - Para Salir");

    switch (opcion) {

        case "1":

            listarProductos();

            listaProductos.forEach((lis) => {
                console.log(lis.category + "\n" + lis.nombre + " $" + lis.precio)
            })
            orden();

            break;

        case "ESC":

            saludar("Gracias por visitar");

            break;

        default:

            alert("Opcion Incorrecta");

            menu();

            break;
    }
}

menu();


