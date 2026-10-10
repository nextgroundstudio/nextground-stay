// Configuration Eleventy (générateur de site statique).
// Doc : https://www.11ty.dev/docs/
import path from "node:path";
import fs from "node:fs";
import Image from "@11ty/eleventy-img";
import site from "./src/_data/site.js";

// Valeurs disponibles dans les textes sous la forme {nom} (voir le filtre « fill »).
const placeholders = {
  company: site.company,
  email: site.contact.email,
  phone: site.contact.phone,
  size: site.stay.sizeM2,
  guests: site.stay.maxGuests,
  checkIn: site.stay.checkIn,
  checkOut: site.stay.checkOut,
  cleaning: site.stay.cleaningEveryDays,
  reduced: site.stay.reducedRateFromNights,
  long: site.stay.longStayFromNights,
};

export default function (eleventyConfig) {
  // Fichiers copiés tels quels dans le site final.
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });

  // Remplace {nom} par sa valeur. Accepte des valeurs supplémentaires : {{ texte | fill({ rating: "5.0" }) }}
  eleventyConfig.addFilter("fill", (text, extra = {}) =>
    String(text).replace(/\{(\w+)\}/g, (m, key) => (key in extra ? extra[key] : key in placeholders ? placeholders[key] : m))
  );

  // Choisit la version d'un libellé selon la langue : { en: "...", fr: "..." } ou simple chaîne.
  eleventyConfig.addFilter("loc", (value, lang) => (value && typeof value === "object" ? value[lang] : value));

  // Formate un prix : 9000 + "KES" -> "KSh 9,000" (séparateurs selon la langue).
  eleventyConfig.addFilter("money", (amount, currency, locale) => {
    const n = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount);
    const s = site.currencySymbols[currency];
    return currency === "EUR" && locale.startsWith("fr") ? `${n} €` : `${s}${n}`;
  });

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));

  // Année courante (pied de page).
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  // Date ISO -> date lisible dans la langue de la page.
  eleventyConfig.addFilter("readableDate", (iso, locale) =>
    new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(iso))
  );

  // Photo responsive (formats webp + jpeg, plusieurs tailles), générée au moment du build.
  // Si le fichier n'existe pas encore, affiche un emplacement neutre avec la description.
  eleventyConfig.addShortcode("photo", async function (file, alt, sizes = "100vw", eager = false) {
    const src = path.join("src/assets/photos", file || "");
    if (!file || !fs.existsSync(src)) {
      return `<div class="photo photo--empty" role="img" aria-label="${alt}"><span>${alt}</span></div>`;
    }
    const meta = await Image(src, {
      widths: [480, 960, 1440, 2000],
      formats: ["webp", "jpeg"],
      outputDir: "_site/assets/photos/",
      urlPath: "/assets/photos/",
    });
    return Image.generateHTML(meta, {
      alt,
      sizes,
      class: "photo",
      loading: eager ? "eager" : "lazy",
      decoding: "async",
      ...(eager ? { fetchpriority: "high" } : {}),
    });
  });

  // Photo d'accueil avec « direction artistique » : une photo paysage sur ordinateur,
  // une photo verticale différente sur mobile (balise <picture> avec media query).
  eleventyConfig.addShortcode("heroPhoto", async function (desktopFile, mobileFile, alt) {
    const opts = { formats: ["webp", "jpeg"], outputDir: "_site/assets/photos/", urlPath: "/assets/photos/" };
    const desk = await Image(path.join("src/assets/photos", desktopFile), { ...opts, widths: [960, 1440, 2000] });
    const mob = await Image(path.join("src/assets/photos", mobileFile), { ...opts, widths: [480, 960] });
    const srcset = (meta, fmt) => meta[fmt].map((i) => i.srcset).join(", ");
    const fallback = desk.jpeg[desk.jpeg.length - 1];
    return `<picture>
      <source media="(max-width: 759px)" type="image/webp" srcset="${srcset(mob, "webp")}" sizes="100vw">
      <source media="(max-width: 759px)" type="image/jpeg" srcset="${srcset(mob, "jpeg")}" sizes="100vw">
      <source type="image/webp" srcset="${srcset(desk, "webp")}" sizes="(min-width: 1320px) 1272px, 100vw">
      <img class="photo" src="${fallback.url}" width="${fallback.width}" height="${fallback.height}" alt="${alt}" fetchpriority="high" decoding="async">
    </picture>`;
  });

  // Grande photo de la galerie : la photo du séjour sur ordinateur ; sur mobile, où cette photo
  // sert déjà d'accueil, la vue d'ensemble en paysage (pas de doublon en haut de page).
  eleventyConfig.addShortcode("galleryPhoto", async function (desktopFile, mobileFile, alt) {
    const opts = { formats: ["webp", "jpeg"], outputDir: "_site/assets/photos/", urlPath: "/assets/photos/", widths: [480, 960, 1440] };
    const desk = await Image(path.join("src/assets/photos", desktopFile), opts);
    const mob = await Image(path.join("src/assets/photos", mobileFile), opts);
    const srcset = (meta, fmt) => meta[fmt].map((i) => i.srcset).join(", ");
    const fallback = desk.jpeg[1] || desk.jpeg[0];
    return `<picture>
      <source media="(max-width: 759px)" type="image/webp" srcset="${srcset(mob, "webp")}" sizes="100vw">
      <source media="(max-width: 759px)" type="image/jpeg" srcset="${srcset(mob, "jpeg")}" sizes="100vw">
      <source type="image/webp" srcset="${srcset(desk, "webp")}" sizes="60vw">
      <img class="photo" src="${fallback.url}" width="${fallback.width}" height="${fallback.height}" alt="${alt}" loading="lazy" decoding="async">
    </picture>`;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
