const axios = require("axios");
const getShowById = (query) => {
  axios.get(`http://api.tvmaze.com/search/shows?q=${query}`).then((res) => {
  });
}
const getShowsByTitle = (query) => {
	axios.get(`http://api.tvmaze.com/search/shows?q=${query}`).then((res) => {
		res.data.map(info => {
		})
		
	});
};
getShowsByTitle("office");
