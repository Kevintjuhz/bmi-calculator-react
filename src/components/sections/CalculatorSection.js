import "./CalculatorSection.scss"
import BMICalculator from "../BMICalculator";
export default function CalculatorSection() {

  return (
    <section className="calculator-section">
      <div className="section-gradient"></div>
      <div className="calculator-wrapper">
        <img src="./images/logo.svg" alt="logo" className="logo" />
        <div className="section-flex">
          <div className="calculator-text-wrapper">
            <h1>Body Mass <br/> Index Calculator</h1>
            <p className="medium-text calculator-p">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
          </div>
          <BMICalculator />
        </div>
      </div>
    </section>
  )
}