Realizar una función que recibe un string. Dentro del string puede haber C (cat), '.' (puntos que indican distancia), M (mouse).

Si la distancia es < 5, entonces la función devuelve true (el gato puede atrapar al ratón)

Si la distancia es 5 o más, devuelve false (el gato no puede atrapar al ratón).

Ej de llamados:

atrapaAlRaton('C…M') // devuelve true
atrapaAlRaton('C……..M') // devuelve false

 

Realizar en typescript usando tests en lo posible para validar que funcione.