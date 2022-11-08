// ============= 24 to 12 ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

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
    console.log(msgResult);
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1, exact = false) => {
  const checked = exact ? ARG.length === length : ARG.length >= length;
  if (checked) {
    return true;
  }
  const msgError = exact ? `error:Merci de mettre ${length} argument(s)` : `error:Il vous faut au moins ${length} argument(s)`;
  console.log(msgError);
  return false;
};

// verrifie que l'argument est un numbre
const isValideArg = (arg) => {
  // je verrifie que l'argument est bien un string et qu'il contient bien un ":"
  if (typeof arg[0] !== "string" || !arg[0].includes(":")) {
    console.log("error:Merci de rentrer une heure au format hh:mm");
    return false;
  }

  return true;
};

convert24to12(ARG);
