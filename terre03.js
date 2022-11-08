// ============= L’alphabet à partir de ============= \\

// recuperer la liste des argument au quel on retire le "node" et le nom du fichier
const ARG = process.argv.slice(2);

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// donne la suite de l'aphabet
const getAlphabetAt = (letter) => {
  if (haveArg() && isValideArg(letter)) {
    const index = ALPHABET.indexOf(letter);
    const arrayResult = ALPHABET.slice(index);
    console.log(arrayResult.join(""));
  }
};

// verrifie le nombre d'argument
const haveArg = (length = 1) => {
  if (ARG.length >= length) {
    return true;
  }
  console.log("error:Merci de preciser la lettre de depart");
  return false;
};

// verrifie que l'argument est une lettre
const isValideArg = (letter) => {
  const argEnMinuscule = letter.toLowerCase();
  if (ALPHABET.includes(argEnMinuscule)) {
    return true;
  }
  console.log("error:Seul une lettre comprise entre A et Z est accepter");
  return false;
};

getAlphabetAt(ARG[0]);
