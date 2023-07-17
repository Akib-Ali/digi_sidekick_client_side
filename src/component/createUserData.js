import { useEffect, useState, useRef } from "react";
import Navbar from "./navbar/navbar";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CreateNewUser = () => {

    const [error, setError] = useState(false)
    const [user_name, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("")
    const [gender, setGender] = useState("")
    const [location, setLocation] = useState("")
    const [success, setSuccess] = useState(false);


    console.log({ user_name, age, position, gender, location })





    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user_name || !age || !position || !gender || !location) {
            setError(true);
            return false;
        }

        try {
            // await axios.post("http://localhost:8050/users", {
                await axios.post("https://shiny-handkerchief-duck.cyclic.app/users",{
                user_name,
                age,
                position,
                gender,
                location,
            });

            toast.success('You have create a New user successfull!');
            setSuccess(true);
            setTimeout(() => {
                window.location.href = "/"
            }, 2000)

        } catch (error) {
            // Handle any error from the API
            console.error(error);
            setError(true);
        }


    }







    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="toast-container"
            />


            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">



                    <div className="layout-page">
                        <Navbar />

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">

                                {/* all contain here start */}
                                <div className="col-xl">
                                    <div className="card mb-4">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">Create New User</h5>
                                            <small className="text-muted float-end">Digi SideKick</small>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="basic-default-fullname">Name</label>
                                                            <input type="text" className="form-control" id="basic-default-fullname" placeholder="Enter Name"
                                                                name="user_name"
                                                                onChange={(e) => setUserName(e.target.value)} autoComplete="off" />
                                                            {error && !user_name && <div className="form-text text-danger">Please Enter Full Name</div>
                                                            }
                                                        </div>

                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="basic-default-company">Age</label>
                                                            <input type="text" className="form-control" id="basic-default-company" placeholder="Enter Age"
                                                                name="age"
                                                                onChange={(e) => setAge(e.target.value)}
                                                                autoComplete="off"
                                                            />
                                                            {error && !age && <div className="form-text text-danger">Please Enter Age</div>
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-default-email">Position</label>
                                                    <div className="input-group input-group-merge">
                                                        <textarea id="basic-default-message" className="form-control" placeholder="Enter Position"
                                                            name="position"
                                                            onChange={(e) => setPosition(e.target.value)}
                                                            autoComplete="off"
                                                        />

                                                    </div>
                                                    {error && !position && <div className="form-text text-danger">Please Enter Job Position</div>
                                                    }
                                                </div>


                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-default-phone">Location</label>
                                                    <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Enter Location"
                                                        name="location"
                                                        onChange={(e) => setLocation(e.target.value)}
                                                        autoComplete="off"
                                                    />
                                                    {error && !location && <div className="form-text text-danger">Please Enter Location</div>
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="basic-default-phone"
                                                    >
                                                        Gender
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        name="gender"
                                                        onChange={(e) => setGender(e.target.value)}
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                    {error && !gender && (
                                                        <div className="form-text text-danger">
                                                            Please Select Gender
                                                        </div>
                                                    )}
                                                </div>
                                                <button type="submit" className="btn btn-primary"
                                                    onClick={handleSubmit}
                                                >
                                                    Create</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>




                            <div className="content-backdrop fade"></div>
                        </div>

                    </div>

                </div>


                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )





}

export default CreateNewUser