import { ADD_COUNTRY ,GET_COUNTRY} from "./action";



const initstate={

country:[],


}



export const countryreducer=(store=initstate,{type,payload})=>{


switch (type) {
    case ADD_COUNTRY:
         return ({...store,country:[...store.country,payload]});
        case GET_COUNTRY:
            return ({...store,country:[...payload]})

    default:
        return store
}





}