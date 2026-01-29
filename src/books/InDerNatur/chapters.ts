import type { SentenceItem } from "../../features/reader/types";

export const inDerNaturChapters = [
  {
    id: "hedgehog",
    title: "Igel",
    preview: "Der kleine Igel hat einen roten, saftigen Apfel...",
  },
  {
    id: "rotkehlchenBabys",
    title: "Rotkehlchen – Babys",
    preview: "Guck mal, wie weit die Vogelbabys ihre Schnäbel aufsperren...",
  },
  {
    id: "duckling",
    title: "Entenküken",
    preview: "Schau mal, Familie Ente macht einen Ausflug über den See...",
  },
  {
    id: "libelle",
    title: "Libelle",
    preview:
      "Auf der Wiese ist viel los, emsig kriechen und fliegen die Insekten...",
  },
  {
    id: "frog",
    title: "Frosch",
    preview: "Frösche leben im Wasser und auf dem Land...",
  },
] as const;

export type InDerNaturChapterId = (typeof inDerNaturChapters)[number]["id"];

export async function loadInDerNaturChapter(
  chapterId: InDerNaturChapterId,
): Promise<SentenceItem[]> {
  switch (chapterId) {
    case "hedgehog": {
      const m = await import("./chapters/hedgehog");
      return m.default;
    }
    case "rotkehlchenBabys": {
      const m = await import("./chapters/rotkehlchenBabys");
      return m.default;
    }
    case "duckling": {
      const m = await import("./chapters/duckling");
      return m.default;
    }
    case "libelle": {
      const m = await import("./chapters/libelle");
      return m.default;
    }
    case "frog": {
      const m = await import("./chapters/frog");
      return m.default;
    }
    default:
      return [];
  }
}
