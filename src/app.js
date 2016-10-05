import SearchForm from './components/form.js';

let searchForm = new SearchForm();
document.body.innerHTML = searchForm.render();

let searchButton = document.getElementById('searchBtn');
searchButton.onclick = ()=> {
  require.ensure(['./data'], (require)=> {
    let searchField = document.getElementsByName('search');
    let value = searchField[0].value;
    let Data = require('./data');
    new Data().getData(value);
  })
};