function getRandomIndex(arr: any) {
  return Math.floor(Math.random() * arr.length);
}

export function generateProductName(verbos: string[], adjetivos: string[]) {
  const verboIndex = getRandomIndex(verbos);
  const adjetivoIndex = getRandomIndex(adjetivos);

  const name = `${verbos[verboIndex]} ${adjetivos[adjetivoIndex]}`;

  const newVerbos = verbos.filter((_, index) => index !== verboIndex);
  const newAdjetivos = adjetivos.filter((_, index) => index !== adjetivoIndex);

  return { name, newVerbos, newAdjetivos };
}
