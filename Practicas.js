//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.//

function miFuncion(str){
  let contador = 0;
  for( let i = 0; i < str.length; i++){
    if(str[i]) contador++;
  }
  return contador;
}



//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".//

function recorte(str, num){
  
  return str.slice(0, num);
}



//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].//

function arrayStr(str){
  let separador = " ";
return str.split(separador)
}



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.//

function repeat(str, num){
  
  let rep = "";
  
  while(num > 0){
    rep = rep + " " + str;
    num--;
    }
  return rep;
}


/*En esta Kata, se te darán dos enteros positivos a y b y tu tarea será aplicar las siguientes operaciones:

i) Si a = 0 o b = 0, devuelve [a,b]. En caso contrario, pasa al paso ii);
ii) Si a ≥ 2*b, pon a = a - 2*b, y repite el paso (i). En caso contrario, ir al paso (iii);
iii) Si b ≥ 2*a, establecer b = b - 2*a, y repetir el paso (i). En caso contrario, devolver [a,b].

a y b serán ambos inferiores a 10E8.

RECURSIVIDAD*/

function solve(a,b){
    console.log(a,b)
    if (a === 0 || b === 0){
      return [a,b]
    }

    if(a >= 2*b){
      a = a% (2*b)
      return solve(a,b)
    }
  
    if(b >= 2*a){
      b = b%(2*a)
      return solve(a,b)
    }
    
    return[a,b]
}

//-----------------------------------------------------------//

/*Esta es una serie de kata que sólo se puede resolver utilizando la recursividad.
##1 - Factorial

En matemáticas, el factorial de un entero no negativo n, denotado por n!, es el producto de todos los enteros positivos menores o iguales a n. Por ejemplo

5! = 5 * 4 * 3 * 2 * 1 = 120.

El valor de 0! es 1.

#Tu tarea

¡Tienes que crear la función factorial que recibe n y devuelve n! Tienes que utilizar la recursividad.*/

function nFactorial(n){
 
    if(n === 0) return 1;
    
    return n * nFactorial(n-1);
  }

  //---------------------------------------------//

  /* ¿Conoces la recursividad?
Esta es una serie de kata que sólo puedes resolver utilizando la recursividad.
##2 - Número de Fibonacci

En términos matemáticos, la secuencia f(n) de números de fibonacci se define por la relación de recurrencia

f(n) = f(n-1) + f(n-2)

con los valores iniciales

f(1) = 1 y f(2) = 1

#Tu tarea

Tienes que crear la función fibonacci que recibe n y devuelve f(n). Tienes que utilizar la recursividad.*/

function fibo(n){
    if (n <= 0) return 1;
    if (n === 1) return n;
    
    return fibo(n-1) + fibo(n-2);
  }

  //--------------------------------------------------------//

 /* Implementa Length() para contar el número de nodos de una lista enlazada.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3*/

LinkedList.prototype.length = function(){
  
  let counter = 0;
  if(!this.head) return "No hay nada en la lista";
  if (this.head) counter += 1;
  let current = this.head;
  while(current.next){
    counter += 1;
    current = current.next;
  };
  return counter;
}

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos 
//de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]
// head = {value:4 next:{value:5, next{value:1, next:null}}}

LinkedList.prototype.orderList = function Sort(){
  let valores = [];
  let current = this.head
  while(current !== null){
    valores.push(current.data)
    current = current.next;
  }
  while(this.head !== null){
    this.remove();
  }
  let ordenados = valores.sort(function(a, b){
    return a - b;
  }).reverse();
  while(ordenados.length > 0){
    this.add(ordenados.pop())
  }
  return this;
}

// Implementar la función joinLinkedLists que, a partir de dos listas simplemente enlazadas
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> [2] --> [8] --> [22] --> null
//    Lista 2: Head --> [6] --> [15] --> [4] --> null
//    joinLinkedList(linkedListOne, linkedListTwo)
//    Head --> [2] --> [6] --> [8] --> [15] --> [22] --> [4] --> null


function joinLinkedList(LinkedList1, LinkedList2){
  
  let newList = new LinkedList();
  let lista1 = [];
  let lista2 = [];
  var currentUno = LinkedList1.head;
  var currentDos = LinkedList2.head
  
  while(currentUno !== null || currentDos !== null){
   if(currentUno !==null) lista1.push(currentUno.value);
    if(currentDos !==null) lista2.push(currentDos.value);
    currentUno = currentUno.next;
    currentDos = currentDos.next;
  }
 let index = 0;
  while(index < lista1.length || index < lista2.length){
    if(index < lista1.length) newList.add(lista1[index]);
    if(index < lista2.length) newList.add(lista2[index]);
    index++;
  }
  return newList;
  
}

// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]

LinkedList.prototype.reverse = function(){
  
  let valores = []
  var current = this.head;
  
  while(current){
    valores.push(current.value)
    current = current.next
    }
  while(this.head !== null){
    this.remove;
  }
  while(valores.length > 0){
    this.add(valores.pop());
  }
  return this;
}

//---------------------------------------------//
//ARBOLES BINARIOS//

/*Implemtnar la funcion height dentro del prototype de BinarySearchTree que calcule la altura de un arbol.
*
* Parametros: -
* Valor de retorno: altura del arbol
* 
* Salida:
*   > Altura del arbol 
*
* Pista: funcion auxiliar, calcular la altura de un arbol.[Una forma de resolverlo es pensarlo recursivamente y 
  usando Math.max]
*
*            16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4

* La funcion devolveria 3
* */

BinarySearchTree.prototype.height = function(){
  if(this.left === null && this.right === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.height();
  if(this.left === null && this.right !== null) return 1 + this.right.height();
  return 1 + Math.max(this.right.height(), this.left.height());
};