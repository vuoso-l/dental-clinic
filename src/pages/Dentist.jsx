import { PostDentist } from "../components/dentist/PostDentist";
import { ViewDentist } from "../components/dentist/ViewDentist";
import ErrorComponent from "../components/ErrorComponent";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";

export const Dentist = () => {
  const url = "http://localhost:8080/";
  const clinicUrl = "dentist";

  const { data, error, isLoaded } = useFetch(`${url}${clinicUrl}`);

  if (error) {
    return (
      <>
        {SweetAlert.messageError(error)}
        <ErrorComponent />
      </>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <Header />
        <ContainerStyle>
          <h2>Add a dentist</h2>
          <PostDentist />
          <h2>Our dentists...</h2>
          <ViewDentist data={data} />
        </ContainerStyle>
        <Footer />
      </>
    );
  }
};
