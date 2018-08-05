import styled from 'styled-components';

export default styled.button`
  border: 1px solid transparent;
  padding: 1vh 1.8vh;
  font-size: 2.5vh;
  border-radius: 0.6vh;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  ${props =>
    props.disabled
      ? 'opacity: 0.65;'
      : `:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;`};
`;
