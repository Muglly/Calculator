import styled from 'styled-components/native';

export const AllBtn = styled.View`
  flex-direction: column;
  background-color: #353535;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const SingContainer = styled.View`
  flex-direction: column-reverse;
`;

export const NumContainer = styled.View`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 75%;
`;

export const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  background-color: #7676;
  margin-bottom: 10px;
`;

export const BtnTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px 5px 20px;
`;

export const BtnTop = styled(Btn)`
  width: 48%;
  height: 40px;
`;

export const BtnText = styled.Text`
  font-family: Regular;
  font-size: 25px;
  color: #ddd;
`;

export const TextSing = styled(BtnText)`
  color: #fd873d;
`;

export const Dot = styled(BtnText)`
  position: relative;
  bottom: 5px;
`;

export const TextC = styled(BtnText)`
  color: red;
`;

export const BtnR = styled(BtnTop)`
  background-color: #007676;
`;

export const Zero = styled(Btn)`
  width: 60%;
`;
