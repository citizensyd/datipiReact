"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Modal component that can be opened or closed based on the `isOpen` prop.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @returns {JSX.Element} The Modal component.
 */
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: isOpen ? ModalStyles.Open : ModalStyles.Close
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onClose
  }, "\xD7"), children);
};
var _default = exports["default"] = Modal;
