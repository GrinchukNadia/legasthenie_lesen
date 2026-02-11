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
      { t: "Erwachsene", s: ["Er", "wach", "se", "ne"] },
      { t: "Rotkehlchen", s: ["Rot", "kehl", "chen"] },
      { t: "leben", s: ["le", "ben"] },
      { t: "meist", s: ["meist"] },
      { t: "allein", s: ["al", "lein"] },
      { t: "und", s: ["und"] },
      { t: "nur", s: ["nur"] },
      { t: "zur", s: ["zur"] },
      { t: "Brutzeit", s: ["Brut", "zeit"] },
      { t: "als", s: ["als"] },
      { t: "Paar.", s: ["Paar"] },
    ],
  },
  {
    id: "5",
    imageUrl: rotkehlchen05,
    words: [
      { t: "Rotkehlchen", s: ["Rot", "kehl", "chen"] },
      { t: "können", s: ["kön", "nen"] },
      { t: "sich", s: ["sich"] },
      { t: "gut", s: ["gut"] },
      { t: "an", s: ["an"] },
      { t: "Menschen", s: ["Men", "schen"] },
      { t: "gewöhnen", s: ["ge", "wöh", "nen"] },
      { t: "und", s: ["und"] },
      { t: "kommen", s: ["kom", "men"] },
      { t: "oft", s: ["oft"] },
      { t: "in", s: ["in"] },
      { t: "Gärten.", s: ["Gär", "ten"] },
    ],
  },
];

export default rotkehlchen;
