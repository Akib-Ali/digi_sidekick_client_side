import React, { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar"
import { Audio, Grid, Oval } from 'react-loader-spinner'



const ShowBlogs = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isloading, setLoading] = useState(false)


    useEffect(() => {
        getData()
        setLoading(true)
    }, [])
    const getData = async () => {
    
        let result = await axios.get("http://localhost:8050/users")
        console.log(result.data , "all data received in console")
    }

   console.log(data, "data receiv")
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <h1>swdddwqe</h1>
            </div>
        </>
    )
}


export default ShowBlogs



const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method:"delete",
             url:(`https://wild-gold-bull-sock.cyclic.app/delete-blog/${props.id}`),
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
             }
           
          })
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
        </>
    )
}