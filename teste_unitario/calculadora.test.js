const {somar, subtrair, multiplicar, dividir } = require("./calculadora");

describe("somar", () => {
    test("soma dois números positivos", () => {
        expect(somar(10, 5)).toBe(15);
    });

    test("soma dois números negativos", () => {
        expect(somar(-10, -5)).toBe(-15);
    });

    test("soma um número positivo e um negativo", () => {
        expect(somar(10, -5)).toBe(5);
    });

    test("soma um número negativo e um positivo", () => {
        expect(somar(-10, 5)).toBe(-5);
    });

    test("soma com zero", () => {
        expect(somar(10, 0)).toBe(10);
    });
});

describe("subtrair", () => {
    test("subtrai dois números positivos", () => {
        expect(subtrair(10, 5)).toBe(5);
    });

    test("subtrai dois números negativos", () => {
        expect(subtrair(-10, -5)).toBe(-5);
    });

    test("subtrai um número negativo de um positivo", () => {
        expect(subtrair(10, -5)).toBe(15);
    });

    test("subtrai um número positivo de um negativo", () => {
        expect(subtrair(-10, 5)).toBe(-15);
    });
    
});
describe("multiplicar", () => {
  test("multiplica dois números", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("qualquer número vezes zero é zero", () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
});

describe("dividir", () => {
  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("lança erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});