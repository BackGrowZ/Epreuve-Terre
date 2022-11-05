// ============= Nom du programme ============= \\
const path = require("path");

const getCurrentFileName = () => {
  const currentFileName = path.basename(__filename);
  return currentFileName;
};

console.log(getCurrentFileName());
