import frog01 from "../../../assets/inDerNatur/frog/frog01.webp";
import frog02 from "../../../assets/inDerNatur/frog/frog02.jpg";
import frog03 from "../../../assets/inDerNatur/frog/frog03.webp";
import frog04 from "../../../assets/inDerNatur/frog/frog04.jpg";
import frog05 from "../../../assets/inDerNatur/frog/frog05.avif";
import type { SentenceItem } from "../../../features/reader/types";

const frog: SentenceItem[] = [
  {
    id: "1",
    imageUrl: frog01,
    words: [
      { t: "Frösche", s: ["Frö", "sche"] },
      { t: "leben", s: ["le", "ben"] },
      { t: "im", s: ["im"] },
      { t: "Wasser", s: ["Was", "ser"] },
      { t: "und", s: ["und"] },
      { t: "auf", s: ["auf"] },
      { t: "dem", s: ["dem"] },
      { t: "Land.", s: ["Land"] },
    ],
  },
  {
    id: "2",
    imageUrl: frog02,
    words: [
      { t: "Mit", s: ["Mit"] },
      { t: "ihren", s: ["ih", "ren"] },
      { t: "langen", s: ["lan", "gen"] },
      { t: "Armen", s: ["Ar", "men"] },
      { t: "und", s: ["und"] },
      { t: "Beinen", s: ["Bei", "nen"] },
      { t: "können", s: ["kön", "nen"] },
      { t: "sie", s: ["sie"] },
      { t: "schwimmen,", s: ["schwim", "men"] },
      { t: "klettern", s: ["klet", "tern"] },
      { t: "und", s: ["und"] },
      { t: "hüpfen.", s: ["hüpf", "en"] },
    ],
  },
  {
    id: "3",
    imageUrl: frog03,
    words: [
       { t: "Frösche", s: ["Frö", "sche"] },
    { t: "können", s: ["kön", "nen"] },
    { t: "durch", s: ["durch"] },
    { t: "ihre", s: ["ih", "re"] },
    { t: "Haut", s: ["Haut"] },
    { t: "atmen,", s: ["at", "men"] },
    { t: "besonders", s: ["be", "son", "ders"] },
    { t: "wenn", s: ["wenn"] },
    { t: "sie", s: ["sie"] },
    { t: "im", s: ["im"] },
    { t: "Wasser", s: ["Was", "ser"] },
    { t: "sind.", s: ["sind"] },
    ],
  },
  {
    id: "4",
    imageUrl: frog04,
    words: [
       { t: "Ihre", s: ["Ih", "re"] },
    { t: "Augen", s: ["Au", "gen"] },
    { t: "helfen", s: ["hel", "fen"] },
    { t: "ihnen,", s: ["ih", "nen"] },
    { t: "gleichzeitig", s: ["gleich", "zei", "tig"] },
    { t: "nach", s: ["nach"] },
    { t: "vorne", s: ["vor", "ne"] },
    { t: "und", s: ["und"] },
    { t: "zur", s: ["zur"] },
    { t: "Seite", s: ["Sei", "te"] },
    { t: "zu", s: ["zu"] },
    { t: "sehen.", s: ["se", "hen"] },
    ],
  },
  {
    id: "5",
    imageUrl: frog05,
    words: [
      { t: "Manche", s: ["Man", "che"] },
    { t: "Frösche", s: ["Frö", "sche"] },
    { t: "überleben", s: ["über", "le", "ben"] },
    { t: "sogar", s: ["so", "gar"] },
    { t: "den", s: ["den"] },
    { t: "Winter", s: ["Win", "ter"] },
    { t: "im", s: ["im"] },
    { t: "gefrorenen", s: ["ge", "fro", "re", "nen"] },
    { t: "Zustand.", s: ["Zu", "stand"] },
    ],
  },
];

export default frog;
