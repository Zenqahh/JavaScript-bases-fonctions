//1. Créez une variable appelée `nom` et affectez-lui la valeur "John".
let nom = "john";

//2. Affichez la valeur de la variable `nom` dans la console en utilisant la fonction console.log().
console.log(nom);

//3. Modifiez la valeur de la variable `nom` pour qu'elle soit "Jane" sans modifier le code précédent.
nom = "Jane";

//4. Affichez à nouveau la valeur de la variable nom dans la console.
console.log(nom);

//1. Créez une boucle for qui s'arrête si l'index dépasse 10, le resultat de la boucle doit correspondre aux nombres de 1 à 10 inclus (attention le premier nombre affiché doit être le 1 et non le 0).
for (i = 1; i < 11; i++);
//2. Dans la boucle, utilisez la fonction console.log() pour afficher chaque nombre du tableau.
console.log(i);

//1. Utilisez la fonction console.log() pour afficher le message "Bonjour tout le monde!" dans la console.
console.log("Bonjour tout le monde!");
//2. Utilisez la fonction console.log() pour afficher le résultat de l'expression mathématique "3 + 4" dans la console.
console.log(3 + 4);
//3. Utilisez la fonction console.log() pour afficher la valeur de la variable `nom`, qui contient la chaîne de caractères du premier exercice.
console.log(nom);

//1. Définissez une variable appelée `firstName` et affectez-lui la valeur "John".
let firstName = "John";
//2. Définissez une variable appelée `lastNAme` et affectez-lui la valeur "Doe".
let lastNAme = "Doe";
//3. Utilisez la concaténation de chaînes de caractères pour créer une nouvelle chaîne de caractères qui contient le prénom et le nom séparés par un espace. Par exemple, si prenom vaut "John" et nom vaut "Doe", la chaîne de caractères créée devrait être "John Doe".
let fullName = `${firstName} ${lastNAme}`;
//4. Affichez la chaîne de caractères créée dans la console en utilisant la fonction console.log().
console.log(fullName);

//1. Définissez une variable appelée `age` et affectez-lui la valeur de votre âge.
let age = 19;
//2. Utilisez une conditionnelle if pour vérifier si l'âge est supérieur ou égal à 18. Si c'est le cas, utilisez la fonction console.log() pour afficher le message "Vous êtes majeur". Sinon, utilisez la fonction console.log() pour afficher le message "Vous êtes mineur".
if (age >= 18) {
    console.log("Vous êtes majeur")
}
else {
    console.log("Vous êtes mineur")
}

//1. Créez un tableau appelé `couleurs` qui contient les éléments suivants : "rouge", "vert", "bleu", "jaune", "orange".
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"]
//2. Utilisez une boucle for pour parcourir le tableau couleurs et afficher chaque élément dans la console en utilisant la fonction console.log().
for (i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i])
}

//1. Créez un tableau appelé `numbers` qui contient les nombres suivants : 1, 2, 3, 4, 5.
let numbers = ["1", "2", "3", "4", "5"]
//2. Utilisez la méthode push() pour ajouter le nombre 6 au tableau numbers.
numbers.push
//3. Utilisez la méthode pop() pour retirer le dernier élément du tableau numbers.
numbers.pop
//4. Affichez le contenu du tableau numbers dans la console en utilisant la fonction console.log().
console.log(numbers)

//1. Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair, `false` sinon. Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.
function pair(n) {
    if (n % 2 == 0)
        console.log(true)
}
//2. Écrivez une fonction qui prend en argument un tableau d'entiers et renvoie la somme de tous les éléments du tableau. Vous pouvez utiliser une boucle `for` pour parcourir le tableau et ajouter chaque élément à une variable qui tiendra la somme.
function somme(numbers) {
    let somme = numbers
    return somme;
}

console.log(somme([1, 2, 3, 4, 5, 6]))

//3. Écrivez une fonction qui prend en argument une chaîne de caractères et renvoie la chaîne de caractères inversée. Par exemple, si la chaîne passée en argument est "bonjour", la fonction doit renvoyer "ruojnob". Vous pouvez utiliser la méthode `split()` pour séparer la chaîne en un tableau de caractères, la méthode `reverse()` pour inverser l'ordre des éléments du tableau, et la méthode `join()` pour reconstruire la chaîne de caractères à partir du tableau inversé.
function reverse(str) {
    return str.split("").reverse().join("") 

}
console.log(reverse("Bonjour"))