import React from "react";
import Head from "next/head";

const HeadComponent = (props = {}) => {
    return (
        <>
            <Head>
                <title>{props?.title?? 'Welcome'}</title>
            </Head>
        </>
    )
}

export default HeadComponent;