// ============= Taille d’une chaîne ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

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
    console.log(`Le result est ${result}`);
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1, exact = false) => {
  const checked = exact ? ARG.length === length : ARG.length >= length;
  if (checked) {
    return true;
  }
  const msgError = exact ? `Merci de mettre ${length} argument(s)` : `Il vous faut au moins ${length} argument(s)`;
  console.error(msgError);
  return false;
};

// verrifie que l'argument est un numbre
const isValideArg = (arg) => {
  if (isNaN(parseInt(arg[0])) && isNaN(parseInt(arg[1]))) {
    console.error("Merci de rentrer que des nombre");
    return false;
  }

  if (parseInt(arg[0]) < 0) {
    console.error("L'exposant ne peux pas être négatif");
    return false;
  }

  return true;
};

puissance(ARG);
