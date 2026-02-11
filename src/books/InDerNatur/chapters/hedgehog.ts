import hedgehog01 from "../../../assets/inDerNatur/hedgehog/hedgehog01.jpg";
import hedgehog02 from "../../../assets/inDerNatur/hedgehog/hedgehog02.webp";
import hedgehog03 from "../../../assets/inDerNatur/hedgehog/hedgehog03.webp";
import hedgehog04 from "../../../assets/inDerNatur/hedgehog/hedgehog04.webp";
import hedgehog05 from "../../../assets/inDerNatur/hedgehog/hedgehog05.jpg";
import hedgehog06 from "../../../assets/inDerNatur/hedgehog/hedgehog06.avif";
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
      { t: "Mit", s: ["Mit"] },
      { t: "seiner", s: ["sei", "ner"] },
      { t: "feinen", s: ["fei", "nen"] },
      { t: "Nase", s: ["Na", "se"] },
      { t: "kann", s: ["kann"] },
      { t: "der", s: ["der"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "Futter", s: ["Fut", "ter"] },
      { t: "im", s: ["im"] },
      { t: "Dunkeln", s: ["Dun", "keln"] },
      { t: "finden.", s: ["fin", "den"] },
    ],
  },
  {
    id: "3",
    imageUrl: hedgehog03,
    words: [
      { t: "Der", s: ["Der"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "hat", s: ["hat"] },
      { t: "viele", s: ["vie", "le"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Stacheln", s: ["Sta", "cheln"] },
      { t: "auf", s: ["auf"] },
      { t: "dem", s: ["dem"] },
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
      { t: "Bei", s: ["Bei"] },
      { t: "Gefahr", s: ["Ge", "fahr"] },
      { t: "rollt", s: ["rollt"] },
      { t: "sich", s: ["sich"] },
      { t: "der", s: ["der"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "zu", s: ["zu"] },
      { t: "einer", s: ["ei", "ner"] },
      { t: "stacheligen", s: ["sta", "che", "li", "gen"] },
      { t: "Kugel", s: ["Ku", "gel"] },
      { t: "zusammen.", s: ["zu", "sam", "men"] },
    ],
  },
  {
    id: "6",
    imageUrl: hedgehog06,
    words: [
      { t: "Der", s: ["Der"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "ist", s: ["ist"] },
      { t: "nachtaktiv", s: ["nacht", "ak", "tiv"] },
      { t: "und", s: ["und"] },
      { t: "sucht", s: ["sucht"] },
      { t: "im", s: ["im"] },
      { t: "Dunkeln", s: ["Dun", "keln"] },
      { t: "nach", s: ["nach"] },
      { t: "Insekten", s: ["In", "sek", "ten"] },
      { t: "und", s: ["und"] },
      { t: "Würmern.", s: ["Wür", "mern"] },
    ],
  },
  {
    id: "7",
    imageUrl: hedgehog07,
    words: [
      { t: "Im", s: ["Im"] },
      { t: "Winter", s: ["Win", "ter"] },
      { t: "hält", s: ["hält"] },
      { t: "der", s: ["der"] },
      { t: "Igel", s: ["I", "gel"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "langen", s: ["lan", "gen"] },
      { t: "Winterschlaf.", s: ["Win", "ter", "schlaf"] },
    ],
  },
];

export default hedgehog;
