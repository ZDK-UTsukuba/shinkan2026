globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CMB8L6JC.mjs';
import { c as CATEGORY_LIST, a as $$Image, $ as $$Layout } from '../chunks/Layout_DYw_2TMg.mjs';
import { l as lookupOrganizationCategoryName, $ as $$Heart, i as imageUrl } from '../chunks/envs_BrYlwnnc.mjs';
/* empty css                                 */
import { g as getOrganizations } from '../chunks/organizations_CMZQNiVU.mjs';
export { renderers } from '../renderers.mjs';

var define_process_env_CATEGORY_COUNTS_default = { athletic_department: 17, artistic_union: 16, cultural_federation: 25, general: 43, others: 3 };
const $$Astro$2 = createAstro("https://shinkan-web.zdk.tsukuba.ac.jp");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Search;
  const { text, categories, faves } = Astro2.props;
  const counts = define_process_env_CATEGORY_COUNTS_default ?? [];
  return renderTemplate`${maybeRenderHead()}<form class="search container" data-astro-cid-otpdt6jm> <span class="limit" data-astro-cid-otpdt6jm></span> <fieldset class="keyword" data-astro-cid-otpdt6jm> <input type="text" name="q" size="10" placeholder="団体名・キーワードでフィルタ"${addAttribute(text, "value")} data-astro-cid-otpdt6jm> <input type="submit" value="検索" data-astro-cid-otpdt6jm> </fieldset> <fieldset class="filter" data-astro-cid-otpdt6jm> ${CATEGORY_LIST.map((category) => renderTemplate`<label${addAttribute(category, "for")} data-astro-cid-otpdt6jm> <input type="checkbox"${addAttribute(category, "id")}${addAttribute(category, "value")} name="c[]"${addAttribute(categories?.length === 0 || categories.includes(category), "checked")} data-astro-cid-otpdt6jm> <span data-astro-cid-otpdt6jm>${`${lookupOrganizationCategoryName(category)} (${counts[category]})`}</span> </label>`)} <label for="faves" data-astro-cid-otpdt6jm> <input type="checkbox" id="faves" name="f" value="0"${addAttribute(faves, "checked")} data-astro-cid-otpdt6jm> <span id="faves-label" data-astro-cid-otpdt6jm>お気に入り</span> </label> </fieldset> </form>  ${renderScript($$result, "/home/raspi0124/WS/shinkan2026/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/raspi0124/WS/shinkan2026/src/components/Search.astro", void 0);

const $$Astro$1 = createAstro("https://shinkan-web.zdk.tsukuba.ac.jp");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, category, short_description, id, thumbnail } = Astro2.props;
  const thumbnailImage = /* @__PURE__ */ (() => {
    return thumbnail;
  })();
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-dohjnao5> <a${addAttribute(`/orgs/${id}`, "href")} class="link" data-astro-cid-dohjnao5> <div class="thumbnail" data-astro-cid-dohjnao5> ${renderComponent($$result, "Image", $$Image, { "src": thumbnailImage.url, "alt": `${name}\u306E\u30B5\u30E0\u30CD\u30A4\u30EB\u753B\u50CF`, "width": thumbnailImage.width, "height": thumbnailImage.height, "data-astro-cid-dohjnao5": true })} </div> <div class="details" data-astro-cid-dohjnao5> <span class="category" data-astro-cid-dohjnao5>${lookupOrganizationCategoryName(category)}</span> <span class="name" data-astro-cid-dohjnao5>${name}</span> <p class="description" data-astro-cid-dohjnao5>${short_description}</p> </div> </a> <div class="like" data-astro-cid-dohjnao5> ${renderComponent($$result, "Heart", $$Heart, { "id": id, "data-astro-cid-dohjnao5": true })} </div> </article> `;
}, "/home/raspi0124/WS/shinkan2026/src/components/Card.astro", void 0);

