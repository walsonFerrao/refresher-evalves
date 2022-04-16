import { GET_CITY, ADD_CITY,SORT_POPULATION_ASCENDING ,SORT_POPULATION_DESCENDING,FILTER_BY_COUNTRY} from "./action";



const init_state={


city:[]





}

export const city_reducer=(store=init_state,{type,payload})=>{

switch (type) {
    case "GET_CITY":
        return {...store,city:payload};
        case SORT_POPULATION_ASCENDING:
            return{...store,city:[...store.city.sort((a,b)=>(a.population-b.population))]}
     case SORT_POPULATION_DESCENDING:
        return{...store,city:[...store.city.sort((a,b)=>(b.population-a.population))]}
case FILTER_BY_COUNTRY:
    return {...store,city:[...store.city.filter((ele)=>ele.country==payload)]}

    default:
       return store
}






}
