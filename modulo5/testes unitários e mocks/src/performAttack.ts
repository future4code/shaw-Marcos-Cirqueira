import { Character } from "./Character";
import { validateCharater } from "./validateCharacter";

// Exercicio 3

// a)
export const performaAttack = (attacker: Character, defender: Character) => {

    if (!validateCharater(attacker) || !validateCharater(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}

// b)
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};