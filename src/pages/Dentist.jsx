import ErrorComponent from "../components/ErrorComponent";
import Loader from "../components/Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";

export const Dentist = () => {
  const url = "http://localhost:8080/";
  const clinicUrl = "dentist";

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
      <div>
        <h3>Our dentists...</h3>
        {data.map((dent) => (
          <li key={dent.id}>{dent.lastName}</li>
        ))}
      </div>
    );
  }
};
