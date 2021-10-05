import React, { useState, useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Container, Card, Form, Button} from 'react-bootstrap';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from './../utils/consts.js';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import {Context} from './../index.js';
import { login, registration } from '../htttp/userAPI.js';




const Auth = observer( () => {
	const location = useLocation();
	const history = useHistory();
	const {user} = useContext(Context)
	// console.log(location);
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {
			let data;

			if(isLogin) {
				data = await login(email, password);
				console.log(data)
			} else {
				data = await registration(email, password);
				console.log(data)
			}
			user.setUser(user);
			user.setIsAuth(true);
			history.push(SHOP_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
		}


	}

	return (
		<Container className='d-flex justify-content-center align-items-center'
			style={{height: window.innerHeight - 54}}>

			<Card style={{width: 600}} className="p-5">
				<h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className="d-flex flex-column">
					<Form.Control 
						placeholder="Enter your email" 
						className="mt-3" 
						value={email} 
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control 
						placeholder="Enter your password" 
						className="mt-3" 
						type="password"
						value={password} 
						onChange={e => setPassword(e.target.value)}
					/>

					<div className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
						{isLogin ?
							<div>
								Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
							</div>
							: <div>
								Do you have an account? <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
							</div>
						}
						<Button variant={"outline-success"} style={{width: 'auto'}} onClick={click}>
							{isLogin ? 'Enter' : 'Register'}
						</Button>
					</div>
				</Form>

			</Card>
		</Container>
	)
})

export default Auth;