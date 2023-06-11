import "./RadioButton.scss";
import {useState} from "react";

import classNames from "classnames";

export default function RadioButton({emitClicked}) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    if (!active) {
      setActive(true)
      emitClicked()
    }
  }

  return (
    <div
      onClick={() => setActive(!active)}
      className={
      classNames("radio-button", {
        "active": active
      })}
    ></div>
  )
}