//simulador de carrito de compras con FUNCIONES
alert("Bienvenido a @neoprenoAXM, para continuar con su compra es necesario ingresar los siguientes datos")
let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let correo = prompt("Ingrese su correo");
  alert("Bienvendio " + nombre + " " + apellido);


//FUNCIONES CARRITO DE COMPRAS

function carrito() {
//variables de productos
let confirmar_pedido =  '';
let precio = 0;
let cantidad= 0; 
let salir = true;
let datos = Number(prompt(`Ingrese entre las opciones 1, 2 y opcion 3 para finalizar su compra:
1. Collar tipo cubano $30.000.
2. Pulsera 7 chakras $28.000.
3. Salir`)) 
if (datos ==3) {
 alert("¡Gracias por visitaros, vuelva pronto!")   
} else {
    
    switch (datos) {
        case 1 : alert(" Escogio: Collar tipo cubano")
        cantidad = Number(prompt("¿cuantas unidades desea llevar?"));
        precio = 30000;
        total = costoTotal (precio, cantidad);
        alert(`total a pagar: $  ${total}`);
        confirmar_pedido = Number(prompt("¿Esta seguro que desea continuar? ingrese 1 = SI o 2 = NO"))
        if (confirmar_pedido === 1) {
        alert("gracias por su compra")
        }else{
        alert("Lo esperamos pronto")
        }
        break;

        case 2 : alert(" Escogio: Pulsera 7 chakras")
        cantidad = Number (prompt("¿cuantas unidades desea llevar?"));
        precio = 28000;
        total = costoTotal (precio, cantidad);
        alert(`total a pagar: $ ${total}`);
        confirmar_pedido = Number(prompt("¿Esta seguro que desea continuar? 1 = SI & 2= NO"))
        if (confirmar_pedido === 1) {
                alert("gracias por su compra")
        }else{
        alert("Lo esperamos pronto")   
        }
        break;

    default: alert("No ingreso una opcion valida")
        break;
    }
}
}
carrito();1
function costoTotal (precio,cantidad){
    total =precio * cantidad
    return total;
}
