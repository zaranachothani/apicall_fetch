import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Datafetch from "./Datafetch";

function Users(){

    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
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
    // var url = 'https://jsonplaceholder.typicode.com/users';
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
        Datafetch('users', setData);
    }, []);

    return(
        <>
            <Header/>
            <Table striped bordered hover border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele,ind)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.username}</td>
                                        <td>{ele.email}</td>
                                        <td>
                                            {/* <table border={1}>
                                                <thead>
                                                    <tr>
                                                        <th>Street</th>
                                                        <th>Suite</th>
                                                        <th>City</th>
                                                        <th>Zipcode</th>
                                                        <th>Geo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{ele.address.street}</td>
                                                        <td>{ele.address.suite}</td>
                                                        <td>{ele.address.city}</td>
                                                        <td>{ele.address.zipcode}</td>
                                                        <td>
                                                            <table border={1}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Lat</th>
                                                                        <th>Lag</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>{ele.address.geo.lat}</td>
                                                                        <td>{ele.address.geo.lng}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table> */}
                                            <ul>
                                                <li><strong>Street:</strong> {ele.address.street}</li>
                                                <li><strong>Suite:</strong> {ele.address.suite}</li>
                                                <li><strong>City:</strong> {ele.address.city}</li>
                                                <li><strong>Zipcode:</strong> {ele.address.zipcode}</li>
                                                <li>
                                                    <strong>Geo:</strong>
                                                    <ul>
                                                        <li><strong>Lat:</strong>  {ele.address.geo.lat}</li>
                                                        <li><strong>Lng:</strong>  {ele.address.geo.lng}</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>{ele.phone}</td>
                                        <td>{ele.website}</td>
                                        <td>
                                            <ul>
                                                <li><strong>Name:</strong> {ele.company.name}</li>
                                                <li><strong>catchPhrase":</strong> {ele.company.catchPhrase}</li>
                                                <li><strong>bs:</strong> {ele.company.bs}</li>
                                            </ul>
                                        </td>
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

export default Users;