class RandXor {
  x;
  y;
  z;
  w;
  constructor(seed) {
    this.x = 123456789;
    this.y = 362436069;
    this.z = 521288629;
    this.w = seed;
  }
  next() {
    let t = this.x ^ this.x << 11;
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return this.w = this.w ^ this.w >>> 19 ^ (t ^ t >>> 8);
  }
}

const $$Astro = createAstro("https://shinkan-web.zdk.tsukuba.ac.jp");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const query = Astro2.url.searchParams.get("q") || "";
  const categories = Astro2.url.searchParams.getAll("c[]");
  const faves = Astro2.url.searchParams.get("f");
  const searchResults = Astro2.url.searchParams.get("results");
  const querySearchIds = searchResults ? searchResults.split(",").filter((id) => id.length > 0) : null;
  const favIds = (() => {
    if (faves) {
      console.log("[DEBUG] Processing favorites string of length:", faves.length);
      const favoriteGroups = [];
      for (let i = 0; i < faves.length; i++) {
        const charCode = "0" <= faves[i] && faves[i] <= "9" ? parseInt(faves[i]) : faves.charCodeAt(i) - 97 + 10;
        console.log(`[DEBUG] Processing char '${faves[i]}' at index ${i}, code: ${charCode}`);
        const binary = charCode.toString(2).padStart(5, "0");
        console.log(`[DEBUG] Binary representation: ${binary}`);
        favoriteGroups.push(...[...binary].reverse());
      }
      console.log("[DEBUG] Favorite groups array length:", favoriteGroups.length);
      const filteredIds = [];
      for (let i = 0; i < favoriteGroups.length; i++) {
        if (favoriteGroups[i] === "1") {
          filteredIds.push(i.toString());
        }
      }
      console.log("[DEBUG] Filtered IDs:", filteredIds);
      return filteredIds;
    } else {
      console.log("[DEBUG] No favorites string provided");
      return null;
    }
  })();
  const allOrgs = await getOrganizations();
  const fallbackShortDescription = (shortDescription, description) => {
    if (shortDescription.trim() !== "") return shortDescription;
    return description.replace(/\s+/g, " ").trim().slice(0, 50);
  };
  const textFiltered = query === "" || querySearchIds === null ? allOrgs : querySearchIds.flatMap((id) => {
    const org = allOrgs.find((candidate) => String(candidate.id) === id);
    return org ? [org] : [];
  });
  const orgs = textFiltered.filter((org) => {
    const matchesCategory = categories.length === 0 || categories.includes(org.attributes.type);
    const matchesFaves = !favIds || favIds.includes(String(org.id));
    return matchesCategory && matchesFaves;
  });
  if (query === "") {
    const today = new Date(Date.now() + ((/* @__PURE__ */ new Date()).getTimezoneOffset() + 540) * 60 * 1e3);
    const seed = today.getFullYear() * today.getMonth() + today.getDate() * (today.getHours() * 100 + today.getMinutes() > 1200 ? 7 : 13);
    const random = new RandXor(seed);
    orgs.sort(() => random.next() - random.next());
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", $$Search, { "text": query, "categories": categories, "faves": faves, "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <section${addAttribute([{ notfound: orgs.length === 0 }], "class:list")} data-astro-cid-j7pv25f6> ${orgs.length > 0 ? orgs.map((org) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "id": org.id, "name": org.attributes.name, "category": org.attributes.type, "short_description": fallbackShortDescription(
    org.attributes.short_description,
    org.attributes.description
  ), "thumbnail": {
    url: imageUrl(org.attributes.thumbnail.data.attributes.path),
    ...org.attributes.thumbnail.data.attributes
  }, "data-astro-cid-j7pv25f6": true })}`) : renderTemplate`<p data-astro-cid-j7pv25f6>該当する団体が見つかりませんでした</p>`} </section> </div> ` })} `;
}, "/home/raspi0124/WS/shinkan2026/src/pages/index.astro", void 0);

const $$file = "/home/raspi0124/WS/shinkan2026/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
