import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import SpeedTeslaCounter from '../components/TeslaCounter/SpeedTeslaCounter';
import TempTeslaCounter from '../components/TeslaCounter/TempTeslaCounter';
import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import TeslaWheels from '../components/TeslaWheels/TeslaWheels';

const TeslaBattery = (props) => {
  // state
  const { wheelsValue,
    climateValue,
    temperatureLimit,
    speedValue,
    speedInitValue,
    temperatureValue,
    temperatureInitValue,
    carstats } = props;
  // dispatch
  const { speedIncrement,
    speedDecrement,
    tempIncrement,
    tempDecrement,
    handleChangeClimate,
    handleChangeWheel } = props;

  return (
    <form className="tesla-battery">
      <h1>Range Per Charge</h1>
      <TeslaCar wheelsize={wheelsValue} />
      <TeslaStats carstats={carstats} />
      <div className="tesla-controls cf">
        <SpeedTeslaCounter
          currentValue={speedValue}
          initValues={speedInitValue}
          speedIncrement={speedIncrement}
          speedDecrement={speedDecrement}
        />
        <div className="tesla-climate-container cf">
          <TempTeslaCounter
            currentValue={temperatureValue}
            initValues={temperatureInitValue}
            tempIncrement={tempIncrement}
            tempDecrement={tempDecrement}
          />
          <TeslaClimate
            value={climateValue}
            limit={temperatureLimit}
            handleChangeClimate={handleChangeClimate}
          />
        </div>
        <TeslaWheels
          value={wheelsValue}
          handleChangeWheels={handleChangeWheel}
        />
      </div>
      <TeslaNotice />
    </form>
  )
}

export default TeslaBattery;