import img2 from "@/assets/raizes_2.png";
import img3 from "@/assets/raizes_3.png";
import img4 from "@/assets/raizes_4.png";
import img5 from "@/assets/raizes_5.png";
import img6 from "@/assets/raizes_6.png";
import img7 from "@/assets/raizes_7.png";
import img8 from "@/assets/raizes_8.png";
import img9 from "@/assets/raizes_9.png";
import img10 from "@/assets/raizes_10.png";
import img11 from "@/assets/raizes_11.png";

export const photos = {
  drinks: img2,
  quesadilla: img3,
  nachos: img4,
  suite1: img5,
  bar: img6,
  batata: img7,
  fachada: img8,
  suite2: img9,
  logo: img10,
  noite: img11,
};

export const PHONE_DISPLAY = "(27) 99996-3809";
export const ADDRESS = "R. do Farol — Regência, Linhares — ES, 29914-050";
export const RATING = "4,8";
export const REVIEWS_COUNT = 45;

export function whatsapp(message: string) {
  return "https://wa.me/5527999963809?text=" + encodeURIComponent(message);
}

export const WHATSAPP_URL = whatsapp(
  "Olá! Vim pelo site do Raízes Restobar & Suítes e gostaria de saber mais.",
);

export const WHATSAPP_SHORTCUTS = [
  {
    label: "Quero reservar uma mesa",
    message: "Olá! Vim pelo site do Raízes e quero reservar uma mesa.",
  },
  {
    label: "Quero conhecer o cardápio",
    message: "Olá! Vim pelo site do Raízes e gostaria de conhecer o cardápio.",
  },
  {
    label: "Quero saber sobre as suítes",
    message: "Olá! Vim pelo site do Raízes e gostaria de saber sobre as suítes.",
  },
  {
    label: "Quero saber sobre hospedagem",
    message: "Olá! Vim pelo site do Raízes e gostaria de saber sobre hospedagem.",
  },
  {
    label: "Quero saber os horários",
    message:
      "Olá! Vim pelo site do Raízes e gostaria de saber os horários de funcionamento.",
  },
];

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ra%C3%ADzes+Restobar+Reg%C3%AAncia+Linhares+ES";

export const MAPS_EMBED =
  "https://www.google.com/maps?q=Ra%C3%ADzes%20Restobar%20Reg%C3%AAncia%20Linhares%20ES&output=embed";