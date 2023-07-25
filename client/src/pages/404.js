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
        
        </>
    );
}

export default error404;