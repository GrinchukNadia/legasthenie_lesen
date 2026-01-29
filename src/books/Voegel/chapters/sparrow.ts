import sparrow01 from "../../../assets/voegel/sparrow/sparrow01.jpg";
import sparrow02 from "../../../assets/voegel/sparrow/sparrow02.webp";
import sparrow03 from "../../../assets/voegel/sparrow/sparrow03.jpg";
import sparrow04 from "../../../assets/voegel/sparrow/sparrow04.jpg";
import sparrow05 from "../../../assets/voegel/sparrow/sparrow05.jpg";
import sparrow06 from "../../../assets/voegel/sparrow/sparrow06.jpg";
import type { SentenceItem } from "../../../features/reader/types";

const sparrow: SentenceItem[] = [
  {
    id: "1",
    imageUrl: sparrow01,
    words: [
      { t: "Schau", s: ["Schau"] },
      { t: "mal,", s: ["mal"] },
      { t: "der", s: ["der"] },
      { t: "kleine", s: ["klei", "ne"] },
      { t: "Spatz", s: ["Spatz"] },
      { t: "nimmt", s: ["nimmt"] },
      { t: "ein", s: ["ein"] },
      { t: "Bad.", s: ["Bad"] },
    ],
  },
  {
    id: "2",
    imageUrl: sparrow02,
    words: [
      { t: "Wie", s: ["Wie"] },
      { t: "das", s: ["das"] },
      { t: "spritzt!", s: ["spritzt"] },
    ],
  },
  {
    id: "3",
    imageUrl: sparrow03,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "anderen", s: ["an", "de", "ren"] },
      { t: "Spatzen", s: ["Spat", "zen"] },
      { t: "schauen", s: ["schau", "en"] },
      { t: "sich", s: ["sich"] },
      { t: "das", s: ["das"] },
      { t: "lieber", s: ["lie", "ber"] },
      { t: "gemeinsam", s: ["ge", "mein", "sam"] },
      { t: "von", s: ["von"] },
      { t: "oben", s: ["o", "ben"] },
      { t: "an.", s: ["an"] },
    ],
  },
  {
    id: "4",
    imageUrl: sparrow04,
    words: [
      { t: "Spatzen", s: ["Spat", "zen"] },
      { t: "sind", s: ["sind"] },
      { t: "gerne", s: ["ger", "ne"] },
      { t: "in", s: ["in"] },
      { t: "Gesellschaft", s: ["Ge", "sell", "schaft"] },
      { t: "und", s: ["und"] },
      { t: "leben", s: ["le", "ben"] },
      { t: "in", s: ["in"] },
      { t: "Gruppen", s: ["Grup", "pen"] },
      { t: "zusammen.", s: ["zu", "sam", "men"] },
    ],
  },
  {
    id: "5",
    imageUrl: sparrow05,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "klingt", s: ["klingt"] },
      { t: "der", s: ["der"] },
      { t: "Spatz", s: ["Spatz"] },
      { t: "mit", s: ["mit"] },
      { t: "den", s: ["den"] },
      { t: "gemusterten", s: ["ge", "mus", "ter", "ten"] },
      { t: "Flügeln?", s: ["Flü", "geln"] },
    ],
  },
  {
    id: "6",
    imageUrl: sparrow06,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "mal", s: ["mal"] },
      { t: "seinen", s: ["sei", "nen"] },
      { t: "Bauch,", s: ["Bauch"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  }
];

export default sparrow;
