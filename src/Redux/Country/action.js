import axios from 'axios'
export const GET_COUNTRY="GET_COUNTRY"

export const ADD_COUNTRY="ADD_COUNTRY"




export const get_country=(payload)=>({type:GET_COUNTRY,payload})

export const add_country=(payload)=>({type:ADD_COUNTRY,payload})


export const add_country_api=(payload)=>(dispatch)=>{

    axios.post(" http://localhost:1080/country",payload)
    .then((res)=>{console.log("uy")})
.catch((err)=>{console.log(err)})




}

