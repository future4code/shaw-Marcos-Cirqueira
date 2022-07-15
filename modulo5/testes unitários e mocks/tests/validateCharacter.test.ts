import { validateCharater } from "../src/validateCharacter"
import { Character } from "../src/Character"

// Exercicio 2
// a)
describe("teste que verifique o comportamento da função com um personagem com o nome vazio", () => {
	test("Deve retornar false para nome vazio", () => {
		const result = validateCharater({
			name: "",
			life: 1500,
			strength: 300,
			defense: 300
		})

		expect(result).toBe(false)
	})
})

// b)
describe("teste que verifique o comportamento da função com um personagem com a vida igual a zero", () => {
	test("Deve retornar false para vida vazia", () => {
		const result = validateCharater({
			name: "Goku",
			life: 0,
			strength: 300,
			defense: 300
		})

		expect(result).toBe(false)
	})
})

// c)
describe("teste que verifique o comportamento da função com um personagem com a força igual a zero", () => {
	test("Deve retornar false se a força for igual a 0", () => {
		const result = validateCharater({
			name: "Goku",
			life: 1500,
			strength: 0,
			defense: 300
		})

		expect(result).toBe(false)
	})
})

// d)
describe("teste que verifique o comportamento da função com um personagem com a defesa igual a zero", () => {
	test("Deve retornar false se a defesa for igual a 0", () => {
		const result = validateCharater({
			name: "Goku",
			life: 1500,
			strength: 500,
			defense: 0
		})

		expect(result).toBe(false)
	})
})

// e)
describe("teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
	test("Deve retornar false se a vida, força ou defesa forem negativos", () => {
		const result = validateCharater({
			name: "Goku",
			life: -1500,
			strength: -500,
			defense: -300
		})

		expect(result).toBe(false)
	})
})

// f)
describe("teste que verifique o comportamento da função com um personagem com as informações validas", () => {
	test("Deve retornar true para todas as entradas válidas", () => {
		const result = validateCharater({
			name: "Goku",
			life: 1500,
			strength: 500,
			defense: 300
		})

		expect(result).toBe(true)
	})
})