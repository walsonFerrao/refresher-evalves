import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {patch_the_city} from '../Redux/City/action'

export const Wrapper=styled.div`

background-color:blue;

width:20%;
margin:auto;
padding-bottom:5%;

padding-left:5%;
padding-top:50px;
line-height:60px;
margin-top:100px;
border-radius:5px;
box-shadow: 30px 25px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 30px 25px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 30px 25px 5px 0px rgba(0,0,0,0.75);

`
export const Input=styled.input`

height:40px;
width:80%;
`
export const Button=styled.button`

height:30px;
width:80%;
background-color:grey;
color:white;
font-weight:bold;
` 



export const Editingsection=()=>{

    const dispatch=useDispatch()
    const navigate=useNavigate()
const [country,setcountry]=useState("")
const [city,setcity]=useState("")
const [population,setpopulation]=useState("")
const {id} =useParams()

console.log(id,"id")



function makechanges()
{
let payload={
    country,
    city,
    population
}

dispatch(patch_the_city({id,payload}))

navigate("/")


}




return(



<Wrapper>
<Input type="text" placeholder="country" onChange={(e)=>{setcountry(e.target.value)}}/>
<br />
<Input type="text"  placeholder="city" onChange={(e)=>{setcity(e.target.value)}}/>
<br />
<Input type="text"  placeholder="population" onChange={(e)=>{setpopulation(e.target.value)}}/>
<br />


<Button onClick={makechanges}>EditCity</Button>
</Wrapper>






)








}