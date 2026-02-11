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
      { t: "Schmetterlinge", s: ["Schmet", "ter", "lin", "ge"] },
      { t: "trinken", s: ["trin", "ken"] },
      { t: "Nektar", s: ["Nek", "tar"] },
      { t: "mit", s: ["mit"] },
      { t: "einem", s: ["ei", "nem"] },
      { t: "langen,", s: ["lan", "gen"] },
      { t: "eingerollten", s: ["ein", "ge", "roll", "ten"] },
      { t: "Rüssel.", s: ["Rüs", "sel"] },
    ],
  },
  {
    id: "3",
    imageUrl: libelle03,
    words: [
      { t: "Trotz", s: ["Trotz"] },
      { t: "ihres", s: ["ih", "res"] },
      { t: "runden", s: ["run", "den"] },
      { t: "Körpers", s: ["Kör", "pers"] },
      { t: "sind", s: ["sind"] },
      { t: "Hummeln", s: ["Hum", "meln"] },
      { t: "erstaunlich", s: ["er", "staun", "lich"] },
      { t: "schnelle", s: ["schnel", "le"] },
      { t: "Flieger.", s: ["Flie", "ger"] },
    ],
  },
  {
    id: "4",
    imageUrl: libelle04,
    words: [
      { t: "Ihre", s: ["Ih", "re"] },
      { t: "großen", s: ["gro", "ßen"] },
      { t: "Augen", s: ["Au", "gen"] },
      { t: "helfen", s: ["hel", "fen"] },
      { t: "ihr,", s: ["ihr"] },
      { t: "Beute", s: ["Beu", "te"] },
      { t: "aus", s: ["aus"] },
      { t: "großer", s: ["gro", "ßer"] },
      { t: "Entfernung", s: ["Ent", "fer", "nung"] },
      { t: "zu", s: ["zu"] },
      { t: "erkennen.", s: ["er", "ken", "nen"] },
    ],
  },
  {
    id: "5",
    imageUrl: libelle05,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "Libelle", s: ["Li", "bel", "le"] },
      { t: "hat", s: ["hat"] },
      { t: "vier", s: ["vier"] },
      { t: "durchsichtige", s: ["durch", "sich", "ti", "ge"] },
      { t: "Flügel", s: ["Flü", "gel"] },
      { t: "und", s: ["und"] },
      { t: "kann", s: ["kann"] },
      { t: "in", s: ["in"] },
      { t: "alle", s: ["al", "le"] },
      { t: "Richtungen", s: ["Rich", "tun", "gen"] },
      { t: "fliegen.", s: ["flie", "gen"] },
    ],
  },
];

export default libelle;
