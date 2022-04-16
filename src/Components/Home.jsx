import { Table } from './Table';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {sort_asc_population,sort_dsc_population,filter_by_country} from '../Redux/City/action'

import {get_city_api} from '../Redux/City/action'


import {Routers,Route,Link} from 'react-router-dom'



export const Home=()=>{
    const [filtercountry,setfiltercountry]=useState("")

    const dispatch=useDispatch()


    var city=useSelector((store)=>(store.city.city))
    
    
    
    console.log(city,"city")
    
    
    
    useEffect(()=>{
    
    
    dispatch(get_city_api())
    
    
    
    
    },[])



function sort_ascending()
{

    dispatch(sort_asc_population())




}
function sort_descending()
{

    dispatch(sort_dsc_population())


}
function filtercountyry()
{

dispatch(filter_by_country(filtercountry))


}


    
return(


<>

<Link to="/cityform">ADD City</Link>
<Link to="/countryform" >ADD Country</Link>
<br />
<br />

<button onClick={sort_ascending}>sortpopulation ascending</button>
<button onClick={sort_descending}>sortpopulation descending</button>
<input type="text" placeholder='country to be filtered' onChange={(e)=>{setfiltercountry(e.target.value)}}/> \
<button  onClick={filtercountyry}>filter the country</button>

<br />

<Table city={city}/>


</>


)





}





