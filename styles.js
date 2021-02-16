import {
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  _ScrollView,
} from "react-native";
import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : "24px"};
  background-color: white;
`;

export const BackGround = styled.ImageBackground`
  flex: 1;
  background-color: red;
  resize-mode: cover;
  align-items: center;
`;
export const List = styled.ScrollView`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.View`
  background-color: dodgerblue;
  width: 100%;
  height: ${({ rotated }) => (rotated ? "100%" : "30%")};
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Input = styled.TextInput`
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.09);
`;

export const InputItem = styled.TextInput`
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.09);
`;

export const Button = styled.TouchableOpacity`
  background-color: red;
  height: 30px;
  width: 120px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
