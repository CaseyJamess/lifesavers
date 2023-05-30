// Various functions that come in handy to 'Plug and Play' for Front-End Development using React/JS
// More additions coming soon & please feel free to add your own :) 

// Either have this file as a seperate JS file in your 'src' or 'public' folder & import function names for example
// import { formatLocalTime } from './Utility.JS';
// or pull the functions off as and when you need in other files

// Happy Coding! =)


// Luxon needed for accurate time measurement read about it here:
// https://moment.github.io/luxon/api-docs/index.html

import { DateTime } from 'luxon';



// Function used for getting accurate time utilizing Luxon
// Need a Unix timestamp https://www.unixtimestamp.com/  and the timezone offset - usually given in API requests
// Example offset is between 3600/7200 for France +1/2 hours GMT

export function formatLocalTime(unixTimestamp, offsetSeconds, format = "cccc HH:mm") {
    const dateTimeUtc = DateTime.fromMillis(unixTimestamp * 1000, { zone: 'utc' });
    const localDateTime = dateTimeUtc.setZone(offsetSeconds / 60);
    return localDateTime.toFormat(format);
  }
  
  // Toggle Function to change between metric & imperial units when clicking on a specified unit in the browser
  // Can be changed and utilized for many types of conversions
  // The 'units' and 'setUnits' parameters are the current units state and the state setter function, respectively.
  
  export const handleUnitsChange = (e, units, setUnits) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit === 'metric' ? 'imperial' : 'metric');
    }
  };
  

  // Following functions are utilised for parsing user inputs into html <inputs> 
  // Feel free to modify and tailor to your specific needs
  // Included is how they would use to trigger state changes with React


  // Function to handle search button click, .trim() removes any unnecessary whitespace
  // The 'input' parameter is the current input value, and the 'setQuery' parameter is the state setter function for the query.
  
  export const handleSearchClick = (input, setQuery) => {
    if (input.trim() !== '') {
      setQuery({ q: input });
    } else {
        return { error: 'error' };
    }
  };
  
  // Function to handle Enter key press in the input field
  // The 'event' parameter is the keydown event, 'name' is the current city value,
  // and 'setQuery' is the state setter function for the query.
  
  export const handleInputKeyDown = (event, input, setQuery) => {
    if (input.key === 'Enter' && city.trim() !== '') {
      setQuery({ q: input });
    } else {
      return { error: 'error' };
    }
  };
  
  // Function to handle input change, allows for spaces between word but only allows for letters to be inputted
  // Feel free to change regular expressions tailored to your needs
  // The 'e' parameter is the input change event, and 'setInput' is the state setter function for the input.
  
  export const handleNameChange = (e, input) => {
    const input = e.target.value;
  
    if (/^[a-zA-Z\s]+$/.test(input.trim())) {
      setInput(input);
    } else {
      setInput('');
    }
  };
  
