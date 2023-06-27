import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Text } from 'react-native';
import { FlatList } from 'react-native';
import { USER } from '../../DATA/usuario';



const TelaTeste = () => {
  const dataJSON = USER.historico
  const data = Object.values(dataJSON)
  console.log(data)
  const renderItem = ({ item }) => (
    <Text>{item.valor}</Text>
  );
  return (<>
    <Text>{`${data}`}</Text>
    <FlatList
      data={data}
      renderItem={renderItem}
      />
    </>
  );
};

export default TelaTeste;