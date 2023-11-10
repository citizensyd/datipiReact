# test-modal-for-me

test-modal-for-me is a JavaScript library that provides a React-friendly wrapper for the jQuery [Modal](https://www.jquerymodal.com/).

---

## Required

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

## Usage

### To use test-modal-for-me in your React project, follow these steps:

Import the Modal component at the top of your JavaScript/TypeScript file:
```javascript
import { Modal } from 'test-modal-for-me'
```
Use component with props
```javascript
<Modal isModalOpen={isModalOpen} onClose={closeModal}>
    <h2>Employee Created!</h2>
    <button onClick={closeModal}>Close Modal</button>
</Modal>
```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.