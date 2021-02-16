import React, { useState } from "react";

import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import {
  SafeContainer,
  Container,
  List,
  Text,
  BackGround,
  Input,
  InputItem,
  Button,
} from "./styles";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());
  const stats = StatusBar.currentHeight;
  const device = Platform.OS;
  const wallPaper = require("./assets/bgone.jpg");
  const [message, setMessage] = useState("");
  const [item, setItem] = useState("");
  const [listItems, setListItems] = useState([]);

  // O listener onChangeText do inputText no react envia automáticamente o texto para a callback
  // Ao usar event listeners não use parenteses para invocação. Isso faz com que a função seja chamada no render, sem os parenteses
  //ela é chamada apenas quando o listener é ativado
  const handleMessage = (currentText) => {
    setMessage(currentText);
  };

  const displayMessage = () => {
    console.log(message);
  };

  const handleNewItem = (item) => {
    setItem(item);
  };

  const handleItemList = () => {
    // quando vc for alterar um estado baseado em um estado prévio vc deve utilizar o setState funcional que leva como parametro o estado prévio
    //No caso de arrays e objetos, deve ser feito o destructuring para que as propriedades já existentes não sejam sobrepostas por um novo estado
    setListItems((listItems) => [...listItems, item]);
  };

  return (
    <SafeContainer>
      <BackGround source={wallPaper}>
        <Container rotated={useDeviceOrientation().landscape}>
          <Text>Open up App.js to start working on your app!</Text>
        </Container>

        <Input
          style={{ marginTop: 12 }}
          placeholder="digite um texto"
          placeholderTextColor="#FFF"
          value={message}
          onChangeText={handleMessage}
        />
        <Button onPress={displayMessage}>
          <Text>Salvar</Text>
        </Button>
        <InputItem
          style={{ marginTop: 15 }}
          placeholder="novo item"
          placeholderTextColor="#FFF"
          onChangeText={handleNewItem}
        />
        <Button onPress={handleItemList}>
          <Text>Adicionar</Text>
        </Button>
        <List contentContainerStyle={{ alignItems: "center" }}>
          {listItems.map((currentItem) => {
            return <Text key={currentItem + Math.random()}>{currentItem}</Text>;
          })}
        </List>
      </BackGround>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
