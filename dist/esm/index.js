import o from"react";import e from"styled-components";const n=e.div`
  display: ${o=>o.isModalOpen?"block":"none"};
  span {
    cursor: pointer;
  }
`;n.shouldForwardProp=o=>"isModalOpen"!==o;const l=({isModalOpen:e,onClose:l,children:r})=>(console.log(e),o.createElement(n,{isModalOpen:e},o.createElement("span",{onClick:l},"×"),r));export{l as Modal};
//# sourceMappingURL=index.js.map
