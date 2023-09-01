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