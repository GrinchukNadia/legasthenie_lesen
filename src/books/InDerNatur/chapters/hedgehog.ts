import hedgehog01 from "../../../assets/inDerNatur/hedgehog/hedgehog01.jpg";
import hedgehog02 from "../../../assets/inDerNatur/hedgehog/hedgehog02.webp";
import hedgehog03 from "../../../assets/inDerNatur/hedgehog/hedgehog03.webp";
import hedgehog04 from "../../../assets/inDerNatur/hedgehog/hedgehog04.webp";
import hedgehog05 from "../../../assets/inDerNatur/hedgehog/hedgehog05.jpg";
import hedgehog06 from "../../../assets/inDerNatur/hedgehog/hedgehog06.jpg";
import hedgehog07 from "../../../assets/inDerNatur/hedgehog/hedgehog07.webp";
import type { SentenceItem } from "../../../features/reader/types";

const hedgehog: SentenceItem[] = [
  {
    id: "1",
    imageUrl: hedgehog01,
    words: [
      { t: "Der", s: ["Der"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "hat", s: ["hat"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "roten,", s: ["ro", "ten"] },
      { t: "saftigen", s: ["saf", "ti", "gen"] },
      { t: "Apfel", s: ["Ap", "fel"] },
      { t: "auf", s: ["auf"] },
      { t: "der", s: ["der"] },
      { t: "Wiese", s: ["Wie", "se"] },
      { t: "entdeckt.", s: ["ent", "de", "ckt"] },
    ],
  },
  {
    id: "2",
    imageUrl: hedgehog02,
    words: [
      { t: "Ob", s: ["Ob"] },
      { t: "der", s: ["der"] },
      { t: "wohl", s: ["wohl"] },
      { t: "schmeckt?", s: ["schmeckt"] },
    ],
  },
  {
    id: "3",
    imageUrl: hedgehog03,
    words: [
      { t: "Igel", s: ["I", "gel"] },
      { t: "haben", s: ["ha", "ben"] },
      { t: "spitze", s: ["spit", "ze"] },
      { t: "Stacheln", s: ["Sta", "cheln"] },
      { t: "auf", s: ["auf"] },
      { t: "ihrem", s: ["ih", "rem"] },
      { t: "Rücken.", s: ["Rü", "cken"] },
    ],
  },
  {
    id: "4",
    imageUrl: hedgehog04,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "piken,", s: ["pi", "ken"] },
      { t: "wenn", s: ["wenn"] },
      { t: "man", s: ["man"] },
      { t: "sie", s: ["sie"] },
      { t: "anfasst!", s: ["an", "fasst"] },
      { t: "Autsch!", s: ["Autsch"] },
    ],
  },
  {
    id: "5",
    imageUrl: hedgehog05,
    words: [
      { t: "Damit", s: ["Da", "mit"] },
      { t: "schützen", s: ["schüt", "zen"] },
      { t: "sie", s: ["sie"] },
      { t: "sich", s: ["sich"] },
      { t: "vor", s: ["vor"] },
      { t: "fremden", s: ["frem", "den"] },
      { t: "Tieren.", s: ["Tie", "ren"] },
    ],
  },
  {
    id: "6",
    imageUrl: hedgehog06,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "der", s: ["der"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Igel?", s: ["I", "gel"] },
    ],
  },
  {
    id: "7",
    imageUrl: hedgehog07,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "mal", s: ["mal"] },
      { t: "seinen", s: ["sei", "nen"] },
      { t: "weißen", s: ["wei", "ßen"] },
      { t: "Bauch,", s: ["Bauch"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  },
];

export default hedgehog;
