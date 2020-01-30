"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react.default.createElement("p", null, "Hello");
};

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('root'));
/*import Log from './log';
import Calc from './calc';
import img from './React.jpeg'

const calc = new Calc();
const log = new Log();

log.log(calc.add(1,2,3))

const el = document.createElement('img')
el.src = img;
document.body.appendChild(el)*/