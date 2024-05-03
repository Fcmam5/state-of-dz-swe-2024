import { writeFileSync } from "fs";

function generateQuestionsMap(dataByLanguages) {
  const myMap = Object.keys(dataByLanguages).reduce((acc, lg) => {
    return { ...acc, [lg]: Object.keys(dataByLanguages[lg][0]) };
  }, {});

  // because I'm lazy, and you know.. JSON is nicer to read
  writeFileSync(
    `./datasets/json-outputs/question-maps/question-map-by-language.json`,
    JSON.stringify(myMap),
    "utf-8"
  );

  return myMap;
}

/**
 * Get translated questions
 * @param {*} questionByLanguageMap
 * @param {string} targetLang {en, fr, ar}
 * @returns translated question
 */
function mapQuestionsForLanguage(questionByLanguageMap, targetLang) {
  return questionByLanguageMap.en.map((q, idx) => ({
    [questionByLanguageMap[targetLang][idx]]: q,
  }));
}

export function mapQuestionsAndTranslations(dataByLanguages) {
  const qmp = generateQuestionsMap(dataByLanguages);

  const mappedFrQuestions = mapQuestionsForLanguage(qmp, "fr");
  const mappedArQuestions = mapQuestionsForLanguage(qmp, "ar");

  writeFileSync(
    `./datasets/json-outputs/question-maps/ar.json`,
    JSON.stringify(mappedArQuestions),
    "utf-8"
  );

  writeFileSync(
    `./datasets/json-outputs/question-maps/fr.json`,
    JSON.stringify(mappedFrQuestions),
    "utf-8"
  );

  return {
    fr: mappedFrQuestions,
    ar: mappedArQuestions,
  };
}
