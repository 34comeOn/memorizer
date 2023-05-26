import React from "react";
import { MenuButton } from "../../components/atoms/menuButton";
import './style.scss';
import variables from '../../sass/variables.module.scss';
import { UserCollectionsList } from "../../components/organizms/userCollectionsList";
import { MainPageMenu } from "../../components/organizms/mainPageMenu";

export const MainPage = () => {
    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                Welcome to Memorizer
            </h1>
            <MainPageMenu />
            {/* <div className='menu-options--box'>
                <UserCollectionsList />
                <MenuButton disabled={true} path='/new_collection' color={variables.colorMenuDark}>
                    Create a new collection
                </MenuButton> */}
            {/* </div> */}
        </div>
    )
}