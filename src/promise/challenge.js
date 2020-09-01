const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    let t = data.results.length;
    let random = Math.floor(Math.random() * t);
    return fetchData(`${API}${data.results[random].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(`${data.origin.url}`);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.error(err));
