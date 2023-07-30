import React from "react";
import Footer from "../components/common/footer";
import Nav from "../components/listing/nav";
import Form from "../components/listing/form";

const Listing = () =>{
    return (
      <>
        <div className=" h-screen bg-slate-900">
          <Nav />
            <Form />
        </div>
        <Footer />
      </>
    );
}

export default Listing;