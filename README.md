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
Use useEffect to call initDateTimePicker with the target DOM element and any options you wish to pass to the DateTimePicker.
```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    datipiReact.initDateTimePicker('#my-element', {
      format: 'Y-m-d',
    });
  }, []);

  return (
    <div>
      <h1>Select a Date and Time:</h1>
      <input id="my-element" type="text" />
    </div>
  );
}
```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.
