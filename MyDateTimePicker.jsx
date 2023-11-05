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
  // ... other default options
};

/**
 * Initializes the DateTimePicker on a specified element.
 *
 * @param {string|Object} element - The DOM element or a jQuery selector string to initialize the DateTimePicker on.
 * @param {Object} [options] - An object of options to customize the DateTimePicker.
 */
const initDateTimePicker = (element, options) => {
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
