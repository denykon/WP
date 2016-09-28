let Data = require('../../app/data.js');

describe('data class',()=> {

  let data;

  beforeEach(()=> {
    data = new Data();
  });

  it('should initialize the data object', ()=> {
    expect(data.KEY).toBeDefined();
    expect(data.URL).toBeDefined();
  });

  it('should be called getData function', ()=> {
    spyOn(data, 'getData');
    data.getData();
    expect(data.getData).toHaveBeenCalled();
  });

  it('should be called createRequest function', ()=> {
    spyOn(data, 'createRequest');
    data.getData();
    expect(data.createRequest).toHaveBeenCalled();
  });

  it('should be called createRequest function with superman', ()=> {
    spyOn(data, 'createRequest');
    data.getData('superman');
    expect(data.createRequest).toHaveBeenCalledWith('superman');
  });




});
