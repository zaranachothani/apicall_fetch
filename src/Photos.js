import './App.css';
import { Card,Button,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datafetch from './Datafetch';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from './Header';
function Photos(){
    const [data, setData] = useState([]);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);


    // var xhr = new XMLHttpRequest();
    // var url = 'https://jsonplaceholder.typicode.com/photos';
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
            <Container>
                <div className='main_section'>
                {
                    data.map((ele,ind)=>{
                        return(
                            <Card  key={ind} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ele.url} />
                            <Card.Body>
                                <Card.Title>{ele.albumId}</Card.Title>
                                <Card.Title>{ele.id}</Card.Title>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                            {/* {ele.thumbnailUrl} */}
                                </Card.Text>
                                <Button variant="primary"><a href={ele.thumbnailUrl} target='_blank'>read more</a></Button>
                            </Card.Body>
                            </Card>
                        )
                    })
                }
                </div>
            </Container>
        </>

    )
}
export default Photos;