// ============= Racine carrée d’un nombre ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

const racine = (arg) => {
  // Source : https://youtu.be/K0GcXgnoA-w?t=1643
  if (haveArg(1, true) && isValideArg(arg)) {
    const racineFound = arg[0];
    const margeError = 0.0001;
    let result = racineFound;
    while (result - racineFound / result > margeError) {
      result = (result + racineFound / result) / 2;
    }
    console.log(`Le result est ${result.toFixed(3)} avec 3 chiffre apres la virgule`);
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
  if (isNaN(parseInt(arg[0])) && isNaN(parseInt(arg[1]))) {
    console.log("error:Merci de rentrer que des nombre");
    return false;
  }

  if (parseInt(arg[0]) <= 1) {
    console.log("error:Je sais seulement chercher la racine d'un nombre superieur a 1");
    return false;
  }

  return true;
};

racine(ARG);
