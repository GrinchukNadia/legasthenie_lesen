import ratte01 from "../../../assets/lieblingsTiere/ratte/ratte01.avif";
import ratte02 from "../../../assets/lieblingsTiere/ratte/ratte02.jpg";
import ratte03 from "../../../assets/lieblingsTiere/ratte/ratte03.jpg";
import ratte04 from "../../../assets/lieblingsTiere/ratte/ratte04.jpg";
import ratte05 from "../../../assets/lieblingsTiere/ratte/ratte05.jpg";
import ratte06 from "../../../assets/lieblingsTiere/ratte/ratte06.jpg";
import type { SentenceItem } from "../../../features/reader/types";

const ratte: SentenceItem[] = [
  {
    id: "1",
    imageUrl: ratte01,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "Ratte", s: ["Rat", "te"] },
      { t: "ist", s: ["ist"] },
      { t: "ein", s: ["ein"] },
      { t: "kleines,", s: ["klei", "nes"] },
      { t: "kluges", s: ["klu", "ges"] },
      { t: "Säugetier", s: ["Säu", "ge", "tier"] },
      { t: "mit", s: ["mit"] },
      { t: "einem", s: ["ei", "nem"] },
      { t: "langen", s: ["lan", "gen"] },
      { t: "Schwanz.", s: ["Schwanz"] },
    ],
  },
  {
    id: "2",
    imageUrl: ratte02,
    words: [
      { t: "Sie", s: ["Sie"] },
      { t: "hat", s: ["hat"] },
      { t: "scharfe", s: ["schar", "fe"] },
      { t: "Zähne", s: ["Zäh", "ne"] },
      { t: "und", s: ["und"] },
      { t: "kann", s: ["kann"] },
      { t: "fast", s: ["fast"] },
      { t: "alles", s: ["al", "les"] },
      { t: "anknabbern.", s: ["an", "knab", "bern"] },
    ],
  },
  {
    id: "3",
    imageUrl: ratte03,
    words: [
      { t: "Mit", s: ["Mit"] },
      { t: "ihren", s: ["ih", "ren"] },
      { t: "feinen", s: ["fei", "nen"] },
      { t: "Schnurrhaaren", s: ["Schnurr", "haa", "ren"] },
      { t: "spürt", s: ["spürt"] },
      { t: "sie", s: ["sie"] },
      { t: "Hindernisse", s: ["Hin", "der", "nis", "se"] },
      { t: "im", s: ["im"] },
      { t: "Dunkeln.", s: ["Dun", "keln"] },
    ],
  },
  {
    id: "4",
    imageUrl: ratte04,
    words: [
      { t: "Ratten", s: ["Rat", "ten"] },
      { t: "sind", s: ["sind"] },
      { t: "sehr", s: ["sehr"] },
      { t: "geschickt", s: ["ge", "schickt"] },
      { t: "und", s: ["und"] },
      { t: "können", s: ["kön", "nen"] },
      { t: "gut", s: ["gut"] },
      { t: "klettern", s: ["klet", "tern"] },
      { t: "und", s: ["und"] },
      { t: "schwimmen.", s: ["schwim", "men"] },
    ],
  },
  {
    id: "5",
    imageUrl: ratte05,
    words: [
      { t: "Sie", s: ["Sie"] },
      { t: "leben", s: ["le", "ben"] },
      { t: "oft", s: ["oft"] },
      { t: "in", s: ["in"] },
      { t: "Gruppen", s: ["Grup", "pen"] },
      { t: "und", s: ["und"] },
      { t: "kümmern", s: ["küm", "mern"] },
      { t: "sich", s: ["sich"] },
      { t: "umeinander.", s: ["um", "ei", "nan", "der"] },
    ],
  },
  {
    id: "6",
    imageUrl: ratte06,
    words: [
      { t: "Viele", s: ["Vie", "le"] },
      { t: "Ratten", s: ["Rat", "ten"] },
      { t: "sind", s: ["sind"] },
      { t: "neugierig", s: ["neu", "gie", "rig"] },
      { t: "und", s: ["und"] },
      { t: "lernen", s: ["ler", "nen"] },
      { t: "schnell", s: ["schnell"] },
      { t: "neue", s: ["neu", "e"] },
      { t: "Wege", s: ["We", "ge"] },
      { t: "und", s: ["und"] },
      { t: "Tricks.", s: ["Tricks"] },
    ],
  },
];

export default ratte;
