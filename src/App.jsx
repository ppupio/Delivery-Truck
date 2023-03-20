import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </>
  );
}

export default App;
