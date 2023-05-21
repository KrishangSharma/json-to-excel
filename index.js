const xlsx = require("xlsx");
const fs = require("fs");
const jsonData = require("./test.json");
// const file = xlsx.readFile("example.xlsx");

const xlsxFile = xlsx.readFile("example.xlsx");
const sheet = xlsxFile.Sheets[xlsxFile.SheetNames[0]];
const P_Json = xlsx.utils.sheet_to_json(sheet);
console.log(P_Json);

//* Excel to JSON and save JSON file
// const sheet = file.Sheets[file.SheetNames[0]];
// const json = xlsx.utils.sheet_to_json(sheet, { header: 1 });
// const fileData = JSON.stringify(json);
// console.log(json);
// fs.writeFileSync("output.json", fileData);

//* JSON to excel and save file
// const excelFile = xlsx.utils.json_to_sheet(jsonData);
// const result = xlsx.utils.book_new();
// xlsx.utils.book_append_sheet(result, excelFile, "Sheet_1");
// xlsx.writeFile(result, "index.xlsx");
