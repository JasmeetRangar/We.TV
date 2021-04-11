const axios = require("axios");
const getShowById = (query) => {
  axios.get(`http://omdbapi.com/?apikey=e19c5b47&i=${query}`).then((res) => {
    console.log(res.data);
  });
}
const getShowsByTitle = (query) => {
	axios.get(`http://omdbapi.com/?apikey=e19c5b47&s=${query}`).then((res) => {
		console.log(res.data.Search[0].imdbID);
		const result = res.data.Search[0].imdbID;
		getShowById(result);
	});
};
getShowsByTitle("office");
