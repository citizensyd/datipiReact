import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datipi-react/jquery.datetimepicker.full.min.js';

const DateTimePicker = ({ targetId, options }) => {
  useEffect(() => {
    
    $(`#${targetId}`).datetimepicker(options);

  }, [targetId, options]);

  return <input id={targetId} type="text" />;
};

export default DateTimePicker;

/* // Importez jQuery si ce n'est pas déjà fait
import $ from 'jquery';

// Importez les fichiers CSS et JavaScript de jQuery DateTimePicker
import './jquery.datetimepicker.css';
import './jquery.datetimepicker.full.min.js';

// Créez une fonction d'initialisation pour le DateTimePicker
const initDateTimePicker = (element, options) => {
  // Utilisez jQuery pour sélectionner l'élément
  const $element = $(element);

  // Appliquez le DateTimePicker en utilisant les options spécifiées
  $element.datetimepicker(options);
};

// Exportez la fonction d'initialisation pour qu'elle puisse être utilisée par d'autres
export { initDateTimePicker }; */

