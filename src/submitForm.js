/* eslint-disable quotes */
import axios from 'axios'

export default (item) => {
	// console.log(item)
	const baseUrl = `https://iurpsi4un8.execute-api.us-east-1.amazonaws.com/prod`
	// console.log('-------WebApi EMAIL--------')
	const url=`${baseUrl}/email`
	
	axios.post(url, JSON.stringify(item))
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		})
}

  
