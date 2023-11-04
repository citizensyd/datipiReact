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
import DateTimePicker from 'datipi-react';
Use the DateTimePicker component in your JSX code:
function MyComponent() {
  return (
    <div>
      <h1>Select a Date and Time:</h1>
      <DateTimePicker />
    </div>
  );
}
```

### Customize the DateTimePicker by passing options as props:

```javascript
function MyComponent() {
  const dateTimePickerOptions = {
    format: 'Y-m-d',
    datepicker: true,
  };

  return (
    <div>
      <h1>Select a Date and Time:</h1>
      <DateTimePicker options={dateTimePickerOptions} />
    </div>
  );
}
```

### Handle the selected date using state and event handling:
```javascript
import React, { useState } from 'react';
import DateTimePicker from 'datipi-react';

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Select a Date:</h1>
      <DateTimePicker onChange={handleDateChange} />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
}
export default MyComponent;
```
---
## Options

You can customize the behavior of the DateTimePicker by passing options as props to the DateTimePicker component. Refer to the jQuery DateTimePicker documentation for available options.
```javascript
const dateTimePickerOptions = {
  format: 'Y-m-d',
  datepicker: true,
};

<DateTimePicker options={dateTimePickerOptions} />
```
---
## License

This library is licensed under the MIT License. See the LICENSE file for details.
