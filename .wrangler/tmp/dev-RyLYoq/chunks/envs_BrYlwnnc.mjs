globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderScript, a as renderTemplate } from './astro/server_CMB8L6JC.mjs';
import { b as $$Icon, C as CONTACTS_INFO_ICON, D as DISPLAY_CONTACTS_INFO } from './Layout_DYw_2TMg.mjs';
/* empty css                         */

const $$Astro = createAstro("https://shinkan-web.zdk.tsukuba.ac.jp");
const $$Heart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heart;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="heart" aria-label="お気に入りに登録する" aria-pressed="false"${addAttribute(id, "data-group-id")} data-astro-cid-hch4wle3> ${renderComponent($$result, "Icon", $$Icon, { "class": "like-line", "name": "ri:heart-3-line", "aria-hidden": true, "data-astro-cid-hch4wle3": true })} ${renderComponent($$result, "Icon", $$Icon, { "class": "like-fill", "name": "ri:heart-3-fill", "aria-hidden": true, "data-astro-cid-hch4wle3": true })} <div class="effects" aria-hidden data-astro-cid-hch4wle3> <span class="bg-circle" data-astro-cid-hch4wle3></span> <span class="explosion" data-astro-cid-hch4wle3></span> </div> </button>  ${renderScript($$result, "/home/raspi0124/WS/shinkan2026/src/components/Heart.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/raspi0124/WS/shinkan2026/src/components/Heart.astro", void 0);

function lookupOrganizationCategoryName(orgType) {
  switch (orgType) {
    case "athletic_department":
      return "体育系";
    case "artistic_union":
      return "芸術系";
    case "cultural_federation":
      return "文化系";
    case "general":
      return "一般学生団体";
    case "others":
      return "その他";
    default:
      return "不明";
  }
}
function enumerateContactInfomations(org) {
  const ret = [];
  const attr = org.attributes;
  for (const [key, val] of Object.entries(attr)) {
    if (key.startsWith("contacts_") && val && typeof val === "string") {
      const name = key.slice(9);
      const value = val.trim();
      ret.push({
        name,
        value,
        displayName: DISPLAY_CONTACTS_INFO[name] || name,
        link: contactInfomationLink(name, value),
        icon: CONTACTS_INFO_ICON[name] || ""
      });
    }
  }
  return ret;
}
function contactInfomationLink(name, value) {
  return {
    website: !value.startsWith("http://") && !value.startsWith("https://") ? `http://${value}` : value,
    x: `https://twitter.com/${value.replace(/^@*/i, "")}`,
    instagram: `https://instagram.com/${value.replace(/^@*/i, "")}`,
    line: value,
    email: `mailto:${value}`
  }[name] || "#";
}

const staticDataUrl = process.env.STATIC_DATA_URL;
if (!staticDataUrl) {
  throw new Error("STATIC_DATA_URL is not defined in the environment variables.");
}
const imageUrl = (path) => `${staticDataUrl}/${path}`;

export { $$Heart as $, enumerateContactInfomations as e, imageUrl as i, lookupOrganizationCategoryName as l };
