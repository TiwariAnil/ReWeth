var axios = require('axios');
var fetch = require('whatwg-fetch');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5da2f4fc43fc7b9ebfb0b0b27a171a0e';

module.exports = {
  getTemp: function (location) {

    var url = 'http://35.154.41.72:8888/api/GetSelectMerchants'
    function deal() {
      axios.post(url).then(function(res){
        if(res){
          console.log(res);
          // return res;
        }
      }, function (res) {
        console.log(res);
        // throw new Error(res.data.message);
      });
    }

    deal();
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    return axios.post(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
