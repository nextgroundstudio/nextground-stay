// Liste « page × langue » utilisée pour générer les pages légales (voir src/legal.njk).
import langs from "./langs.js";

const keys = ["legal", "privacy", "terms"];
export default keys.flatMap((key) => langs.map((lang) => ({ key, lang })));
