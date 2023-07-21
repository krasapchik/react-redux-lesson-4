
import { setError, setLoading, setUsers } from "../reducers/UsersSlice"



const fetchAllUsers = () => async (dispatch) =>{
    try {
        dispatch(setLoading())
        const response = await fetch('http://localhost:5000/userss')
        if(!response.ok){
            throw new Error('sory')
        }
        const data = await response.json()
        dispatch(setUsers(data))
    } catch (err) {
        dispatch(setError("Opps sorry something has gone wrong"))
    }
}
export default fetchAllUsers

// const userAction = () =>{
//     return{
//         type:"user",
//         payload: 123,
//     }
// };


// const userActionCreator = () =>{
//     return{
//         type: "user",
//         payload: 123,
//     }
// };

// const dispatch = (action) =>{
//     if( typeof action === "object")
//     console.log(action.payload * 2);

//     if(typeof action === "function")
//     action(dispatch)
// }

// dispatch(userAction());
// dispatch(userActionCreator())