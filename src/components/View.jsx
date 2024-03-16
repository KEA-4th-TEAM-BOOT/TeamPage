import React from "react";

import Banner from './Banner';
import Main from './Main';
import Member from "./Member";
import Footer from "./Foot";


const View = () => {

    return (
        <>
            <Banner />
            <Main>
                <Member />
            </Main>
            <Footer />
        </>
    );


}

export default View;