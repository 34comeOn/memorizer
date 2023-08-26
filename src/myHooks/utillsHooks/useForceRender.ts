import { useContext } from "react"
import { ForceRenderContext } from "../../myContext/forceRenderProvider"

export const useForceRender = () => useContext(ForceRenderContext);