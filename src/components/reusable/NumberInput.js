import "./NumberInput.scss"

export default function NumberInput({text, placeholder, label, value, onChange, className}) {
  return (
    <div className={`number-input ${className}`}>
      <label className="small-text" htmlFor={label}>{label}</label>
      <br/>
      <div className="input-wrapper">
        <input
          type="number"
          id={label}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength="3"
          size="3"
          className="text-24"
        />
        <span className="text-24 bold-text">{text}</span>
      </div>
    </div>
  )
}