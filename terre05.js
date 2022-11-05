// ============= Divisions ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

// donne la suite de l'aphabet
const division = (arg) => {
  if (haveArg(2, true) && isValideArg(arg)) {
    const dividende = parseInt(arg[0]);
    const diviseur = parseInt(arg[1]);
    const reste = dividende % diviseur;
    const quotient = (dividende - reste) / diviseur;
    console.log(`resultat: ${quotient}`);
    console.log(`reste: ${reste}`);
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

// verrifie que l'argument est un nombre
const isValideArg = (arg) => {
  const dividende = parseInt(arg[0]);
  const diviseur = parseInt(arg[1]);

  if (isNaN(dividende) || isNaN(diviseur)) {
    console.error("Seul des nombres sont autoriser");
    return false;
  }

  if (dividende < diviseur) {
    console.error("Le dividende doit etre superieur au diviseur");
    return false;
  }

  if (diviseur === 0) {
    console.error("Il est pas possbile de diviser par 0");
    return false;
  }

  return true;
};

division(ARG);
