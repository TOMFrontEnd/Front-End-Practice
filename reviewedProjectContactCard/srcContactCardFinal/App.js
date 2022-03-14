import './styles.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ContactCard from './ContactCard';

const App = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		 Axios.get (
				'https://randomuser.me/api/?results=10')
			.then((response) =>{
			//.then((data) => {
			//console.log(response.data);
			//setContacts(response.data);
			setContacts(response.data.results);}
			)}, []);

	return (
		<>
		{contacts.map(contact => {
			const { picture:{large},name:{first},name:{last},email,dob:{age},cell}=contact;
			//双重结构
			let fullName=`${first} ${last}`;
			//新型构建新字符串
			return(	
			<ContactCard
					avatar={large}
					name={fullName}
					email={email}
					age={age}
					key={cell}
				/>
			)})}
		</>
	);
};

export default App;
