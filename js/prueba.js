alert("Bienvenidos a AcaCcomeRico");

const categorias = ["DESAYUNO Y MERIENDA ", "ALMUERZO Y CENA ", "POSTRES ", "BEBIDAS "];

console.log("Tenemos " + categorias.length + " Categorias en el menú\n" + categorias);

class Lista {
    constructor(id, nombre, precio, category) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.category = category;
    }   
}
let comida;
let bebida;
let postre;
let contador = 0;
let listaProductosMenu = "Estos son nuestros productos";

const listaProductos = [];

listaProductos.push(new Lista(1, "milanesas con pure", 550, categorias[1]));
listaProductos.push(new Lista(2, "milanesas con ensalada", 550, categorias[1]));
listaProductos.push(new Lista(3, "milanesas con papas fritas", 550, categorias[1]));
listaProductos.push(new Lista(4, "asado con pure", 550, categorias[1]));
listaProductos.push(new Lista(5, "asado con ensalada", 550, categorias[1]));
listaProductos.push(new Lista(5, "sopa de verduras", 550, categorias[1]));
listaProductos.push(new Lista(6, "pastafrola", 150, categorias[0]));
listaProductos.push(new Lista(7, "cafe con leche", 220, categorias[0]));
listaProductos.push(new Lista(8, "flan", 170, categorias[2]));
listaProductos.push(new Lista(8, "helado", 240, categorias[2]));
listaProductos.push(new Lista(9, "fernet con coca", 450, categorias[3]));
listaProductos.push(new Lista(10, "ferveza pinta", 220, categorias[3]));
listaProductos.push(new Lista(11, "ferveza botella", 340, categorias[3]));
listaProductos.push(new Lista(12, "coca cola", 170, categorias[3]));
listaProductos.push(new Lista(13, "sprite", 170, categorias[3]));

function encontrarOrden() {
    let comida = listaProductos.find(producto => producto.nombre == ordenComida.toLowerCase());
    let bebida = listaProductos.find(producto => producto.nombre == ordenBebida.toLowerCase());
    let postre = listaProductos.find(producto => producto.nombre == ordenPostre.toLowerCase());
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
            orden();
        case "no":
            alert("Su orden estara lista en 15 minutos");
            saludar("Gracias por visitar");
    }
}

function orden() {
    let ordenComida = prompt("Que desea pedir para Comer?");
    let ordenBebida = prompt("Que desea pedir para Beber?");
    let ordenPostre = prompt("Que desea pedir de postre?");
    console.log("Orden a preparar " + ordenComida, ordenBebida, ordenPostre);

    encontrarOrden();
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
                console.log(lis.category + "\n" + lis.nombre + " $" + lis.precio);
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
