# test-modal-for-me
---
## Description

The Modal component is a reusable component for displaying content in a modal window. It is flexible and can display any child content passed to it. It is a JavaScript library that provides a React-friendly wrapper for the jQuery [Modal](https://www.jquerymodal.com/).

---

## Required

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ react 18.2.0`

`- ℹ️ react-dom": 18.2.0`

`- ℹ️ styled-components 6.1.1`

---


## Installation

You can install test-modal-for-me using npm or yarn:

```bash
npm install modal-react --save
```
or
```bash
yarn add modal-react
```

---


## To use test-modal-for-me in your React project, follow these steps:

### Presentation of the component with props

This component takes three props:

- isModalOpen (boolean): Determines whether the modal is open or closed.
- onClose (function): A callback function that is called when the modal needs to be closed.
- children (React.ReactNode): The content to be displayed inside the modal.
```javascript
const Modal = ({ isModalOpen, onClose, children }) => {
    return (
        <ModalStyles isModalOpen={isModalOpen}>
        <span onClick={onClose}>
          &times;
        </span>
        {children}
      </ModalStyles>
    );
  };
```
---
### Usage

Import the Modal component at the top of your JavaScript/TypeScript file:
```javascript
import { Modal } from 'test-modal-for-me'
```
Then, implement the Modal component in your application as shown below:
```javascript
<Modal isModalOpen={isModalOpen} onClose={closeModal}>
    <h2>Employee Created!</h2>
    <button onClick={closeModal}>Close Modal</button>
</Modal>
```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.