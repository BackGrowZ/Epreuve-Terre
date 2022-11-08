// ============= Afficheur d’arguments ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

// donne la suite de l'aphabet
const showArg = (args) => {
  if (haveArg(2)) {
    args.forEach((arg) => console.log(arg));
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1) => {
  if (ARG.length >= length) {
    return true;
  }
  console.log("error:Il vous faut au moins 2 arguments");
  return false;
};

showArg(ARG);
