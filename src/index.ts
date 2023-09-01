export const ipToNum = (ip: string): number | null => {
  const octeto = ip.split('.').map(octetoStr => {
    const octetoInt = parseInt(octetoStr, 10);
    return octetoInt.toString(2).padStart(8, '0');
  });

  if (!correctIP(octeto.map(octetoStr => parseInt(octetoStr, 2)))) {
    return null; // La dirección IP no es válida
  }

  const binarioCompleto = octeto.join('');
  const numeroDecimal = parseInt(binarioCompleto, 2);

  return numeroDecimal;
};

export const correctIP = (octetos: number[]): boolean => {
  if (octetos.length !== 4 || octetos.some(octeto => octeto < 0 || octeto > 255)) { 
    return false;
  }
  return true;
};

export const numToIp = (num: number): string | null => {
  if (num < 0 || num > 4294967295) {
    return null; // El número está fuera del rango válido para una dirección IP
  }

  const binarioCompleto = num.toString(2).padStart(32, '0'); // Convierte a binario de 32 bits

  const octetos = [];
  for (let i = 0; i < 4; i++) { //4 octetos, cada uno de 8 bits de longitud.
    const inicio = i * 8;
    const fin = inicio + 8;
    const octetoBinario = binarioCompleto.substring(inicio, fin);
    const octetoDecimal = parseInt(octetoBinario, 2);
    octetos.push(octetoDecimal.toString());
  }

  return octetos.join('.');
};

console.log(numToIp(3232235777))