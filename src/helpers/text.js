// src/helpers/text.js

export const convertirAOracion = (texto) => {
  if (!texto) return "";

  return texto
    .toLowerCase()
    .split(" ")
    .map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(" ");
};