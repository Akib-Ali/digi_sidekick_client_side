import { Route, Routes } from "react-router-dom"
import ShowUser from "../allUsers.js/users"
import CreateNewUser from "../createUserData"


const AllRoutes=()=>{

    return(
        <>
        <Routes>
        <Route path="/all-users" element={<ShowUser/>}></Route>
        <Route path="/create-new-user" element={<CreateNewUser/>}/>
        </Routes>
       
        </>
    )



}

export default AllRoutes