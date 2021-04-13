const axios = require("axios");
const getShowById = (query) => {
  axios.get(`http://api.tvmaze.com/search/shows?q=${query}`).then((res) => {
    console.log(res.data);
  });
}
const getShowsByTitle = (query) => {
	axios.get(`http://api.tvmaze.com/search/shows?q=${query}`).then((res) => {
		res.data.map(info => {
			console.log(info.show)
		})
		
	});
};
getShowsByTitle("office");
