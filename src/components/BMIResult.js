import {useState} from "react";
import "./BMIResult.scss"
export default function BMIResult() {
  const [bmi, setBmi] = useState(null)

  return (
    <div className="bmi-result">
      <h3 className="mb-16">Welcome!</h3>

      <p className="small-text">Enter your height and weight and you’ll see your BMI result here</p>
    </div>
  )
}