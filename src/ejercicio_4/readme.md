# Ejercicio: Sistema de Pelea de Animales

## Descripción

En este ejercicio, se presenta un sistema de peleas de animales utilizando TypeScript. 
Deberás definir clases para diferentes tipos de animales, subclases para animales específicos, usar type guards para diferenciar entre ellos y emplear enums para representar las categorías de animales. Además, implementarás métodos para que los animales ataquen a otros, administren su energía y emitan sonidos.

## Instrucciones

1. Crea una clase abstracta llamada `Animal` con las siguientes propiedades y métodos:
   - Propiedades: `nombre` (cadena), `edad` (número), `tipo` (enum), `energia` (número), `puntosDeAtaque` (número), `puntosDeDefensa` (número).
   - Métodos: 
     - `hacerSonido()`: Muestra un mensaje como "El animal hace un sonido". En esta clase no es necesario implementar el método.
     - `mover(distancia: number)`: Muestra un mensaje como "El animal se mueve {distancia} metros".
     - `atacar(otroAnimal: Animal)`: Realiza un ataque al otro animal y le resta energía.
     - `recibirAtaque(atacante: Animal, puntosDeAtaque: number)`: Recibe un ataque de otro animal y reduce su energía en función de los puntos de ataque del atacante y los puntos de defensa propios. Ver más abajo el detalle de implementación.
     - `recuperarEnergia(cantidad: number)`: Permite al animal recuperar energía.

2. Define un enum llamado `TipoAnimal` que contenga valores como "Mamífero", "Ave", "Reptil", etc.

3. Crea subclases para representar tres tipos diferentes de animales, como `Mamifero`, `Ave`, y `Reptil`. Cada subclase debe heredar de la clase `Animal` y agregar propiedades y métodos específicos para ese tipo de animal. Además, sobrescribe el método `hacerSonido()` en cada subclase para que refleje el sonido característico del animal.

4. Implementa un type guard llamado `esMamifero(animal: Animal): boolean` que verifique si un objeto `Animal` es una instancia de la subclase `Mamifero`. Este type guard debería retornar `true` si es un mamífero y `false` en caso contrario. Realizar la misma validación para cada tipo de animal por ej: `esAve(animal: Animal)`, `esReptil(animal: Animal)`, etc.

5. Crea subclases de tipos diferentes de animales, como por ejemplo `Leon` que extiende de `Mamifero` o `CobraNegra` que extiende de `Reptil` y siempre son venenosas. Estas subclases pueden tener más propiedades que sus clases padre, como por ejemplo en el caso de los mamíferos puede haberlos de 2 patas o 4 patas, Reptiles que se arrastran o caminan por poner un ejemplo. Por el momento sólo la subclase `Capibara` va a presentar comportamiento distinto al resto.

6. Crea la clase `Capibara` que extiende de `Mamífero`. Estos animales al ser atacados no reciben daño y al atacar tampoco realizan daño, pero sí devuelven una parte del mismo, porque son animales del bien.

7. Crea instancias de diferentes animales, como un león, un águila y una serpiente, y muestra su información utilizando la función `informacionAnimal()`. Luego, permite que interactúen entre sí llamando a los métodos `atacar()`, `recibirAtaque()` y `recuperarEnergia()`.

## Reglas Adicionales

Además de las reglas mencionadas anteriormente, hemos introducido nuevas reglas para las aves, reptiles y mamíferos:

### Aves - Probabilidad de Esquivar Ataques

- Las aves tienen una probabilidad del 40% (0.4) de esquivar un ataque. Esto significa que cuando una ave es atacada, hay un 40% de probabilidad de que el ataque no le cause ningún daño.

### Reptiles - Probabilidad de Esquivar Ataques

- Los reptiles tienen una probabilidad del 25% (0.25) de esquivar un ataque. Al igual que las aves, los reptiles tienen una probabilidad del 25% de que un ataque no les cause daño.

### Capibaras - Animales del bien
- Al atacar no realizan daños y al recibir ataques tampoco los reciben, sino que dañan a su oponente en 1%.

### Interacción Específica con Mamíferos

- Cuando una ave ataca a un mamífero, el daño infligido se reduce en un 25% (0.25). Esto refleja la capacidad de los mamíferos para esquivar parcialmente los ataques de las aves.
- Si un reptil es venenoso (una propiedad específica de la subclase `Reptil`), cualquier ataque que realice contra un mamífero inflige el doble de daño, es decir, un aumento del 200%. Esto simula el peligro adicional que representa un reptil venenoso para los mamíferos.

### Restricciones de Daño Mínimo

- El daño mínimo que puede infligirse en un ataque es 0. Esto significa que si el cálculo de daño resulta en un número negativo o menor a 0, se considera que el daño real es 0, y no se resta energía al animal atacado.

Estas nuevas reglas agregan complejidad y realismo a las interacciones entre los animales en el sistema. Ahora, el sistema tiene en cuenta las probabilidades de esquivar ataques y las interacciones específicas entre aves, reptiles y mamíferos, lo que hace que las batallas entre animales sean más interesantes y variadas.

