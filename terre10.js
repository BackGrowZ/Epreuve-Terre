// ============= Nombre premier ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

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

isNumPremier(ARG);
