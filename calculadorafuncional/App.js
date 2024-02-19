import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Buttons from './components/Buttons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles/styles';
import Screen from './components/Screen';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState("");

  const show = (num) => {
    const newVal = value + num;
    setValue(newVal);
  };

  const deleteAll = () => {
    setValue("");
  };

  const deleteByOne = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  const result = () => {
    const newValue = eval(value);
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  const porcentage = () => {
    const newValue = (parseFloat(value)) / 100;
    if (isNaN(newValue)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(newValue.toString());
    }
  };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Screen value={value} />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Buttons
            value={"AC"}
            colorText={"white"}
            color={"#747477"} size={60} fun={() => deleteAll()} />
          <Buttons
            value={"<-"}
            fun={() => deleteByOne()}
            colorText={"white"}
            color={"#747477"} size={60}
            icon={<FontAwesome6 name="delete-left" size={25} color="white" />} />
          <Buttons
            value={"%"}
            colorText={"white"}
            color={"#747477"} size={60} fun={() => porcentage()} />
          <Buttons
            value={"/"}
            fun={() => show("/")}
            colorText={"white"}
            color={"#4B5EFC"} size={60} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"7"} color={"white"} size={60} fun={() => show("7")} />
          <Buttons value={"8"} color={"white"} size={60} fun={() => show("8")} />
          <Buttons value={"9"} color={"white"} size={60} fun={() => show("9")} />
          <Buttons
            value={"x"}
            fun={() => show("*")}
            colorText={"white"}
            color={"#4B5EFC"} size={60} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"4"} color={"white"} size={60} fun={() => show("4")} />
          <Buttons value={"5"} color={"white"} size={60} fun={() => show("5")} />
          <Buttons value={"6"} color={"white"} size={60} fun={() => show("6")} />
          <Buttons
            value={"-"}
            fun={() => show("-")}
            colorText={"white"}
            color={"#4B5EFC"} size={60} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"1"} color={"white"} size={60} fun={() => show("1")} />
          <Buttons value={"2"} color={"white"} size={60} fun={() => show("2")} />
          <Buttons value={"3"} color={"white"} size={60} fun={() => show("3")} />
          <Buttons
            value={"+"}
            colorText={"white"}
            color={"#4B5EFC"} size={60} fun={() => show("+")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"0"} color={"white"} size={100} fun={() => show("0")} />
          <Buttons value={"."} color={"white"} size={60} fun={() => show(".")} />
          <Buttons
            value={"="}
            colorText={"white"}
            color={"#4B5EFC"} size={60} fun={() => result()} />
        </View>

      </View>

    </View>
  );
}
