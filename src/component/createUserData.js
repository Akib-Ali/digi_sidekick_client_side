import { useEffect, useState, useRef } from "react";
import Navbar from "./navbar/navbar";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



const CreateNewUser = () => {

    const [error, setError] = useState(false)
    const [user_name, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("")
    const [gender, setGender] = useState("")
    const [location, setLocation] = useState("")


    console.log({ user_name, age, position, gender, location })





    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("success")


    }







    return (
        <>
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
                                                            <input type="text" className="form-control" id="basic-default-fullname" placeholder="The Title for the Blog Post"
                                                                name="user_name"
                                                                onChange={(e) => setUserName(e.target.value)} />
                                                            {error && !blog_title && <div className="form-text text-danger">Please Enter Blog Title</div>
                                                            }
                                                        </div>

                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="basic-default-company">Age</label>
                                                            <input type="text" className="form-control" id="basic-default-company" placeholder="The Permalink/Slug for the Blog Post"
                                                                name="age"
                                                                onChange={(e) => setAge(e.target.value)} />
                                                            {error && !blog_slug && <div className="form-text text-danger">Please Enter Blog Slug</div>
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-default-email">Position</label>
                                                    <div className="input-group input-group-merge">
                                                        <textarea id="basic-default-message" className="form-control" placeholder="Short Summary, Used as the Meta Description"
                                                            name="position"
                                                            onChange={(e) => setPosition(e.target.value)}
                                                        />

                                                    </div>
                                                    {error && !blog_summary && <div className="form-text text-danger">Please Enter Blog Summary</div>
                                                    }
                                                </div>


                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-default-phone">Location</label>
                                                    <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Keywords"
                                                        name="location"
                                                        onChange={(e) => setLocation(e.target.value)}
                                                    />
                                                    {error && !blog_keyword && <div className="form-text text-danger">Please Enter Blog Keywords</div>
                                                    }
                                                </div>



                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-default-phone">Gender</label>
                                                    <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Keywords"
                                                        name="gender"
                                                        onChange={(e) => setGender(e.target.value)}
                                                    />
                                                    {error && !blog_keyword && <div className="form-text text-danger">Please Enter Blog Keywords</div>
                                                    }
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