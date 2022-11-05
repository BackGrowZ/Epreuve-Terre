// ============= Nom du programme ============= \\

const getCurrentFileName = () => {
  const path = process.argv[1].split('\\')
  return path[path.length - 1]
};

console.log(getCurrentFileName());
