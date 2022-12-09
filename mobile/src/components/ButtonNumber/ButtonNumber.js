import {
  AllBtn,
  Btn,
  BtnText,
  NumContainer,
  SingContainer,
  BtnTopContainer,
  BtnTop,
  Container,
  Dot,
  TextC,
  BtnR,
  TextSing,
  Zero,
} from './Styles';

export function ButtonNumber({ calculation }) {
  const number = [];

  for (let i = 1; i <= 9; i++) {
    number.push(i);
  }

  number.reverse();

  return (
    <AllBtn>
      <BtnTopContainer>
        <BtnTop onPress={() => calculation('c')}>
          <TextC>C</TextC>
        </BtnTop>

        <BtnR onPress={() => calculation('=')}>
          <BtnText>=</BtnText>
        </BtnR>
      </BtnTopContainer>
      <Container>
        <NumContainer>
          {number.map((num) => {
            return (
              <Btn key={num.toString()} onPress={() => calculation(num)}>
                <BtnText>{num}</BtnText>
              </Btn>
            );
          })}
          <Zero onPress={() => calculation(0)}>
            <BtnText>0</BtnText>
          </Zero>
          <Btn onPress={() => calculation('.')}>
            <Dot>.</Dot>
          </Btn>
        </NumContainer>
        <SingContainer>
          <Btn onPress={() => calculation('+')}>
            <TextSing>+</TextSing>
          </Btn>

          <Btn onPress={() => calculation('-')}>
            <TextSing>-</TextSing>
          </Btn>

          <Btn onPress={() => calculation('x')}>
            <TextSing>x</TextSing>
          </Btn>

          <Btn onPress={() => calculation('/')}>
            <TextSing>/</TextSing>
          </Btn>
        </SingContainer>
      </Container>
    </AllBtn>
  );
}
