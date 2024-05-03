import csv from "csvtojson";
import { writeFileSync } from "fs";

async function readFilesForForALanguage(lang) {
  return csv({
    noheader: false,
  }).fromFile(`./datasets/${lang}.csv`);
}

async function writeJson(jsonObj, lang) {
  writeFileSync(
    `./datasets/json-outputs/${lang}.json`,
    JSON.stringify(jsonObj),
    "utf-8"
  );

  return jsonObj;
}

export async function loadFilesAndWriteAsJSON() {
  const supportedLanguages = ["en", "ar", "fr"];
  const dataByLanguages = (
    await Promise.all(supportedLanguages.map(readFilesForForALanguage))
  ).reduce((acc, dt, idx) => {
    return { ...acc, [supportedLanguages[idx]]: dt };
  }, {});

  // Because JSON is always nicer to read
  Object.entries(dataByLanguages).forEach(([k, v]) => writeJson(v, k));

  return dataByLanguages;
}
