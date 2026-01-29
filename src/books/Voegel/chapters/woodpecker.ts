import woodpecker01 from "../../../assets/voegel/woodpecker/woodpecker01.webp";
import woodpecker02 from "../../../assets/voegel/woodpecker/woodpecker02.jpg";
import woodpecker03 from "../../../assets/voegel/woodpecker/woodpecker03.avif";
import woodpecker04 from "../../../assets/voegel/woodpecker/woodpecker04.webp";
import woodpecker05 from "../../../assets/voegel/woodpecker/woodpecker05.avif";
import type { SentenceItem } from "../../../features/reader/types";

const woodpecker: SentenceItem[] = [
  {
    id: "1",
    imageUrl: woodpecker01,
    words: [
      { t: "Hast", s: ["Hast"] },
      { t: "du", s: ["du"] },
      { t: "schon", s: ["schon"] },
      { t: "einmal", s: ["ein", "mal"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "Specht", s: ["Specht"] },
      { t: "in", s: ["in"] },
      { t: "freier", s: ["frei", "er"] },
      { t: "Natur", s: ["Na", "tur"] },
      { t: "gesehen?", s: ["ge", "se", "hen"] },
    ],
  },
  {
    id: "2",
    imageUrl: woodpecker02,
    words: [
      { t: "Spechte", s: ["Spech", "te"] },
      { t: "kannst", s: ["kannst"] },
      { t: "du", s: ["du"] },
      { t: "oft", s: ["oft"] },
      { t: "dabei", s: ["da", "bei"] },
      { t: "beobachten,", s: ["be", "ob", "ach", "ten"] },
      { t: "wie", s: ["wie"] },
      { t: "sie", s: ["sie"] },
      { t: "mit", s: ["mit"] },
      { t: "ihrem", s: ["ih", "rem"] },
      { t: "spitzen", s: ["spit", "zen"] },
      { t: "Schnabel", s: ["Schna", "bel"] },
      { t: "gegen", s: ["ge", "gen"] },
      { t: "Baumstämme", s: ["Baum", "stäm", "me"] },
      { t: "klopfen.", s: ["klopf", "en"] },
    ],
  },
  {
    id: "3",
    imageUrl: woodpecker03,
    words: [
      { t: "So", s: ["So"] },
      { t: "suchen", s: ["su", "chen"] },
      { t: "sie", s: ["sie"] },
      { t: "Futter", s: ["Fut", "ter"] },
      { t: "oder", s: ["o", "der"] },
      { t: "bauen", s: ["bau", "en"] },
      { t: "sich", s: ["sich"] },
      { t: "eine", s: ["ei", "ne"] },
      { t: "Nisthöhle.", s: ["Nist", "höh", "le"] },
    ],
  },
  {
    id: "4",
    imageUrl: woodpecker04,
    words: [
      { t: "Und", s: ["Und"] },
      { t: "wie", s: ["wie"] },
      { t: "macht", s: ["macht"] },
      { t: "der", s: ["der"] },
      { t: "Specht", s: ["Specht"] },
      { t: "mit", s: ["mit"] },
      { t: "den", s: ["den"] },
      { t: "langen", s: ["lan", "gen"] },
      { t: "Krallen?", s: ["Kral", "len"] },
    ],
  },
  {
    id: "5",
    imageUrl: woodpecker05,
    words: [
      { t: "Streichle", s: ["Streich", "le"] },
      { t: "ihn", s: ["ihn"] },
      { t: "mal,", s: ["mal"] },
      { t: "dann", s: ["dann"] },
      { t: "hörst", s: ["hörst"] },
      { t: "du", s: ["du"] },
      { t: "es!", s: ["es"] },
    ],
  }
];

export default woodpecker;
