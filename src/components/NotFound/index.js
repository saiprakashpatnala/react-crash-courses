import {Link} from "react-router-dom"

const NotFound=()=>{
    return(
        <div>
            <Link to='/'>
                Home
            </Link>
            <p>Page Not found</p>
        </div>
    )
}

export default NotFound