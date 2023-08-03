const AdmZip = require("adm-zip");

async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = "out.zip";
  zip.addLocalFolder("./out");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();