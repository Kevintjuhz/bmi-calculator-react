import RadioButton from "./reusable/RadioButton";
import {useState} from "react";
import "./BMICalculator.scss"
import UnitSelector from "./UnitSelector";
import BMIResult from "./BMIResult";
import BMIValues from "./BMIValues";

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric')
  const emitUnit = (unit) => {
    setUnit(unit)
  }

  return (
    <div className="bmi-calculator">
      <h3 className="bold-text mb-32">Enter your details below</h3>
      <UnitSelector emitUnit={emitUnit} className="mb-32" />
      <BMIValues unit={unit} className="mb-32"/>
      <BMIResult />
    </div>
  )
}