import './App.css';
import { Container,Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div className='header_color'>
            <Container>
                <Row>
                    <header>
                        <div className='menus'>
                            <ul className='main_menu'>
                                <li>
                                    {/* <a><Link to="/home">Home</Link></a> */}
                                </li>
                                <li>
                                    <Link to="/post">Posts</Link>
                                </li>
                                <li>
                                    <Link to="/comments">Comments</Link>
                                </li>
                                <li>
                                    <Link to="/albums">Albums</Link>
                                </li>
                                <li>
                                    <Link to="/photos">Photos</Link>
                                </li>
                                <li>
                                    <Link to="/todos">Todos</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Header;