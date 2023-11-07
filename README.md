# modalReact

modalReact is a JavaScript library that provides a React-friendly wrapper for the jQuery [Modal](https://www.jquerymodal.com/).

---

## Required

## Installation

You can install modalReact using npm or yarn:

```bash
npm install modal-react --save
```
or
```bash
yarn add modal-react
```

---

## Usage

### To use modalReact in your React project, follow these steps:

Import the DateTimePicker component at the top of your JavaScript/TypeScript file:
```javascript
import Modal from 'modal-react';
```
Use useEffect to call initDateTimePicker with the target DOM element and any options you wish to pass to the DateTimePicker, and return a cleanup function to call destroyDateTimePicker when the component unmounts.
```javascript
  /**
   * A hook that initializes DateTimePickers when the component mounts
   * and destroys them when the component unmounts.
   */
  useEffect(() => {
    modalReact.initDateTimePicker(
      '#date-of-birth',
      {
        format: 'Y-m-d'
      },
      setDateOfBirth);

    modalReact.initDateTimePicker(
      '#start-date',
      {
        format: 'Y-m-d'
      },
      setStartDate);

    return () => {
      modalReact.destroyDateTimePicker('#date-of-birth');
      modalReact.destroyDateTimePicker('#start-date');
    };
  }, []);

```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.
