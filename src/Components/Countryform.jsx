
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import {add_country_api} from "../Redux/Country/action"

import { Wrapper } from './Cityform';
import {Input,Button} from './Cityform'


export const Countryform=()=>{
const dispatch=useDispatch()

const navigate=useNavigate()
const [country,setcountry]=useState("")
    function addcountry()
    {

       dispatch(add_country_api({country:country}))
      
        navigate("/")


    }



return (
<>
<Wrapper>
<Input type="text" placeholder="name of country" onChange={(e)=>{setcountry(e.target.value)}}/>
<br />
<Button onClick={addcountry}>Add country</Button>
</Wrapper>
</>


)




}