import { View, Text } from "react-native";
import React from "react";

const CompanyData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Company Name: ESS Model Town
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Total Employees = 50
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Products: Software House{" "}
      </Text>
    </View>
  );
};

export default CompanyData;
