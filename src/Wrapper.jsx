import { ToastContainer } from "react-toastify";

const Wrapper = ({ App }) => {
  return (
    <>
      {App}
      <ToastContainer position="top-center" />
    </>
  );
};

export default Wrapper;