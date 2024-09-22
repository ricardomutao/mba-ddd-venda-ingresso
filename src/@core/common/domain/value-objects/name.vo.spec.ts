import { Name } from "./name.vo";


test('deve criar um nome valido', () => {
    const name = new Name('Batata');
    expect(name.value).toBe('Batata');


});