import { Character } from "../src/Character";
import { performAttack } from "../src/performAttack"


// Exercicio 4 e Exercicio 5
// 5 - a
describe("Teste com dois personagens com valores válidos", () => {
    test("Deve realizar o ataque", () => {

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            strength: 600,
            defense: 200
        }

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 400,
        };

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attacker, defender, validatorMock as any)

        expect(defender.life).toEqual(1300);

        // } catch (err: any) {
        //     expect(err.message).toContain("Missing Properties")
        //     expect(defender.life).toEqual(1300);
        //     expect(validatorMock).toHaveBeenCalled();
        //     expect(validatorMock).toHaveBeenCalledTimes(2);
        //     expect(validatorMock).toHaveReturnedTimes(2);
        // } finally {
        //     expect.assertions(1)
        // }
    })

    test("Deve retornar um erro de caractere inválido", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
        try {
            const attacker: Character = {
                name: "",
                life: 1500,
                strength: 600,
                defense: 200
            }

            const defender: Character = {
                name: "Kitana",
                life: 1500,
                strength: 800,
                defense: 400
            };


            performAttack(attacker, defender, validatorMock as any)



        } catch (err: any) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        } finally {
            expect.assertions(4)
        }
    })
})

// 5 - b

// B)
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    });
});

// C)
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    });
});