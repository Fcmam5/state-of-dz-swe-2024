import { readFileSync } from "fs";

const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide the file name as a command-line argument.");
  process.exit(1);
}

try {
  const counts = {};
  const data = readFileSync(fileName, "utf8");
  const lines = data.split("\n").filter((line) => line.trim() !== "");

  lines.forEach((elm) => {
    const [size, method] = elm.split(",,");
    if (counts[size]) {
      counts[size][method] = (counts[size][method] || 0) + 1;
    } else {
      counts[size] = {
        [method]: 0,
      };
    }
  });

  console.log(counts);
  Object.entries(counts).forEach(([size, stats]) => {
    const sorted = Object.entries(stats)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    const howManyElmsItHas = Object.values(sorted).reduce((acc, v) => acc + v);

    console.log("```mermaid");
    console.log(size);
    console.log(toPieChart(sorted, howManyElmsItHas));

    console.log("```");
    console.log("\n-----------");
  });

  console.log("```");
  console.log("\n-----------");
} catch (error) {
  console.error("Error reading the file:", error);
}

function toPieChart(obj, total) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const percentage = `(${((v * 100) / total).toFixed(2)}%)`;
    console.log(k, percentage);
    return acc + `    "${k}" : ${v}\n`;
  }, "pie\n");
}
