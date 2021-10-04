import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRotes} from '../routes.js'
import {SHOP_ROUTE} from '../utils/consts.js'
import {Context} from '../index.js'


const AppRouter = () => {
	const {user} = useContext(Context);
	console.log(user);

	return (

		<Switch>
			{user.isAuth && authRoutes.map( ({path, Component}) => 
					<Route key={path} path={path} component={Component} exact/>
				
			)}
			{publicRotes.map( ({path, Component}) => 
					<Route key={path} path={path} component={Component} exact/>
				
			)}
			<Redirect to={SHOP_ROUTE} />
		</Switch>

	)
}

export default AppRouter;