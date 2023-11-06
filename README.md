# datipiReact

datipiReact is a JavaScript library that provides a React-friendly wrapper for the jQuery [DateTimePicker](https://github.com/xdan/datetimepicker).

---

## Installation

You can install datipiReact using npm or yarn:

```bash
npm install datipi-react --save
```
or
```bash
yarn add datipi-react
```

---

## Usage

### To use datipiReact in your React project, follow these steps:

Import the DateTimePicker component at the top of your JavaScript/TypeScript file:
```javascript
import * as datipiReact from 'datipi-react';
```
Use useEffect to call initDateTimePicker with the target DOM element and any options you wish to pass to the DateTimePicker, and return a cleanup function to call destroyDateTimePicker when the component unmounts.
```javascript
  /**
   * A hook that initializes DateTimePickers when the component mounts
   * and destroys them when the component unmounts.
   */
  useEffect(() => {
    datipiReact.initDateTimePicker(
      '#date-of-birth',
      {
        format: 'Y-m-d'
      },
      setDateOfBirth);

    datipiReact.initDateTimePicker(
      '#start-date',
      {
        format: 'Y-m-d'
      },
      setStartDate);

    return () => {
      datipiReact.destroyDateTimePicker('#date-of-birth');
      datipiReact.destroyDateTimePicker('#start-date');
    };
  }, []);

```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.
