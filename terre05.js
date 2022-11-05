// ============= Divisions ============= \\

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
const division = (arg) => {
  if (haveArg(2, true) && isValideArg(arg)) {
    const dividende = parseInt(arg[0]);
    const diviseur = parseInt(arg[1]);
    const reste = dividende % diviseur;
    const quotient = (dividende - reste) / diviseur;
    returnResult(`resultat: ${quotient}`);
    returnResult(`reste: ${reste}`);
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

// verrifie que l'argument est un nombre
const isValideArg = (arg) => {
  const dividende = parseInt(arg[0]);
  const diviseur = parseInt(arg[1]);

  if (isNaN(dividende) || isNaN(diviseur)) {
    returnError("Seul des nombres sont autoriser");
    return false;
  }

  if (dividende < diviseur) {
    returnError("Le dividende doit etre superieur au diviseur");
    return false;
  }

  if (diviseur === 0) {
    returnError("Il est pas possbile de diviser par 0");
    return false;
  }

  return true;
};

division(ARG);
