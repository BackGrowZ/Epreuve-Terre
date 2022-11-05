// ============= Pair ou impair ============= \\

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
const isPair = (arg) => {
  if (haveArg(1, true) && isValideArg(arg)) {
    const num = arg[0];
    const modulo = num % 2 === 0;
    const result = modulo ? "Pair" : "Impair";
    returnResult(result);
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1, exact = false) => {
  const checked = exact ? ARG.length === length : ARG.length >= length;
  if (checked) {
    return true;
  }
  const msgError = exact ? `Merci de mettre ${length} argument(s)` : `il vous faut au moins ${length} argument(s)`;
  returnError(msgError);
  return false;
};

// verrifie que l'argument est un nombre
const isValideArg = (arg) => {
  if (!isNaN(arg)) {
    return true;
  }
  returnError("Seul les nombres sont accepter");
  return false;
};

isPair(ARG);
