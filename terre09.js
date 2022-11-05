// ============= Racine carrée d’un nombre ============= \\

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

const racine = (arg) => {
  // Source : https://youtu.be/K0GcXgnoA-w?t=1643
  if (haveArg(1, true) && isValideArg(arg)) {
    const racineFound = arg[0];
    const margeError = 0.0001;
    let result = racineFound;
    while (result - racineFound / result > margeError) {
      result = (result + racineFound / result) / 2;
    }
    returnResult(`Le result est ${result.toFixed(3)} avec 3 chiffre apres la virgule`);
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

  if (parseInt(arg[0]) <= 1) {
    returnError("Je sais seulement chercher la racine d'un nombre superieur a 1");
    return false;
  }

  return true;
};

racine(ARG);
