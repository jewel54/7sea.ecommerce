import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import { Link } from "react-router-dom";
// import ShopLogin from "../components/Shop/ShopLogin";
// import { Navigate } from "react-router-dom";
// import ShopLoginPage from "./ShopLoginPage";



const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
          <>
          <p>Your shop has been created successfully! Redirecting to login...</p>
          <Link to="/Shop-login" className="text-blue-600 pl-2">
            Login
          </Link>
          </>
        
      )}
    </div>
  );
};

export default SellerActivationPage;
