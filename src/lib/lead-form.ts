/**
 * Lead-capture (sales inquiry) form links.
 *
 * The forms are hosted on Jinshuju (金数据). Each entry point appends a
 * `source` query parameter so submitted leads can be attributed in the form
 * dashboard (add a hidden "source" field in Jinshuju to capture it).
 */
export const SALES_FORM_URLS: Record<"zh" | "en", string> = {
  zh: "https://jsj.top/f/HChu2h",
  en: "https://jsj.top/f/VcYJiF",
};

export type LeadSource = "navbar" | "mobile-nav" | "home" | "footer" | "page";

export function salesFormUrl(locale: string, source: LeadSource): string {
  const base = locale === "zh" ? SALES_FORM_URLS.zh : SALES_FORM_URLS.en;
  return `${base}?source=${source}`;
}
