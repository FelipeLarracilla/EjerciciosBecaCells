
class Calculadora {
  constructor() {
      this.pila = [];  // Pila de valores u operadores
      this.valorActual = '';  // Para el número actual que se está ingresando
  }

  ingresarNumero(numero) {
      this.valorActual += numero;  // Concatenar el número actual
      document.getElementById('screen').value = this.valorActual;
  }

  ingresarOperador(operador) {
      if (this.valorActual !== '') {
          this.pila.push(parseFloat(this.valorActual));  // Empujar el valor numérico a la pila
      }
      this.pila.push(operador);  // Empujar el operador
      this.valorActual = '';  // Reiniciar el valor actual para el siguiente número
      document.getElementById('screen').value = operador;  // Mostrar el operador en la pantalla
  }

  calcularResultado() {
      if (this.valorActual !== '') {
          this.pila.push(parseFloat(this.valorActual));  // Empujar el último número si existe
      }

      let resultado = this.pila.shift();  // Sacar el primer valor
      while (this.pila.length > 0) {
          let operador = this.pila.shift();  // Sacar el operador
          let siguienteValor = this.pila.shift();  // Sacar el siguiente valor

          switch (operador) {
              case '+':
                  resultado += siguienteValor;
                  break;
              case '-':
                  resultado -= siguienteValor;
                  break;
              case '*':
                  resultado *= siguienteValor;
                  break;
              case '/':
                  if (siguienteValor !== 0) {
                      resultado /= siguienteValor;
                  } else {
                      return "Error: División por cero";  // Manejo de error
                  }
                  break;
              default:
                  return "Error: Operador no válido";
          }
      }
      return resultado;
  }

  resetear() {
      this.pila = [];
      this.valorActual = '';
      document.getElementById('screen').value = '';
  }
}

// Crear una instancia de la calculadora
const calc = new Calculadora();

function ingresarNumero(numero) {
  calc.ingresarNumero(numero);
}

function ingresarOperador(operador) {
  calc.ingresarOperador(operador);
}

function mostrarResultado() {
  const resultado = calc.calcularResultado();
  document.getElementById('screen').value = resultado;
}

function resetear() {
  calc.resetear();
}