import { Route, Routes } from "react-router-dom"
import ShowUser from "../allUsers.js/users"
import CreateNewUser from "../createUserData"
import UpdateUser from "../updateUser.js/updateuser"


const AllRoutes=()=>{

    return(
        <>
        <Routes>
        <Route path="/" element={<ShowUser/>}></Route>
        <Route path="/create-new-user" element={<CreateNewUser/>}/>
        <Route  path ="/update-user/:_id" element={<UpdateUser/>}/>
        </Routes>
       
        </>
    )



}

export default AllRoutes