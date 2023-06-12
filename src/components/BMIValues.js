import "./BMIValues.scss"
import classNames from "classnames";
import NumberInput from "./reusable/NumberInput";
export default function BMIValues({unit, className}) {
  return (
    <>
      {unit === 'metric' && (
        <div className={classNames("input-values", className)}>
          <NumberInput
            label="Height"
            placeholder="0"
            text="cm"
          />
          <NumberInput
            label="Weight"
            placeholder="0"
            text="kg"
          />
        </div>
      )}
      {unit === 'imperial' && (
        <>
          <div className={classNames("input-values", className)}>
            <NumberInput
              label="Height"
              placeholder="0"
              text="ft"
            />
            <NumberInput
              placeholder="0"
              text="in"
            />
          </div>
          <div className={classNames("input-values", className)}>
            <NumberInput
              label="Weight"
              placeholder="0"
              text="st"
            />
            <NumberInput
              placeholder="0"
              text="lbs"
            />
          </div>
        </>
      )}
    </>
  )
}