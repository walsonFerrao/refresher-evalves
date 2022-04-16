
import axios from 'axios'





export const ADD_CITY="ADD_CITY"
export const GET_CITY="GET_CITY"
export const SORT_POPULATION_ASCENDING="SORT_POPULATION_ASCENDING"

export const SORT_POPULATION_DESCENDING="SORT_POPULATION_DESCENDING"

export const FILTER_BY_COUNTRY="FILTER_BY_COUNTRY"


export const add_city=(payload)=>({type:ADD_CITY,payload})

export const get_city=(payload)=>({type:GET_CITY,payload})

export const sort_asc_population=()=>({type:SORT_POPULATION_ASCENDING})

export const sort_dsc_population=()=>({type:SORT_POPULATION_DESCENDING})

export const filter_by_country=(payload)=>({type:FILTER_BY_COUNTRY,payload})


export const add_city_api=(payload)=>(dispatch)=>{

    axios.post("http://localhost:1080/city",payload)
    .then((res)=>{console.log(res.data)})
    .catch((err)=>{console.logh(err)})





}
export const get_city_api=()=>(dispatch)=>{

axios.get("http://localhost:1080/city")
.then((res)=>{console.log(res.data);dispatch(get_city(res.data))})
.catch((err)=>{console.log(err)})
  





}