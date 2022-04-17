import styled from "styled-components";

import { displayFlex } from "../styleAux/theme";

export const FormStyle = styled.div`
  ${displayFlex("flex", "column", "space-around", "center")};
  width: 100%;
  padding: 20px 0px;
  .field {
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0px;
  }
  .inputError {
    border: 2px solid red;
  }
  .textError {
    color: red;
  }
`;
