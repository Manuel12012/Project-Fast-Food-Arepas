// src/helpers/text.js

export const convertirAOracion = (texto: string) => {
  if (!texto) return "";

  return texto
    .toLowerCase()
    .split(" ")
    .map((palabra : string) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(" ");
};