import RadioButton from "./reusable/RadioButton";
import {useState} from "react";
import "./UnitSelector.scss"
import classNames from "classnames";

export default function UnitSelector({emitUnit, className}) {
  const [unit, setUnit] = useState({ metric: true, imperial: false })

  const onChangeUnit = (e) => {
    const { name } = e.target
    emitUnit(name)
    if (name === 'imperial') {
      setUnit({ metric: false, imperial: true })
    }
    if (name === 'metric') {
      setUnit({ metric: true, imperial: false })
    }
  }

  return (
    <div className={classNames("select-unit", className)}>
      <div>
        <RadioButton
          name="metric"
          id="metric"
          value="Metric"
          onChange={onChangeUnit}
          checked={unit.metric}
        />
        <label htmlFor="metric" className="bold-text unit-label">Metric</label>
      </div>

      <div>
        <RadioButton
          name="imperial"
          id="imperial"
          value="Imperial"
          onChange={onChangeUnit}
          checked={unit.imperial}
        />
        <label htmlFor="imperial" className="bold-text unit-label">Imperial</label>
      </div>
    </div>
  )
}