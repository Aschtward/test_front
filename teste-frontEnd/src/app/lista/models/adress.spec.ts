import { Adress } from './adress';

describe('Adress', () => {
  it('should create an instance', () => {
    expect(new Adress('tipo', 'cep' , 'estado', 'logradouro','municipio',
      'bairro', 'numero','complemento')).toBeTruthy();
  });
});
