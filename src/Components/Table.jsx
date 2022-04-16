// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// import {delete_the_city} from '../Redux/City/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import {delete_the_city} from '../Redux/City/action'

const Tablerow=styled.tr`
 
background-color:${(props)=>props.color};


`
const TH=styled.th`
 
 width:90px;
 border:1px solid black;

` 


const Wrapper=styled.div`

width:40%;
padding:50px;
margin:auto;


`




export const Table=(prop)=>{
const navigate=useNavigate()
const dispatch=useDispatch()

    function movetoeditingsection(id){
       navigate(`/edit/${id}`)
    }

 function deletecity(id)
 {

    dispatch(delete_the_city(id))
    window.location="/"


 }




return (

<>

<Wrapper>
<table>
<thead>
<Tablerow color='#DAB88B'>
<TH>id</TH>
<TH>Country</TH>
<TH>City</TH>
<TH>Population</TH>
<TH>Edit</TH>
<TH>Delete</TH>

</Tablerow>
</thead>
<tbody>
{prop.city.map((ele)=><Tablerow color='#F3E9DD' key={ele.id}><td>{ele.id}</td><td>{ele.country}</td><td>{ele.city}</td><td>{ele.population}</td><td><button onClick={()=>{movetoeditingsection(ele.id)}}>edit</button></td><td><button onClick={()=>{deletecity(ele.id)}}>delete</button></td></Tablerow>)}
</tbody>


</table>

</Wrapper>




</>





)







}