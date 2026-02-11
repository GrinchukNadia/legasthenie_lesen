import stork01 from "../../../assets/voegel/stork/stork01.jpg";
import stork02 from "../../../assets/voegel/stork/stork02.avif";
import stork03 from "../../../assets/voegel/stork/stork03.webp";
import stork04 from "../../../assets/voegel/stork/stork04.jpg";
import stork05 from "../../../assets/voegel/stork/stork05.avif";
import stork06 from "../../../assets/voegel/stork/stork06.avif";
import type { SentenceItem } from "../../../features/reader/types";

const stork: SentenceItem[] = [
  {
    id: "1",
    imageUrl: stork01,
    words: [
      { t: "Hast", s: ["Hast"] },
      { t: "du", s: ["du"] },
      { t: "gesehen,", s: ["ge", "se", "hen"] },
      { t: "wie", s: ["wie"] },
      { t: "lang", s: ["lang"] },
      { t: "die", s: ["die"] },
      { t: "Beine", s: ["Bei", "ne"] },
      { t: "des", s: ["des"] },
      { t: "Storchs", s: ["Storchs"] },
      { t: "sind?", s: ["sind"] },
    ],
  },
  {
    id: "2",
    imageUrl: stork02,
    words: [
      { t: "Du", s: ["Du"] },
      { t: "kannst", s: ["kannst"] },
      { t: "ihn", s: ["ihn"] },
      { t: "oft", s: ["oft"] },
      { t: "dabei", s: ["da", "bei"] },
      { t: "beobachten,", s: ["be", "ob", "ach", "ten"] },
      { t: "wie", s: ["wie"] },
      { t: "er", s: ["er"] },
      { t: "über", s: ["ü", "ber"] },
      { t: "die", s: ["die"] },
      { t: "Wiesen", s: ["Wie", "sen"] },
      { t: "und", s: ["und"] },
      { t: "an", s: ["an"] },
      { t: "Flüssen", s: ["Flüs", "sen"] },
      { t: "entlangschreitet.", s: ["ent", "lang", "schrei", "tet"] },
    ],
  },
  {
    id: "3",
    imageUrl: stork03,
    words: [
      { t: "Dabei", s: ["Da", "bei"] },
      { t: "ist", s: ["ist"] },
      { t: "er", s: ["er"] },
      { t: "auf", s: ["auf"] },
      { t: "der", s: ["der"] },
      { t: "Suche", s: ["Su", "che"] },
      { t: "nach", s: ["nach"] },
      { t: "Futter,", s: ["Fut", "ter"] },
      { t: "das", s: ["das"] },
      { t: "er", s: ["er"] },
      { t: "mit", s: ["mit"] },
      { t: "seinem", s: ["sei", "nem"] },
      { t: "spitzen", s: ["spit", "zen"] },
      { t: "Schnabel", s: ["Schna", "bel"] },
      { t: "blitzschnell", s: ["blitz", "schnell"] },
      { t: "aufpickt.", s: ["auf", "pickt"] },
    ],
  },
  {
    id: "4",
    imageUrl: stork04,
    words: [
      { t: "Störche", s: ["Stör", "che"] },
      { t: "fressen", s: ["fres", "sen"] },
      { t: "gerne", s: ["ger", "ne"] },
      { t: "Frösche,", s: ["Frö", "sche"] },
      { t: "Insekten", s: ["In", "sek", "ten"] },
      { t: "und", s: ["und"] },
      { t: "sogar", s: ["so", "gar"] },
      { t: "Mäuse.", s: ["Mäu", "se"] },
    ],
  },
  {
    id: "5",
    imageUrl: stork05,
    words: [
     { t: "Der", s: ["Der"] },
    { t: "Storch", s: ["Storch"] },
    { t: "baut", s: ["baut"] },
    { t: "sein", s: ["sein"] },
    { t: "großes", s: ["gro", "ßes"] },
    { t: "Nest", s: ["Nest"] },
    { t: "oft", s: ["oft"] },
    { t: "auf", s: ["auf"] },
    { t: "Dächern", s: ["Dä", "chern"] },
    { t: "oder", s: ["o", "der"] },
    { t: "hohen", s: ["ho", "hen"] },
    { t: "Masten.", s: ["Mas", "ten"] },
    ],
  },
  {
    id: "6",
    imageUrl: stork06,
    words: [
      { t: "Ihr", s: ["Ihr"] },
    { t: "lautes", s: ["lau", "tes"] },
    { t: "Klappern", s: ["Klap", "pern"] },
    { t: "mit", s: ["mit"] },
    { t: "dem", s: ["dem"] },
    { t: "Schnabel", s: ["Schna", "bel"] },
    { t: "dient", s: ["dient"] },
    { t: "zur", s: ["zur"] },
    { t: "Begrüßung.", s: ["Be", "grü", "ßung"] },
    ],
  },
];

export default stork;
