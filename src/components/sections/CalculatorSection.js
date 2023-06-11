import "./CalculatorSection.scss"
import RadioButton from "../RadioButton";
export default function CalculatorSection() {
  return (
    <section className="calculator-section">
      <div className="section-gradient"></div>
      <div className="calculator-wrapper">
        <img src="./images/logo.svg" alt="logo" className="logo" />
        <div className="calculator-text-wrapper">
          <h1>Body Mass Index Calculator</h1>
          <RadioButton />
          <p className="medium-text">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </div>
      </div>
    </section>
  )
}