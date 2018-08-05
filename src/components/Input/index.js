import styled from 'styled-components';

export default styled.input`
  width: calc(100% - 4vh - 2px);
  padding: 1.3vh 2vh;
  font-size: 2vh;
  background-color: #fff;
  background-image: none;
  border: 1px solid;
  border-color: ${props => (props.hasError ? 'red' : '#ccc')};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-property: border-color, box-shadow;
  transition-duration: 0.15s, 0.15s;
  transition-timing-function: ease-in-out, ease-in-out;
  transition-delay: initial, initial;

  :focus {
    border-color: ${props => (props.hasError ? 'red' : '#66afe9')};
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;
