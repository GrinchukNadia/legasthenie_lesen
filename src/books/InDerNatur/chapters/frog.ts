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
      { t: "Hast", s: ["Hast"] },
      { t: "du", s: ["du"] },
      { t: "das", s: ["das"] },
      { t: "gewusst?", s: ["ge", "wusst"] },
    ],
  },
  {
    id: "4",
    imageUrl: frog04,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "der", s: ["der"] },
      { t: "große", s: ["gro", "ße"] },
      { t: "Frosch?", s: ["Frosch"] },
    ],
  },
  {
    id: "5",
    imageUrl: frog05,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "ihn", s: ["ihn"] },
      { t: "mal,", s: ["mal"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  },
];

export default frog;
