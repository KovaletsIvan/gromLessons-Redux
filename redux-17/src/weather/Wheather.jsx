import React from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./wheather.actions";
import { wheatherDataSelector } from "./wheater.selectors";

const Weather = ({ whetherData, getWeatherData }) => {
  if (whetherData.length == 0) {
    getWeatherData();
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {whetherData.map((citie) => (
          <li key={citie.id} className="city">
            <span className="city__name">{citie.name}</span>
            <span className="city__temperature">{`${citie.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    whetherData: wheatherDataSelector(state),
  };
};
const mapDispatch = {
  getWeatherData: getWeatherData,
};
export default connect(mapState, mapDispatch)(Weather);
