import ErrorComponent from "../components/ErrorComponent";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";

export const Patient = () => {
  const url = "http://localhost:8080/";
  const clinicUrl = "patient";

  const { data, error, isLoaded } = useFetch(`${url}${clinicUrl}`);

  if (error) {
    return (
      <div>
        {SweetAlert.messageError(error)}
        <ErrorComponent />
      </div>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <Header />
        <h2>Welcome to my dental clinic</h2>
        <h3>Our patients...</h3>
        {data.map((pat) => (
          <li key={pat.id}>{pat.lastName}</li>
        ))}
        <Footer />
      </>
    );
  }
};
