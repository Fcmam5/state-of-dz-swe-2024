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
    // counts[elm] = (counts[elm] || 0) + 1;
    elm.split(",").forEach((s) => {
      s = s.trim();
      if (s.length) {
        counts[s] = (counts[s] || 0) + 1;
      }
    });
  });

  const sortedCounts = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  console.log(sortedCounts);

  console.log("\n-----------");
  console.log("```mermaid");
  // console.log(toPieChart(sortedCounts));
  console.log(toXYChart(sortedCounts));
  // console.log(toMdTable(sortedCounts));

  console.log("```");
  console.log("\n-----------");

  console.log(
    "Total",
    Object.entries(sortedCounts).reduce((acc, e) => acc + e[1], 0)
  );
} catch (error) {
  console.error("Error reading the file:", error);
}

function toPieChart(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    // const percentage = `(${((v * 100) / 517).toFixed(2)}%)`;
    // console.log(k, percentage);
    return acc + `    "${k}" : ${v}\n`;
  }, "pie showData\n");
}

function toMdTable(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    // const percentage = `(${((v * 100) / 517).toFixed(2)}%)`;
    // console.log(k, percentage);

    return acc + `|${k}|${v}|\n`;
  }, "\n");
}

function toXYChart(obj) {
  const filtered = Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v > 0)
  );
  const chart = `xychart-beta horizontal
  x-axis ${JSON.stringify(Object.keys(filtered))}
  bar ${JSON.stringify(Object.values(filtered))}
`;

  return chart;
}
