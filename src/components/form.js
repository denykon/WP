class Form {
  constructor() {
  }

  render() {
    return `
    <h1 class="header">Please enter a search parameters</h1>
      <section id="searchForm">
          <label>Search:</label>
          <input type="text" name="search" title="Search"><br>
          <button id="searchBtn">Show more</button>
      </section>
    `;
  }
}

export default Form;