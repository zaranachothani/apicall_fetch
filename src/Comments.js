import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Comments(){

    const [data,setdata] = useState([]);
  
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(function (response) {
      console.log(response.data);
      setdata(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    },[])

    return(
        <>
            <Header/>
            <Table striped bordered hover border={1}>
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele,ind)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{ele.postId}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.body}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Comments;