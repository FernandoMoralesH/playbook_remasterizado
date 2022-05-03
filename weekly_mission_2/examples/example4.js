// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")


//Prueba que yo realice:

  const misCanicas = {
      cantidad : 23,
      contar: function(tusCanicas){
          console.log(`Tengo ${this.cantidad} canicas y tu tienes ${tusCanicas}`)
      }
  }
  misCanicas.contar(34)