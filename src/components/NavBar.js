import React, { useContext } from 'react';
import {Context} from './../index.js';
import {NavLink, useHistory} from 'react-router-dom'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from './../utils/consts.js'
import {observer} from 'mobx-react-lite'

const NavBar = observer( () => {
	const {user} = useContext(Context)
	const history = useHistory();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		history.push(SHOP_ROUTE)
	}

    return (
		<>
		  <Navbar bg="dark" variant="dark">
		    <Container>
		    <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>
		    	MIKMAR shop
		    </NavLink>
		    {user.isAuth?
		    	<Nav style={{color: 'white'}} className="ml-auto">
		    		<Button variant={'outline-light'} 
		    			onClick={() => history.push(ADMIN_ROUTE)}>Admin pannel</Button>
		    		<Button variant={'outline-light'} className="ml-4"
		    			 onClick={() => logOut()} >Log out</Button>
		    	</Nav>
		    	: <Nav style={{color: 'white'}} className="ml-auto">
		    		<Button variant={'outline-light'} 
		    			onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
		    	</Nav>
		    }
		    </Container>
		  </Navbar>
		</>
    );
});

export default NavBar;
