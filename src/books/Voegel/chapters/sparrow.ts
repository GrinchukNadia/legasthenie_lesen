import sparrow01 from "../../../assets/voegel/sparrow/sparrow01.webp";
import sparrow02 from "../../../assets/voegel/sparrow/sparrow02.jpg";
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
      { t: "Spatzen", s: ["Spat", "zen"] },
      { t: "können", s: ["kön", "nen"] },
      { t: "sehr", s: ["sehr"] },
      { t: "laut", s: ["laut"] },
      { t: "und", s: ["und"] },
      { t: "fröhlich", s: ["fröh", "lich"] },
      { t: "zwitschern,", s: ["zwit", "schern"] },
      { t: "obwohl", s: ["ob", "wohl"] },
      { t: "sie", s: ["sie"] },
      { t: "so", s: ["so"] },
      { t: "klein", s: ["klein"] },
      { t: "sind.", s: ["sind"] },
    ],
  },
  {
    id: "6",
    imageUrl: sparrow06,
    words: [
      { t: "Trotz", s: ["Trotz"] },
      { t: "ihrer", s: ["ih", "rer"] },
      { t: "geringen", s: ["ge", "rin", "gen"] },
      { t: "Größe", s: ["Grö", "ße"] },
      { t: "sind", s: ["sind"] },
      { t: "Spatzen", s: ["Spat", "zen"] },
      { t: "sehr", s: ["sehr"] },
      { t: "mutig", s: ["mu", "tig"] },
      { t: "und", s: ["und"] },
      { t: "verteidigen", s: ["ver", "tei", "di", "gen"] },
      { t: "ihr", s: ["ihr"] },
      { t: "Nest.", s: ["Nest"] },
    ],
  }
];

export default sparrow;
