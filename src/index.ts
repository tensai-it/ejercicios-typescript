export function convertASCIItoString(numero: number): string {
    const cadena: string = numero.toString();
    const result: string[] = [];

    for (let i = 0; i < cadena.length; i += 2) {
        const code: number = Number(cadena.slice(i, i + 2)); //Lo cambia numero a los dos digitos

        if (code >= 65 && code <= 90) {
            result.push(String.fromCharCode(code));
        } else if (code === 32) {
            result.push(' '); // ESPACIO 
        }
    }

    return result.join('');
}


export function stringToASCII(input: string): number {
  const cadena: string = input.toUpperCase();
  const ASCIIarray: number[] = [];

  for (let i = 0; i < cadena.length; i++) {
    const ASCIIcode = cadena.charCodeAt(i);

    if ((ASCIIcode >= 65 && ASCIIcode <= 90) || ASCIIcode === 32) {
      ASCIIarray.push(ASCIIcode);
    }
  }

  return arrayToInt(ASCIIarray);
}

function arrayToInt(arr: number[]): number {
  const concatenatedString = arr.join(""); 
  const integer = parseInt(concatenatedString);
  return integer;
}






