import libelle01 from "../../../assets/inDerNatur/libelle/libelle01.jpg";
import libelle02 from "../../../assets/inDerNatur/libelle/libelle02.jpg";
import libelle03 from "../../../assets/inDerNatur/libelle/libelle03.jpg";
import libelle04 from "../../../assets/inDerNatur/libelle/libelle04.jpg";
import libelle05 from "../../../assets/inDerNatur/libelle/libelle05.jpg";
import type { SentenceItem } from "../../../features/reader/types";

const libelle: SentenceItem[] = [
  {
    id: "1",
    imageUrl: libelle01,
    words: [
      { t: "Auf", s: ["Auf"] },
      { t: "der", s: ["der"] },
      { t: "Wiese", s: ["Wie", "se"] },
      { t: "ist", s: ["ist"] },
      { t: "viel", s: ["viel"] },
      { t: "los,", s: ["los"] },
      { t: "emsig", s: ["em", "sig"] },
      { t: "kriechen", s: ["krie", "chen"] },
      { t: "und", s: ["und"] },
      { t: "fliegen", s: ["flie", "gen"] },
      { t: "die", s: ["die"] },
      { t: "Insekten", s: ["In", "sek", "ten"] },
      { t: "umher.", s: ["um", "her"] },
    ],
  },
  {
    id: "2",
    imageUrl: libelle02,
    words: [
      { t: "Kennst", s: ["Kennst"] },
      { t: "du", s: ["du"] },
      { t: "sie", s: ["sie"] },
      { t: "alle?", s: ["al", "le"] },
    ],
  },
  {
    id: "3",
    imageUrl: libelle03,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "Hummel", s: ["Hum", "mel"] },
      { t: "saugt", s: ["saugt"] },
      { t: "Nektar", s: ["Nek", "tar"] },
      { t: "aus", s: ["aus"] },
      { t: "der", s: ["der"] },
      { t: "Blume", s: ["Blu", "me"] },
      { t: "und", s: ["und"] },
      { t: "der", s: ["der"] },
      { t: "Schmetterling", s: ["Schmet", "ter", "ling"] },
      { t: "hat", s: ["hat"] },
      { t: "es", s: ["es"] },
      { t: "sich", s: ["sich"] },
      { t: "zwischen", s: ["zwi", "schen"] },
      { t: "den", s: ["den"] },
      { t: "Blüten", s: ["Blü", "ten"] },
      { t: "gemütlich", s: ["ge", "müt", "lich"] },
      { t: "gemacht.", s: ["ge", "macht"] },
    ],
  },
  {
    id: "4",
    imageUrl: libelle04,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "die", s: ["die"] },
      { t: "Libelle?", s: ["Li", "bel", "le"] },
    ],
  },
  {
    id: "5",
    imageUrl: libelle05,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "mal", s: ["mal"] },
      { t: "sanft", s: ["sanft"] },
      { t: "ihren", s: ["ih", "ren"] },
      { t: "glitzernden", s: ["glit", "zern", "den"] },
      { t: "Flügel,", s: ["Flü", "gel"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  },
];

export default libelle;
