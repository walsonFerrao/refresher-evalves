// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// import {get_city_api} from '../Redux/City/action'


export const Table=(prop)=>{




return (

<>


<table>

<tr>
<th>id</th>
<th>Country</th>
<th>City</th>
<th>Population</th>
<th>Edit</th>
<th>Delete</th>

</tr>

{prop.city.map((ele)=><tr key={ele.id}><td>{ele.id}</td><td>{ele.country}</td><td>{ele.city}</td><td>{ele.population}</td><td><button>edit</button></td><td><button>delete</button></td></tr>)}



</table>






</>





)







}