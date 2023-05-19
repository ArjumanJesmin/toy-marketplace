import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Kids Zone`;
    }, [title]);
}



export default useTitle;