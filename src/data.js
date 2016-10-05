import Results from './results';

class Data {

  constructor(){
    this.KEY = '4f434f30b5914ed3848816519ea7f33a';
    this.URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  }

  createRequest(value) {
    let url = `${this.URL}?api-key=${this.KEY}`;
    if (value) {
      return `${url}&q=${value}`
    }
    return url;
  }

  getData(value) {
    let req = this.createRequest(value);
    fetch(req)
      .then(res => res.json())
      .then(json => {
        document.body.innerHTML = new Results(json.response.docs).render();
      })
      .catch(err => console.error(err));
  }
}

module.exports = Data;