import whale01 from "../../../assets/imOzean/whale/whale01.webp";
import whale02 from "../../../assets/imOzean/whale/whale02.jpg";
import whale03 from "../../../assets/imOzean/whale/whale03.webp";
import whale04 from "../../../assets/imOzean/whale/whale04.jpg";
import whale05 from "../../../assets/imOzean/whale/whale05.webp";
import type { SentenceItem } from "../../../features/reader/types";

const whale: SentenceItem[] = [
  {
    id: "1",
    imageUrl: whale01,
    words: [
      { t: "Schau", s: ["Schau"] },
      { t: "nur,", s: ["nur,"] },
      { t: "der", s: ["der"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Buckelwal", s: ["Bu", "ckel", "wal"] },
      { t: "zeigt", s: ["zeigt"] },
      { t: "seiner", s: ["sei", "ner"] },
      { t: "Mama,", s: ["Ma", "ma,"] },
      { t: "wie", s: ["wie"] },
      { t: "gut", s: ["gut"] },
      { t: "er", s: ["er"] },
      { t: "schon", s: ["schon"] },
      { t: "schwimmen", s: ["schwim", "men"] },
      { t: "kann.", s: ["kann."] },
    ],
  },
  {
    id: "2",
    imageUrl: whale02,
    words: [
      { t: "Buckelwale", s: ["Bu", "ckel", "wa", "le"] },
      { t: "sind", s: ["sind"] },
      { t: "bekannt", s: ["be", "kannt"] },
      { t: "für", s: ["für"] },
      { t: "ihre", s: ["ih", "re"] },
      { t: "akrobatischen", s: ["a", "kro", "ba", "ti", "schen"] },
      { t: "Sprünge.", s: ["Sprün", "ge."] },
    ],
  },
  {
    id: "3",
    imageUrl: whale03,
    words: [
      { t: "Dabei", s: ["Da", "bei"] },
      { t: "erheben", s: ["er", "he", "ben"] },
      { t: "sie", s: ["sie"] },
      { t: "sich", s: ["sich"] },
      { t: "mit", s: ["mit"] },
      { t: "dem", s: ["dem"] },
      { t: "gesamten", s: ["ge", "sam", "ten"] },
      { t: "Körper", s: ["Kör", "per"] },
      { t: "aus", s: ["aus"] },
      { t: "dem", s: ["dem"] },
      { t: "Wasser.", s: ["Was", "ser."] },
    ],
  },
  {
    id: "4",
    imageUrl: whale04,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "der", s: ["der"] },
      { t: "Buckelwal", s: ["Bu", "ckel", "wal"] },
      { t: "mit", s: ["mit"] },
      { t: "dem", s: ["dem"] },
      { t: "langen", s: ["lan", "gen"] },
      { t: "Maul?", s: ["Maul?"] },
    ],
  },
  {
    id: "5",
    imageUrl: whale05,
    words: [
      { t: "Fühl", s: ["Fühl"] },
      { t: "doch", s: ["doch"] },
      { t: "mal,", s: ["mal,"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es!"] },
    ],
  },
];

export default whale;
