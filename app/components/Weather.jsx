var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var axios = require('axios');

var Weather = React.createClass({

  getInitialState: function () {
    return{
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;
    // debugger;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },

  render: function () {
    var {isLoading, temp, location} = this.state;
    function renderWeather() {
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderWeather()}
      </div>
    )
  }
});

module.exports = Weather;
