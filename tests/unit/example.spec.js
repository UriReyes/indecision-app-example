describe('Example Component', () => {

  test('Debe de ser mayor a 10', () => {

    // Arreglar
    const value = 5;

    //Estímulo
    value = value + 2;

    //Observar el resultado
    if (value > 0) {
      //TODO: todo bien

    } else {
      throw `${value} no es mayor a 10`;
    }
  })

});