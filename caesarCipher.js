const caesarCipher = (plainText, shift) => {
    if (shift < 0) {
        shift = shift + 26;
    }

    let output = "";

    for (i = 0; i < plainText.length; i++) {
        //Get the character we'll be appending
        let character = plainText[i];

        //If it's a letter...
        if (character.match(/[a-z]/i)) {
            let code = plainText.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                character = String.fromCharCode(((code - 65 + shift) % 26 + 65));
            } else if (code >= 97 && code <= 122) {
                character = String.fromCharCode(((code - 97 + shift) % 26 + 97))
            }
        }

        output += character;
    }

    return output;
}

module.exports = caesarCipher;