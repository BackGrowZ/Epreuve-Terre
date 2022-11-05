// ============= Taille d’une chaîne ============= \\

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
const puissance = (arg) => {
  if (haveArg(2, true) && isValideArg(arg)) {
    const exposant = parseInt(arg[0]);
    const puissance = parseInt(arg[1]);
    let count = 1;
    let result = exposant;
    while (count < puissance) {
      result = result * exposant;
      count++;
    }
    returnResult(`Le result est ${result}`);
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1, exact = false) => {
  const checked = exact ? ARG.length === length : ARG.length >= length;
  if (checked) {
    return true;
  }
  const msgError = exact ? `Merci de mettre ${length} argument(s)` : `Il vous faut au moins ${length} argument(s)`;
  returnError(msgError);
  return false;
};

// verrifie que l'argument est un numbre
const isValideArg = (arg) => {
  if (isNaN(parseInt(arg[0])) && isNaN(parseInt(arg[1]))) {
    returnError("Merci de rentrer que des nombre");
    return false;
  }

  if (parseInt(arg[0]) < 0) {
    returnError("L'exposant ne peux pas être négatif");
    return false;
  }

  return true;
};

puissance(ARG);
