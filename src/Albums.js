import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Datafetch from "./Datafetch";

function Albums(){

    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //     });
    // }, []);


    // var xhr = new XMLHttpRequest();
    // var url = 'https://jsonplaceholder.typicode.com/albums';
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) { 
    //         if (xhr.status === 200) { 
    //             var data = JSON.parse(xhr.responseText); 
    //             console.log(data); 
    //             setData(data); 
    //         } else {
    //             console.error('There was a problem fetching the data:', xhr.statusText); 
    //         }
    //     }
    // };
    // xhr.open('GET', url);
    // xhr.send();

    useEffect(() => {
        Datafetch('photos', setData);
    }, []);

    return(
        <>
            <Header/>
            <center>
                <Table striped bordered hover border={1}>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele,ind)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{ele.userId}</td>
                                            <td>{ele.id}</td>
                                            <td>{ele.title}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </center>
        </>
    )
}

export default Albums;