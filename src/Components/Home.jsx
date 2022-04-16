import { Table } from './Table';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {sort_asc_population,sort_dsc_population,filter_by_country} from '../Redux/City/action'
import {get_city_api} from '../Redux/City/action';
import { useNavigate } from 'react-router';

import styled from "styled-components"
import {Routers,Route,Link} from 'react-router-dom'


const Container=styled.div`

display:flex;
gap:7%;
margin:auto;
width:100%;
justify-content:center;
`
const Button=styled.button`
height:40px;
border-radius:5px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Input=styled.input`
height:34px;
border-radius:5px;
`




export const Home=()=>{
    const [filtercountry,setfiltercountry]=useState("")

    const dispatch=useDispatch()
     const navigate=useNavigate()

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
if(filtercountry=="")
{
    dispatch(get_city_api())
}
else{
    dispatch(filter_by_country(filtercountry))

}


}


    
return(


<>


<br />
<br />
<Container>
<Link to="/cityform"><Button>ADD City</Button></Link>
<Link to="/countryform" ><Button>ADD Country</Button></Link>
<Button onClick={sort_ascending}>sortpopulation ascending</Button>
<Button onClick={sort_descending}>sortpopulation descending</Button>
<div>
<Input type="text" placeholder='country to be filtered' onChange={(e)=>{setfiltercountry(e.target.value)}}/>

<Button  onClick={filtercountyry}>filter the country</Button>
</div>

</Container>
<br />


<br />

<Table city={city}/>


</>


)





}





