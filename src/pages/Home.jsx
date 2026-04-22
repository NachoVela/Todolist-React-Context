import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect} from "react"
import { getContacts } from "../services/serviceAPI.js";
import { Card } from "../components/Card"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=> {
	getContacts(dispatch)
  }, [])

	return (
		<div className="text-center mt-5 container">
			<h1>Contact List</h1>
			{
				store.contacts.map(contact =>{

					return (
						<Card contact={contact} key={contact.id}/>
					)
				})
			}
		</div>
	);
}; 