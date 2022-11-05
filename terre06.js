// ============= Inverser une chaîne ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

// donne la suite de l'aphabet
const reverse = (arg) => {
  if (haveArg(1, true) && isValideArg(arg)) {
    let result = "";
    const phrase = arg[0];
    for (let i = phrase.length - 1; i >= 0; i--) {
      result += phrase[i];
    }
    console.log(result);
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

// verrifie que l'argument est une chaine de caratere
const isValideArg = (arg) => {
  if (!isNaN(parseInt(arg))) {
    console.error("Merci de rentrer une chaine de caractere");
    return false;
  }

  return true;
};

reverse(ARG);
