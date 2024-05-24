import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { Helmet } from "react-helmet-async";
const AddPage = () => {
  const [data, setdata] = useState();
  const [query, setSearchQuery] = useState();


  function getAll() {
    axios.get("http://localhost:3000/api/products/").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  }
  function handleDelete(id) {
    axios
      .delete(` "http://localhost:3000/api/products/" + ${id} `)
      .then((res) => {
        getAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = itemList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  function handleAdd(value) {
    axios.post("http://localhost:3000/api/products/" ,value) 
    .then((res) => {
      getAll();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
          <Helmet>
        <title>Admin Panel</title>
       
      </Helmet>
      <Formik
        initialValues={{ Name: "", price: "", title: "", img: "" }}
        validationSchema={Yup.object({
          Name: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          img: Yup.string().required("Required"),

        })}
        onSubmit={( value, { setSubmitting ,resetForm}) => {
          setTimeout(() => {
            setSubmitting(false);
            handleAdd(value);
            resetForm('')
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="Name"> Name</label>
          <Field name="Name" type="text" />
          <ErrorMessage name="Name" />
<br/>
          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />
          <br/>

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />
<br/>

          <label htmlFor="img">Image src</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />
          <br/>
          <br/>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <Table striped bordered hover>
        <thead>
        <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
        />
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Price</th>
            <th>Title</th>
            <th>Img</th>
            <th>Delete</th>
         
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((x) => {
              return (
                <tr>
                  <td>{x._id}</td>
                  <td> {x.name}</td>
                  <td>{x.price}</td>
                  <td>{x.title}</td>

                  <td>
                    <img className="image" src={x.img} alt="sekil" />
                  </td>

                  <td>
                    {" "}
                    <Button onClick={handleDelete(`${x._id}`)} variant="danger">
                      Danger
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default AddPage;
