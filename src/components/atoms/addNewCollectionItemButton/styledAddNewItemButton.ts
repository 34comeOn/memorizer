import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import url from '../../../accets/buttons/new-document.png';

export const StyledAddNewItemButton = styled.button`
width: 150px;
height: 60px;
background-color: ${variables.colorBackgroundRepeatList};
border: none;
margin: 8px auto 15px 0px;
border-radius: 15px;
display: block;
box-shadow: 0px 2px 9px -4px black;
cursor: pointer;
position: relative;
text-align: right;
color: ${variables.colorFontWhite};

&::before{
    content: "";
    position: absolute;
    left: 5px;
    display: block;
    width: 55px;
    height: 55px;
    top: 3px;
    background-image: url('${url}');
    background-size: contain;
    background-repeat: no-repeat;
}
:hover {
    background-color: rgb(235, 142, 142);
}

:active {
    background-color: rgb(103, 117, 103);
}
`