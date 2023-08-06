import React from "react";
import Footer from "../components/common/footer";
import Nav from "../components/listing/nav";
import Form from "../components/listing/form";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Listing = () =>{
  const history = useHistory();
  // if (localStorage.getItem("ResponseToken") == null){
  //   history.push("/home")
  //   alert("you need to be logged in to list a property")
  // }
    return (
      <>
        <Helmet>
          <title>List</title>
        </Helmet>
        <div className=" h-auto bg-slate-900">
          <Nav />
          <Form />
        </div>
        <Footer />
      </>
    );
}

export default Listing;