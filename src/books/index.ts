import { imOzeanMeta } from "./ImOzean/meta";
import { voegelMeta } from "./Voegel/meta";
import { inDerNaturMeta } from "./InDerNatur/meta";
import { imOzeanChapters, loadImOzeanChapter } from "./ImOzean/chapters";
import { voegelChapters, loadVoegelChapter } from "./Voegel/chapters";
import { inDerNaturChapters, loadInDerNaturChapter } from "./InDerNatur/chapters";
import { lieblingsTiereMeta } from "./LieblingsTiere/meta";
import { lieblingsTiereChapters, loadLieblingsTiereChapter } from "./LieblingsTiere/chapters";

export const BOOKS = [
  {
    ...imOzeanMeta,
    chapters: imOzeanChapters,
    loadChapter: loadImOzeanChapter,
  },
  {
    ...voegelMeta,
    chapters: voegelChapters,
    loadChapter: loadVoegelChapter,
  },
  {
    ...inDerNaturMeta,
    chapters: inDerNaturChapters,
    loadChapter: loadInDerNaturChapter,
  },
  {
    ...lieblingsTiereMeta,
    chapters: lieblingsTiereChapters,
    loadChapter: loadLieblingsTiereChapter,
  },
]

export function getBook(bookId: string) {
  return BOOKS.find((b) => b.id === bookId);
}
