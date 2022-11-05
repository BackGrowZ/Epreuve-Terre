// ============= 24 to 12 ============= \\

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

const convert24to12 = (arg) => {
  if (haveArg(1, true) && isValideArg(arg)) {
    const nbr = arg[0];
    const nbrSplit = nbr.split(":");
    const heure = nbrSplit[0];
    const minute = nbrSplit[1];
    const heure12 = heure > 12 ? heure - 12 : heure;
    const heure12Str = heure12 < 10 ? `0${heure12}` : heure12;
    const end = heure > 12 ? "PM" : "AM";
    const msgResult = `${heure12Str}:${minute}${end}`;
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
  // je verrifie que l'argument est bien un string et qu'il contient bien un ":"
  if (typeof arg[0] !== "string" || !arg[0].includes(":")) {
    returnError("Merci de rentrer une heure au format hh:mm");
    return false;
  }

  return true;
};

convert24to12(ARG);