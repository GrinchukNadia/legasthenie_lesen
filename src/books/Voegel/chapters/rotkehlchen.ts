import rotkehlchen01 from "../../../assets/voegel/rotkehlchen/rotkehlchen01.jpg";
import rotkehlchen02 from "../../../assets/voegel/rotkehlchen/rotkehlchen02.jpeg";
import rotkehlchen03 from "../../../assets/voegel/rotkehlchen/rotkehlchen03.webp";
import rotkehlchen04 from "../../../assets/voegel/rotkehlchen/rotkehlchen04.webp";
import rotkehlchen05 from "../../../assets/voegel/rotkehlchen/rotkehlchen05.webp";
import type { SentenceItem } from "../../../features/reader/types";

const rotkehlchen: SentenceItem[] = [
  {
    id: "1",
    imageUrl: rotkehlchen01,
    words: [
      { t: "Wusstest", s: ["Wuss", "test"] },
      { t: "du,", s: ["du"] },
      { t: "dass", s: ["dass"] },
      { t: "Rotkehlchen", s: ["Rot", "kehl", "chen"] },
      { t: "unglaublich", s: ["un", "glaub", "lich"] },
      { t: "gerne", s: ["ger", "ne"] },
      { t: "singen?", s: ["sin", "gen"] },
    ],
  },
  {
    id: "2",
    imageUrl: rotkehlchen02,
    words: [
      { t: "Ihren", s: ["Ih", "ren"] },
      { t: "Gesang", s: ["Ge", "sang"] },
      { t: "hört", s: ["hört"] },
      { t: "man", s: ["man"] },
      { t: "meistens", s: ["meis", "tens"] },
      { t: "schon", s: ["schon"] },
      { t: "vor", s: ["vor"] },
      { t: "Sonnenaufgang.", s: ["Son", "nen", "auf", "gang"] },
    ],
  },
  {
    id: "3",
    imageUrl: rotkehlchen03,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wenn", s: ["wenn"] },
      { t: "es", s: ["es"] },
      { t: "dunkel", s: ["dun", "kel"] },
      { t: "geworden", s: ["ge", "wor", "den"] },
      { t: "ist,", s: ["ist"] },
      { t: "trällern", s: ["träl", "lern"] },
      { t: "sie", s: ["sie"] },
      { t: "noch", s: ["noch"] },
      { t: "vor", s: ["vor"] },
      { t: "sich", s: ["sich"] },
      { t: "hin.", s: ["hin"] },
    ],
  },
  {
    id: "4",
    imageUrl: rotkehlchen04,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "das", s: ["das"] },
      { t: "Rotkehlchen", s: ["Rot", "kehl", "chen"] },
      { t: "mit", s: ["mit"] },
      { t: "dem", s: ["dem"] },
      { t: "flauschigen", s: ["flau", "schi", "gen"] },
      { t: "Bauch?", s: ["Bauch"] },
    ],
  },
  {
    id: "5",
    imageUrl: rotkehlchen05,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "es", s: ["es"] },
      { t: "mal,", s: ["mal"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  },
];

export default rotkehlchen;
