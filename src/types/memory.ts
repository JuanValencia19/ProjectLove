/**
 * Memory — a relationship memory shown as a timeline card (DATA-MODEL §2).
 * Canonical contract for MVP1; PRD §8.4 extras are deferred (D-016).
 */
export type Memory = {
  id: string;
  date: string;
  title: string;
  text: string;
  image?: string;
};