// ============= Nombre premier ============= \\

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

const isNumPremier = (arg) => {
  // source : https://waytolearnx.com/2019/09/fonction-pour-verifier-si-un-nombre-est-premier-en-javascript.html
  if (haveArg(1, true) && isValideArg(arg)) {
    const nbr = arg[0];
    let result = true;
    for (var i = 2; i < nbr; i++) {
      if (nbr % i === 0) {
        result = false;
      }
    }
    const msgResult = result ? `Oui ${nbr} est un nombre premier` : `Non ${nbr} n'est pas un nombre premier`;
    returnResult(msgResult);
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

isNumPremier(ARG);
