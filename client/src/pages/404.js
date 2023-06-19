import React from "react";
import { Helmet } from "react-helmet";


const error404 = () =>{
    return(
        <>
        <Helmet>
            <title>
                404
            </title>
        </Helmet>
        <h1>LUND</h1>
        </>
    );
}

export default error404;