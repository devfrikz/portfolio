import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return normalized;
  return `/${lang}${normalized}`.replace(/\/+$/, "") || `/${lang}`;
}

export function getAltLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

export function switchLangPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  const cleanPath = currentPath.replace(new RegExp(`^/${currentLang}(/|$)`), "/");
  return getLocalizedPath(cleanPath === "/" ? "/" : cleanPath, targetLang);
}
