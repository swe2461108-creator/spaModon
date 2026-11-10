import { translations } from "./translations.js";

const DEFAULT_LANGUAGE = "mn";

export function getCurrentLanguage() {
  return localStorage.getItem("language") || DEFAULT_LANGUAGE;
}

export function setLanguage(language) {
  localStorage.setItem("language", language);
}

export function t(path) {
  const language = getCurrentLanguage();
  const keys = path.split(".");
  let value = translations[language];
  for (const key of keys) {
    value = value?.[key];
  }
  return value ?? path;
}

export function toggleLanguage() {
  const current = getCurrentLanguage();
  let next = "mn";

  if (current === "mn") {
    next = "en";
  } else if (current === "en") {
    next = "ko";
  } else {
    next = "mn";
  }

  setLanguage(next);
  return next;
}