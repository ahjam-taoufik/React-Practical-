import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Component = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        //showTimeSelect
          dateFormat='dd/MM/yyyy'
          isClearable
         //minDate={new Date}
          // maxDate={new Date}
          //filterDate={date =>date.getDate()!=6}
          //filterDate={date =>date.getDay()!=6 && date.getDay()!=0}  
          showYearDropdown
          scrollableYearDropdown
          // showYearPicker

      />
    </div>
  );
};

export default Component;
