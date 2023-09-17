// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  width: 80vw;
  order: 0;

  @media screen and (min-width: 768px) {
    width: 45vw;
  }
`

export const MainHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #35469c;
  font-family: 'Open Sans';

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const LabelElement = styled(MainHeading)`
  font-size: 12px;
  color: #7e858e;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const InputElement = styled(MainHeading)`
  font-size: 14px;
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const SelectElement = styled.select`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const OptionElement = styled(MainHeading)`
  color: #5a7184;
  font-weight: 400;
  font-size: 14px;
`
export const ButtonElement = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin: 20px;
    height: 500px;
  }
`

export const CustomText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
`
