import Header from "./Header";
import './App.css';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Datafetch from "./Datafetch";

function Post(){

    const [data, setData] = useState([]);
  
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
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

    // Datafetch('posts');

    // var xhr = new XMLHttpRequest();
    // var url = 'https://jsonplaceholder.typicode.com/posts';
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
    
    // const handleData = (data) => {
    //     // Do something with the fetched data
    //     console.log('Fetched data:', data);
    // };
    
    // // Call Datafetch with the URL and the callback function
    // Datafetch('posts', handleData);

    useEffect(() => {
        Datafetch('posts', setData);
    }, []);

    return (
        <>
            <Header/>
            <Table striped bordered hover border={1}>
                <thead>
                    <tr>     
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, ind) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default Post;
