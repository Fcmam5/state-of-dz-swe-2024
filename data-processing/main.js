import { loadFilesAndWriteAsJSON } from "./pipelines/load-csv.js";
import { mapQuestionsAndTranslations } from "./pipelines/translate-questions.js";

(async () => {
  const dataByLanguages = await loadFilesAndWriteAsJSON();
  mapQuestionsAndTranslations(dataByLanguages);
})();
