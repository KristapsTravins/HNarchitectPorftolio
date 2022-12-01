import { useState } from "react"

export const useAppHook = () =>{

const [slideContent,setSlideContent] = useState("about");

return  {slideContent,setSlideContent}

}

