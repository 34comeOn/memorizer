import React from "react";
import { MenuButton } from "../../components/atoms/menuButton";
import './style.scss';
import variables from '../../sass/variables.module.scss';

export const MainPage = () => {
    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                Welcome to Memorizer
            </h1>
            <div className='menu-options--box'>
                <MenuButton path='/collection' color={variables.colorMenuBright}>
                    Train collection
                </MenuButton>
                <MenuButton path='/new_collection' color={variables.colorMenuDark}>
                    Create a new collection
                </MenuButton>
            </div>
        </div>
    )
}