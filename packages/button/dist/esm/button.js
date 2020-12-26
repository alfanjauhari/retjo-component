function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["px-8 py-3 rounded bg-black text-white text-center"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import tw from 'twin.macro';
var BtnStyle = tw.button(_templateObject());
export default function Button(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(BtnStyle, {
    type: type,
    onClick: onClick
  }, children);
}
//# sourceMappingURL=button.js.map