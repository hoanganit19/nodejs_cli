#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const argv = yargs(hideBin(process.argv)).argv;
const [type, name] = argv._;

if (type === "make:controller") {
  try {
    fs.readFileSync("controllers/" + name + ".js");
    console.log("Controller đã tồn tại");
  } catch (e) {
    const template = fs.readFileSync("bin/templates/controller.tpl");

    fs.writeFileSync("controllers/" + name + ".js", template, { flag: "w+" });
    console.log("Tạo Controller thành công");
  }
}
