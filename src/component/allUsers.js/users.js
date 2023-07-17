import React, { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar"
import { Audio, Grid, Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import 'react-toastify/dist/ReactToastify.css';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'




const ShowUser = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isloading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const [selectedGender, setSelectedGender] = useState("");

    useEffect(() => {
        getData()
        setLoading(true)
    }, [])
    const getData = async () => {

        let result = await axios.get("http://localhost:8050/users")
        setData(result.data)
        setLoading(false)
    }

    console.log(data, "data receiv")

    //pagination
    const indexOfLastProject = (currentPage + 1) * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    // const currentData = data.slice(offset, offset + itemsPerPage);


    const filteredData = selectedGender ? data.filter((item) => item.gender === selectedGender) : data;
    const currentData = filteredData.slice(offset, offset + itemsPerPage);
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <div className="layout-page">

                        <Navbar />



                        <div className="content-wrapper">

                            <div className="filter-container" style={{ display: "flex", justifyContent: "flex-end", width: "200px" }}>
                                <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                                    <option value="">All</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            {/* filter end */}

                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* Here contain start */}
                                {isloading ? (<Oval
                                    height={80}
                                    width={80}
                                    color="#D4AF37"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#D4AF37"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />
                                ) : (

                                    <div className="card">
                                        <div className="table-responsive text-nowrap table-bordered">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Sr. No.</th>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>Position</th>
                                                        <th>location</th>
                                                        <th>Gender</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                {filteredData.length > 0 && currentData.map((elem, index) => {
                                                    return (
                                                        <tbody className="table-border-bottom-0" key={index}>
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td>{elem.user_name}</td>
                                                                <td>{elem.age}</td>
                                                                <td>{elem.position}</td>
                                                                <td>{elem.location}</td>
                                                                <td>{elem.gender}</td>
                                                                <td>
                                                                    <Link to={`/update-user/${elem._id}`}>
                                                                        <button className="btn btn-sm btn-primary">Edit</button>
                                                                    </Link>

                                                                    <DeleteModal
                                                                        id={elem._id}
                                                                        refetch={getData}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>



                                        </div>
                                    </div>
                                )}
                                {/* Here contain end */}
                                <div className="themesflat-pagination clearfix mb-5" style={{ textAlign: "center" }}>

                                    {data.length > 3 &&
                                        <ReactPaginate
                                            previousLabel={<FiChevronsLeft />}
                                            nextLabel={<FiChevronsRight />}
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            previousClassName="page-item"
                                            previousLinkClassName="page-link"
                                            nextClassName="page-item"
                                            nextLinkClassName="page-link"
                                            breakLabel="..."
                                            breakClassName="page-item"
                                            breakLinkClassName="page-link"
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName="pagination m-0"
                                            activeClassName="active"
                                        />
                                    }









                                </div>



                            </div>

                            {/* <Footer /> */}

                            <div className="content-backdrop fade">




                            </div>
                        </div>
                        {/* <!-- Content wrapper --> */}
                    </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>


            {/* raect paginati */}


        </>
    )
}


export default ShowUser



const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method: "delete",
            url: (`http://localhost:8050/user/${props.id}`)
        })
        toast.success('You have delete a record successfully!');
        props.refetch()

        onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete?</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
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

        </>
    )
}