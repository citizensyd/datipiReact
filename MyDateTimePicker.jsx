// Import jQuery if not already done
import $ from 'jquery';

// Import CSS and JavaScript files for jQuery DateTimePicker
import './jquery.datetimepicker.css';
import './jquery.datetimepicker.full.min.js';

/**
 * Default options for DateTimePicker.
 * @type {Object}
 */
const defaultOptions = {
  format: 'Y-m-d',
  datepicker: true,
  timepicker: false
  // ... other default options
};

/**
 * Initializes the DateTimePicker on a specified element and associates it with a state update function.
 *
 * @param {string|Object} element - The DOM element or a jQuery selector string to initialize the DateTimePicker on.
 * @param {Object} [options] - An object of options to customize the DateTimePicker.
 * @param {Function} setStateFunction - The state update function to set the selected date.
 */
const initDateTimePicker = (element, options, setStateFunction) => {
  // Use jQuery to select the element
  const $element = $(element);

  // Check if the element exists
  if (!$element.length) {
    console.error(`Element not found: ${element}`);
    return;
  }

  // Merge the default options with the provided options
  const finalOptions = { ...defaultOptions, ...options };

  // Try to initialize the DateTimePicker and catch any errors
  try {
    $element.datetimepicker(finalOptions);

    // Attach an event listener to handle date changes and update the state
    $element.on('change', function () {
      const selectedDate = $element.val();
      setStateFunction(selectedDate);
    });
  } catch (error) {
    console.error('Failed to initialize DateTimePicker:', error);
  }
};

/**
 * Destroys the DateTimePicker on a specified element.
 *
 * @param {string|Object} element - The DOM element or a jQuery selector string to destroy the DateTimePicker on.
 */
const destroyDateTimePicker = (element) => {
  const $element = $(element);
  
  // Try to destroy the DateTimePicker and catch any errors
  try {
    $element.datetimepicker('destroy');
  } catch (error) {
    console.error('Failed to destroy DateTimePicker:', error);
  }
};


// Export the initialization and cleanup functions for use elsewhere
export { initDateTimePicker, destroyDateTimePicker };
