function capitalize(word) {
    word.toString();
    let secondHalf = word.slice(1);
    let firstLetter = word.charAt(0).toUpperCase();
    return firstLetter.concat("", secondHalf)
}
module.exports = capitalize;
