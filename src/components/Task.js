import {useEffect , useState} from 'react'
const Task = ({message}) => {
    const [isShow, setIsShow] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsShow(false)
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

    return( 
        <>
        {
            isShow ? <p>{message}</p> : null
        }
        </>
    )
}

export default Task;