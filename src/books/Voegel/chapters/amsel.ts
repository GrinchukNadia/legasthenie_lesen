import amsel01 from "../../../assets/voegel/amsel/amsel01.jpg";
import amsel02 from "../../../assets/voegel/amsel/amsel02.jpg";
import amsel03 from "../../../assets/voegel/amsel/amsel03.webp";
import amsel04 from "../../../assets/voegel/amsel/amsel04.webp";
import amsel05 from "../../../assets/voegel/amsel/amsel05.webp";
import amsel06 from "../../../assets/voegel/amsel/amsel06.jpg";
import amsel07 from "../../../assets/voegel/amsel/amsel07.avif";
import type { SentenceItem } from "../../../features/reader/types";

const amsel: SentenceItem[] = [
  {
    id: "1",
    imageUrl: amsel01,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "kleinen", s: ["klei", "nen"] },
      { t: "Amselküken", s: ["Am", "sel", "kü", "ken"] },
      { t: "haben", s: ["ha", "ben"] },
      { t: "Hunger", s: ["Hun", "ger"] },
      { t: "und", s: ["und"] },
      { t: "reißen", s: ["rei", "ßen"] },
      { t: "die", s: ["die"] },
      { t: "Schnäbel", s: ["Schnä", "bel"] },
      { t: "auf.", s: ["auf"] },
    ],
  },
  {
    id: "2",
    imageUrl: amsel02,
    words: [
      { t: "Ihr", s: ["Ihr"] },
      { t: "Papa", s: ["Pa", "pa"] },
      { t: "bringt", s: ["bringt"] },
      { t: "ihnen", s: ["ih", "nen"] },
      { t: "schnell", s: ["schnell"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "Wurm", s: ["Wurm"] },
      { t: "zum", s: ["zum"] },
      { t: "Fressen.", s: ["Fres", "sen"] },
    ],
  },
  {
    id: "3",
    imageUrl: amsel03,
    words: [
      { t: "Amseln", s: ["Am", "seln"] },
      { t: "mögen", s: ["mö", "gen"] },
      { t: "aber", s: ["a", "ber"] },
      { t: "auch", s: ["auch"] },
      { t: "Käfer", s: ["Kä", "fer"] },
      { t: "und", s: ["und"] },
      { t: "Beeren.", s: ["Bee", "ren"] },
    ],
  },
  {
    id: "4",
    imageUrl: amsel04,
    words: [
      { t: "Ihre", s: ["Ih", "re"] },
      { t: "Nester", s: ["Nes", "ter"] },
      { t: "kannst", s: ["kannst"] },
      { t: "du", s: ["du"] },
      { t: "in", s: ["in"] },
      { t: "Bäumen", s: ["Bäu", "men"] },
      { t: "und", s: ["und"] },
      { t: "Sträuchern", s: ["Sträu", "chern"] },
      { t: "entdecken.", s: ["ent", "de", "cken"] },
    ],
  },
  {
    id: "5",
    imageUrl: amsel05,
    words: [
      { t: "Amseln", s: ["Am", "seln"] },
      { t: "sind", s: ["sind"] },
      { t: "neugierig", s: ["neu", "gie", "rig"] },
      { t: "und", s: ["und"] },
      { t: "beobachten", s: ["be", "ob", "ach", "ten"] },
      { t: "ihre", s: ["ih", "re"] },
      { t: "Umgebung", s: ["Um", "ge", "bung"] },
      { t: "aufmerksam.", s: ["auf", "merk", "sam"] },
    ],
  },
  {
    id: "6",
    imageUrl: amsel06,
    words: [
      { t: "Ihr", s: ["Ihr"] },
      { t: "Gesang", s: ["Ge", "sang"] },
      { t: "klingt", s: ["klingt"] },
      { t: "besonders", s: ["be", "son", "ders"] },
      { t: "schön", s: ["schön"] },
      { t: "am", s: ["am"] },
      { t: "frühen", s: ["frü", "hen"] },
      { t: "Morgen.", s: ["Mor", "gen"] },
    ],
  },
  {
    id: "7",
    imageUrl: amsel07,
    words: [
      { t: "Die", s: ["Die"] },
      { t: "Amsel", s: ["Am", "sel"] },
      { t: "hat", s: ["hat"] },
      { t: "ein", s: ["ein"] },
      { t: "schwarzes", s: ["schwar", "zes"] },
      { t: "Gefieder", s: ["Ge", "fie", "der"] },
      { t: "und", s: ["und"] },
      { t: "einen", s: ["ei", "nen"] },
      { t: "gelben", s: ["gel", "ben"] },
      { t: "Schnabel,", s: ["Schna", "bel"] },
      { t: "während", s: ["wäh", "rend"] },
      { t: "das", s: ["das"] },
      { t: "Weibchen", s: ["Weib", "chen"] },
      { t: "meist", s: ["meist"] },
      { t: "braun", s: ["braun"] },
      { t: "gefärbt", s: ["ge", "färbt"] },
      { t: "und", s: ["und"] },
      { t: "gut", s: ["gut"] },
      { t: "getarnt", s: ["ge", "tarnt"] },
      { t: "ist.", s: ["ist"] },
    ],
  },
];

export default amsel;
