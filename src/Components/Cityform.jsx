import { useState } from "react"
import { useDispatch } from "react-redux"
import {add_city_api} from '../Redux/City/action'



export const Cityform=()=>{
const dispacth=useDispatch()
const [country,setcountry]=useState("")
const [city,setcity]=useState("")
const [population,setpopulation]=useState("")


 function add_it()
 {

dispacth(add_city_api({country,city,population})) 



 }



return (

<>

<input type="text" placeholder="country" onChange={(e)=>{setcountry(e.target.value)}}/>
<input type="text"  placeholder="city" onChange={(e)=>{setcity(e.target.value)}}/>
<input type="text"  placeholder="population" onChange={(e)=>{setpopulation(e.target.value)}}/>


<button onClick={add_it}>addcity</button>



</>





)







}