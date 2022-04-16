import ErrorComponent from "../components/ErrorComponent";
import Loader from "../components/Loader";
import SweetAlert from "../helpers/SweetAlert";
import { useFetch } from "../hooks/useFetch";

export const Shift = () => {
  const url = "http://localhost:8080/";
  const clinicUrl = "dentistShift";

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
        <h2>Welcome to my dental clinic</h2>
        <h3>Our shifts...</h3>
        {data.map((shift) => (
          <li key={shift.dentist.id}>{shift.dentist.lastName}</li>
        ))}
      </div>
    );
  }
};
