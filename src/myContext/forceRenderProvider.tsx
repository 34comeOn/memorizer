import React, { createContext, useState } from "react";

// @ts-ignore
export const ForceRenderContext = createContext();

export const ForceRenderProvider = ({children}:{children: React.ReactElement}) => {
    const [forceState, forceRender] = useState<boolean>(false);
    
    const getForceRender = () => {
        forceRender(!forceState)
    }
    
    return (
        <ForceRenderContext.Provider value={{forceState, getForceRender}}>
            {children}
        </ForceRenderContext.Provider >
    );
};