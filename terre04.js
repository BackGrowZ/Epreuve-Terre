// ============= Pair ou impair ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

// donne la suite de l'aphabet
const isPair = (arg) => {
  if (haveArg(1, true) && isValideArg(arg)) {
    const num = arg[0];
    const modulo = num % 2 === 0;
    const result = modulo ? "Pair" : "Impair";
    console.log(result);
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1, exact = false) => {
  const checked = exact ? ARG.length === length : ARG.length >= length;
  if (checked) {
    return true;
  }
  const msgError = exact ? `Merci de mettre ${length} argument(s)` : `il vous faut au moins ${length} argument(s)`;
  console.error(msgError);
  return false;
};

// verrifie que l'argument est un nombre
const isValideArg = (arg) => {
  if (!isNaN(arg)) {
    return true;
  }
  console.error("Seul les nombres sont accepter");
  return false;
};

isPair(ARG);
