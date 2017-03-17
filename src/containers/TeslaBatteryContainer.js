import { connect } from 'react-redux';
import { speedUp, speedDown, temperatureUp, temperatureDown, changeClimate, changeWheel } from '../actions'
import { counterDefaultVal } from '../constants/counterDefaultVal';
import TeslaBattery from './TeslaBattery';
import './TeslaBattery.css';

const mapStateToProps = (state) => {
  return {
    wheelsValue: state.config.wheels,
    climateValue: state.config.climate,
    temperatureLimit: state.config.temperature > 10,
    speedValue: state.config.speed,
    speedInitValue: counterDefaultVal.speed,
    temperatureValue: state.config.temperature,
    temperatureInitValue: counterDefaultVal.temperature,
    carstats: state.carstats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    speedIncrement:(value) => {
      dispatch(speedUp(value))
    },
    speedDecrement:(value) => {
      dispatch(speedDown(value))
    },
    tempIncrement:(value) => {
      dispatch(temperatureUp(value))
    },
    tempDecrement:(value) => {
      dispatch(temperatureDown(value))
    },
    handleChangeClimate:() => {
      dispatch(changeClimate())
    },
    handleChangeWheel:(size) => {
      dispatch(changeWheel(size))
    }
  }
}

const TeslaBatteryContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaBattery)

export default TeslaBatteryContainer;