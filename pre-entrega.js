
//simulador de carrito de compras con FUNCIONES
alert("Bienvenido a @neoprenoAXM, para continuar con su compra es necesario ingresar los siguientes datos")
let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let correo = prompt("Ingrese su correo");
  alert("Bienvendio " + nombre + " " + apellido);



//Definicion caracteisticas del producto usando el constructor.

class producto {
    constructor(id, nombreProducto, precio, material){
        this.id =id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.material =material;
        }

}

const p1 = new  producto (1, "Collar tipo cubano",30000,"acero");
const p2 = new  producto (2, "pulsera 7 chakras", 28000, "natural stones");

const productos = [];

productos.push (p1);
productos.push (p2);

const carrito = [];


function addToCart (){

let productoId = Number(prompt (` Ingrese el producto que desea comprar:
1. Collar cubano en acero inoxidable, precio $30.000.
2. Pulsera 7 chakras, precio $28.000.
3. Ver el carrito de compras`))


while (productoId != 3) {
    let cantidad = Number(prompt("seleccione unidades a llevar"))

    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)

productoId = Number(prompt (`Ingrese el producto que desea comprar:
1. Collar cubano en acero inoxidable, precio $30.000.
2. Pulsera 7 chakras, precio $28.000.
3. Ver el carrito de compras`))

}
console.log(carrito)

let eleccion = Number(prompt(`seleccione: 
1. desea seguir agregando prductos al carrito?
2. desea generar el total y realizar la compra`))

if (eleccion == 1) {
    addToCart();
} else {
    calcularTotal(carrito);
    alert(`su total va a ser: $${calcularTotal(carrito)}`)
}
}
addToCart();

function calcularTotal(carrito){
    let total = 0;
    carrito.forEach(producto=> {
        total += producto.total
    })
    return total
} 