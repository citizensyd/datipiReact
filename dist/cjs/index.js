"use strict";var e=require("react");const o=require("styled-components").div`
  display: ${e=>e.isModalOpen?"block":"none"};
  span {
    cursor: pointer;
  }
`;o.shouldForwardProp=e=>"isModalOpen"!==e;exports.Modal=({isModalOpen:n,onClose:r,children:s})=>(console.log(n),e.createElement(o,{isModalOpen:n},e.createElement("span",{onClick:r},"×"),s));
//# sourceMappingURL=index.js.map
