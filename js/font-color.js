function getContrastingTextColor(backgroundColor) {
  // Supprimez le caractère '#' s'il est présent
  if (backgroundColor.startsWith('#')) {
    backgroundColor = backgroundColor.slice(1);
  }

  // Convertit le code hexadécimal en composants RGB
  const r = parseInt(backgroundColor.substring(0, 2), 16);
  const g = parseInt(backgroundColor.substring(2, 4), 16);
  const b = parseInt(backgroundColor.substring(4, 6), 16);

  // Calcule la luminosité perçue
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Retourne 'noir' ou 'blanc' en fonction de la luminosité
  return luminance > 128 ? 'black' : 'white';
}

// Exemple d'utilisation
const bgColor = '#3498db'; // bleu
const textColor = getContrastingTextColor(bgColor);
console.log(textColor); // Retournera "white" parce que le fond est sombre