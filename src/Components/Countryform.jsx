
import { useState } from "react"
import { useDispatch } from "react-redux"
import {add_country_api} from "../Redux/Country/action"

import { Wrapper } from './Cityform';
import {Input,Button} from './Cityform'


export const Countryform=()=>{
const dispatch=useDispatch()

const [country,setcountry]=useState("")
    function addcountry()
    {

       dispatch(add_country_api({country:country}))
      



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