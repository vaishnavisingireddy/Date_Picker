import React from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';

function ReactDatePicker(){

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) =>{
        setSelectedDate(date);
    };

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <h1>Date Picker</h1>
        <h4>Click on the search box to select a date</h4>
        <Datepicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        />
        {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}
        </div>
    )
}
export default ReactDatePicker;