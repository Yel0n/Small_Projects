import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";
import "./style.scss";



$(document).ready(() => {
    const bitCalc = new BinaryCalculator(".binary-calculator");
})

$(document).ready(() => {
    const decCalc = new DecCalculator(".dec-calculator");
})
