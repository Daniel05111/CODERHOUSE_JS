//Simulador carrito de compras
alert(
    "Bienvenido a @neoprenoAXM, para continuar con su compra es necesario ingresar sus datos"
  );
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let correo = prompt("Ingrese su correo");
  let suma = " ";
  let total = 0;
  
  alert("Bienvendio " + nombre + " " + apellido);
  
  let orden = Number(
    prompt(`Ingrese entre las opciones 1,2,3,4,5 y para finalizar escriba ESC:
  1. Collar tipo cubano $30.000.
  2. Pulsera 7 chakras $28.000.
  3. Pulsera avion $27.000.
  4. Pulsera parejas $35.000.
  5. Brazalete Universo $38.000.
  6. Salir`)
  );
  
  
    switch (orden) {
      case 1:
        confirm(`¿Estas Seguro que deseas comprar este articulo?`);
        suma = 30000;
        break;
      case 2:
        confirm(`¿Estas Seguro que deseas comprar este articulo?`);
        suma = 28000;
        break;
      case 3:
        confirm(`¿Estas Seguro que deseas comprar este articulo?`);
        suma = 27000;
        break;
      case 4:
        confirm(`¿Estas Seguro que deseas comprar este articulo?`);
        suma = 35000;
        break;
      case 5:
        confirm(`¿Estas Seguro que deseas comprar este articulo?`);
        suma = 38000;
        break;
  
      default:
        alert(`Escriba una opcion por favor`);
        break;
    }
    total += suma;
    orden = Number(
      prompt(`Ingrese entre las opciones 1,2,3,4,5 y para finalizar escriba ESC:
    1. Collar tipo cubano $30.000.
    2. Pulsera 7 chakras $28.000.
    3. Pulsera avion $27.000.
    4. Pulsera parejas $35.000.
    5. Brazalete Universo $38.000.
    6. Finalizar compra`)
    );

 
 
  if (total != 0 && total >= 100000) {
    alert(`Por la compra de ${total} adquiere un bono de $10.000 para tus proximas compras`);
  } else {
    alert(`El total de su pedido es :"$ " ${total} COL`);
   
        }
    

