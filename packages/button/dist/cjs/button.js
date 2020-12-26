"use strict";

exports.__esModule = true;
exports["default"] = Button;

var _react = _interopRequireDefault(require("react"));

var _twin = _interopRequireDefault(require("twin.macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["px-8 py-3 rounded bg-black text-white text-center"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var BtnStyle = _twin["default"].button(_templateObject());

function Button(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(BtnStyle, {
    type: type,
    onClick: onClick
  }, children);
}
//# sourceMappingURL=button.js.map