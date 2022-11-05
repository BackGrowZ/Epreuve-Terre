// ============= Afficheur d’arguments ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

// Resultat en vert
const returnResult = (text) => {
  const COLOR_GREEN = "\x1b[32m";
  const COLOR_RESET = "\x1b[0m";
  console.log(COLOR_GREEN, text, COLOR_RESET);
};

// Error de couleur rouge
const returnError = (text = null) => {
  const COLOR_RED = "\x1b[31m";
  const COLOR_RESET = "\x1b[0m";
  const msg = typeof text === "string" ? text : "Error";
  console.error(COLOR_RED, msg, COLOR_RESET);
};

// donne la suite de l'aphabet
const showArg = (arguments) => {
  if (haveArg(2)) {
    arguments.forEach((argument) => returnResult(argument));
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1) => {
  if (ARG.length >= length) {
    return true;
  }
  returnError("Il vous faut au moins 2 arguments");
  return false;
};

showArg(ARG);
