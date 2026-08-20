/**
 * LoveLetter — the personal letter rendered as paragraphs (DATA-MODEL §3).
 * `content` holds one string per paragraph.
 */
export type LoveLetter = {
  id: string;
  title: string;
  content: string[];
};