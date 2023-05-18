import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/organizms/header";

export const MainPage = () => {
    return(
        <>
            <Header />
            <div className='App App--container'>
                <p style={{color: 'white'}}>
                    Welcome to Memorizer
                </p>
                <Link to='/collection'> Train my collection</Link>
            </div>
        </>
    )
}