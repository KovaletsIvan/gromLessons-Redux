import React from "react";
import { connect } from "react-redux";
import { getWeathetData } from "./wheather.actions";

const Wheather = ({ whetherData, getWeathetData }) => {
  if (whetherData.length == 0) {
    getWeathetData();
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
    whetherData: state.wheather.citiesList,
  };
};
const mapDispatch = {
  getWeathetData: getWeathetData,
};
export default connect(mapState, mapDispatch)(Wheather);
