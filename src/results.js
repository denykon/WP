class Results {
  constructor(data) {
    this.SITE_URL = 'http://www.nytimes.com/';
    this.data = data;
  }

  getImageUrl(item) {
    if(!item.multimedia.length) {
      return '';
    }
    let url = (item.multimedia)[1].url;
    if(url) {
      return `${this.SITE_URL}${url}`;
    }
    return '';
  }

  render() {
    return this.data.map((d) => {
      return `
        <li>
            <h3>${d.headline.main}</h3>
            <img src='${this.getImageUrl(d)}'>
            <div>${d.pub_date}</div>
            <div>${d.section_name}</div>
            <a href='${d.web_url}'>Read The Article</a>
        </li>`;
    }).join('');
  }
}

export default Results;