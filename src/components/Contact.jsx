import React, { Component } from 'react'
import '../css/components/Contact.css'
import Footer from './Footer'
import Header from './Header'
import Form from './Form'
export default class Contact extends Component {
	constructor(props) {
		super(props)
		this.initialState = {
			// Data: {
			name: '',
			email: '',
			message: '',
			//  } 
		}
		this.state = this.initialState
		this.onNameChange = this.onNameChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onMessageChange = this.onMessageChange.bind(this)
	}
  
	onNameChange = data => {
		this.setState = {
			name: data
		}
	}
	onEmailChange = data => {
		this.setState = {
			email: data
		}
	}
	onMessageChange = data => {
		this.setState = {
			message: data
		}
	}
	
	render() {
		return (
			<div className="contact">
				<Header title='CONTACT' />
				
				<Form className="form"
					onNameChange={this.onNameChange}
					onEmailChange={this.onEmailChange}
					onMessageChange={this.onMessageChange}
				/>
				<div className="page_footer">
					<Footer onClick={this.props.onClick} />
				</div>  
			</div>
		)
	}
}

