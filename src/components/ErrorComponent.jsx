import { H2Style } from "../stylesComponents/BasicTagsStyle";
import errorImg from "../img/errorImg.jpg";
import { ErrorContainer } from "../stylesComponents/ErrorComponentStyle";

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <H2Style>
        Inconvenientes técnicos, no se puede acceder a la información
      </H2Style>
      <H2Style>Disculpen las molestias!</H2Style>
      <img src={errorImg} alt="Sad tooth, error image" />
    </ErrorContainer>
  );
};

export default ErrorComponent;
