import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IconComponent = () => {
  const notify = () =>
    toast.success("your registration was successful ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      //theme: "colored", //theme:"dark",
     
    });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer  />
    </div>
  );
};

export default IconComponent;
