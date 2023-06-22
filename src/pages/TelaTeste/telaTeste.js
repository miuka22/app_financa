import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Text } from 'react-native';


const TelaTeste = () => {
  const [selected, setSelected] = useState('');

  return (<>
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      />
      <Text>aqui? {selected}</Text>
      </>
  );
};

export default TelaTeste;