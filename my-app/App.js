import { View, Text, Alert, Button } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Subhan");
  const [designation, setDesignation] = useState("");
  const [age, setAge] = useState("");
  cont [details, setDetails] = useState('')
  const Students = () => {
    setName("KhanmSubhan");
    setDesignation("Software Engineer");
    setAge("24");
    setDetails("Name: M Subhan Khan, Age: 24, Designation: Software Engineer at Expert System Solutions")
  };
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Events on Buttons
      </Text>
      <Text>{name}</Text>
      <Text>{designation}</Text>
      <Text>{age}</Text>
      <View
        style={{ width: 100, height: 50, alignSelf: "center", marginTop: 10 }}
      >
        <Button title="Press Here" color={"black"} onPress={Students} />
        <Button title="Press" onPress={() => Students()} />
        <Button title="Details" onPress={Students}/>
        <Text>{age}</Text>
      </View>
    </View>
  );
};

export default App;
