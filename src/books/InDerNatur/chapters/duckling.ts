import duckling01 from "../../../assets/inDerNatur/duckling/duckling01.jpg";
import duckling02 from "../../../assets/inDerNatur/duckling/duckling02.avif";
import duckling03 from "../../../assets/inDerNatur/duckling/duckling03.jpg";
import duckling04 from "../../../assets/inDerNatur/duckling/duckling04.jpg";
import duckling05 from "../../../assets/inDerNatur/duckling/duckling05.jpg";
import type { SentenceItem } from "../../../features/reader/types";

const duckling: SentenceItem[] = [
  {
    id: "1",
    imageUrl: duckling01,
    words: [
      { t: "Schau", s: ["Schau"] },
      { t: "mal,", s: ["mal"] },
      { t: "Familie", s: ["Fa", "mi", "lie"] },
      { t: "Ente", s: ["En", "te"] },
      { t: "macht", s: ["macht"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "Ausflug", s: ["Aus", "flug"] },
      { t: "über", s: ["ü", "ber"] },
      { t: "den", s: ["den"] },
      { t: "See.", s: ["See"] },
    ],
  },
  {
    id: "2",
    imageUrl: duckling02,
    words: [
      { t: "Männliche", s: ["Männ", "li", "che"] },
      { t: "Enten", s: ["En", "ten"] },
      { t: "nennt", s: ["nennt"] },
      { t: "man", s: ["man"] },
      { t: "Erpel.", s: ["Er", "pel"] },
    ],
  },
  {
    id: "3",
    imageUrl: duckling03,
    words: [
      { t: "An", s: ["An"] },
      { t: "ihrem", s: ["ih", "rem"] },
      { t: "bunten", s: ["bun", "ten"] },
      { t: "Federkleid", s: ["Fe", "der", "kleid"] },
      { t: "kannst", s: ["kannst"] },
      { t: "du", s: ["du"] },
      { t: "sie", s: ["sie"] },
      { t: "erkennen.", s: ["er", "ken", "nen"] },
    ],
  },
  {
    id: "4",
    imageUrl: duckling04,
    words: [
      { t: "Ihr", s: ["Ihr"] },
      { t: "weiches", s: ["wei", "ches"] },
      { t: "Daunenkleid", s: ["Dau", "nen", "kleid"] },
      { t: "hält", s: ["hält"] },
      { t: "sie", s: ["sie"] },
      { t: "warm,", s: ["warm"] },
      { t: "auch", s: ["auch"] },
      { t: "wenn", s: ["wenn"] },
      { t: "die", s: ["die"] },
      { t: "Luft", s: ["Luft"] },
      { t: "kühl", s: ["kühl"] },
      { t: "ist.", s: ["ist"] },
    ],
  },
  {
    id: "5",
    imageUrl: duckling05,
    words: [
      { t: "Entenküken", s: ["En", "ten", "kü", "ken"] },
      { t: "können", s: ["kön", "nen"] },
      { t: "schon", s: ["schon"] },
      { t: "wenige", s: ["we", "ni", "ge"] },
      { t: "Stunden", s: ["Stun", "den"] },
      { t: "nach", s: ["nach"] },
      { t: "dem", s: ["dem"] },
      { t: "Schlüpfen", s: ["Schlüp", "fen"] },
      { t: "schwimmen.", s: ["schwim", "men"] },
    ],
  },
];

export default duckling;
