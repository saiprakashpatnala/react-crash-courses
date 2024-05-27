import {Link} from "react-router-dom"


const CourseItem=(props)=>{
const {data}=props
const{id,name,logo_url}=data
    return(
        <li>
            <Link to={`/courses/${id}`}>
                <p>{name}</p>
                <img alt={name} src={logo_url}/>
            </Link>
        </li>
    )
}

export default CourseItem