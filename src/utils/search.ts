const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30f6;
const HIRAGANA_KATAKANA_DIFF = 0x60;

export const toHiragana = (value: string) =>
  [...value].map((char) => {
    const codePoint = char.codePointAt(0);
    if (!codePoint || codePoint < KATAKANA_START || codePoint > KATAKANA_END) return char;
    return String.fromCodePoint(codePoint - HIRAGANA_KATAKANA_DIFF);
  }).join("");

export const normalizeSearchText = (value: string) => toHiragana(value.normalize("NFKC").toLowerCase()).replace(/\s+/g, "");

export const buildSearchAliases = (query: string) =>
  [...new Set([query.trim(), normalizeSearchText(query)].filter((value) => value.length > 0))];
