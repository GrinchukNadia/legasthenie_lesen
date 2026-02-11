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
      { t: "Die", s: ["Die"] },
      { t: "lange,", s: ["lan", "ge"] },
      { t: "klebrige", s: ["kle", "bri", "ge"] },
      { t: "Zunge", s: ["Zun", "ge"] },
      { t: "hilft", s: ["hilft"] },
      { t: "ihnen,", s: ["ih", "nen"] },
      { t: "Insekten", s: ["In", "sek", "ten"] },
      { t: "aus", s: ["aus"] },
      { t: "dem", s: ["dem"] },
      { t: "Holz", s: ["Holz"] },
      { t: "zu", s: ["zu"] },
      { t: "holen.", s: ["ho", "len"] },
    ],
  },
  {
    id: "5",
    imageUrl: woodpecker05,
    words: [
      { t: "Spechte", s: ["Spech", "te"] },
      { t: "klettern", s: ["klet", "tern"] },
      { t: "mit", s: ["mit"] },
      { t: "ihren", s: ["ih", "ren"] },
      { t: "kräftigen", s: ["kräf", "ti", "gen"] },
      { t: "Füßen", s: ["Fü", "ßen"] },
      { t: "geschickt", s: ["ge", "schickt"] },
      { t: "an", s: ["an"] },
      { t: "Baumstämmen", s: ["Baum", "stäm", "men"] },
      { t: "hoch.", s: ["hoch"] },
    ],
  }
];

export default woodpecker;
