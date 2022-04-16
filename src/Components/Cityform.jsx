import { useState } from "react"
import { useDispatch } from "react-redux"
import {add_city_api} from '../Redux/City/action'
import styled from 'styled-components'
import { useNavigate } from "react-router"



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
box-shadow: rgba(82, 57, 73, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;

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






export const Cityform=()=>{
    const navigate=useNavigate()
const dispacth=useDispatch()
const [country,setcountry]=useState("")
const [city,setcity]=useState("")
const [population,setpopulation]=useState("")


 function add_it()
 {

dispacth(add_city_api({country,city,population})) 
navigate("/")



 }



return (

<>
<Wrapper>
<Input type="text" placeholder="country" onChange={(e)=>{setcountry(e.target.value)}}/>
<br />
<Input type="text"  placeholder="city" onChange={(e)=>{setcity(e.target.value)}}/>
<br />
<Input type="text"  placeholder="population" onChange={(e)=>{setpopulation(e.target.value)}}/>
<br />


<Button onClick={add_it} disabled={!country||!city||!population}>addcity</Button>
</Wrapper>


</>





)







}