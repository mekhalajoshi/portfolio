import React, { Component } from 'react'
import submitForm from '../submitForm'
import '../css/Form.css'

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.initialState = {
			data: {
				senderName: '',
				senderEmail: '',
				senderMessage: '',
			},
			emailSent:false,
		}
		this.state = this.initialState
		this.onNameChange = this.onNameChange.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onMessageChange = this.onMessageChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick = e => {
		e.preventDefault()
		submitForm(this.state.data)
		this.setState({
			data: this.initialState.data,
			emailSent: true,
		})
	}

	onNameChange = e => {
		let data = { ...this.state.data }
		data.senderName = e.target.value
		this.setState({
			data
		})
	}
  
	onEmailChange = e => {
		let data = { ...this.state.data }
		data.senderEmail = e.target.value
		this.setState( {data} )
	}
	onMessageChange = e => {
		let data = { ...this.state.data }
		data.senderMessage = e.target.value
		this.setState({
			data: data
		})
	}
  
	render() {
		let className = 'email'
		if (this.state.emailSent) {
			className = ' email_seccess'
		}
		const { data } = this.state
		return (
			<form className="contact_form"
				onSubmit={this.handleClick}
			>
				<input
					className='form_input'
					type="text"
					placeholder="Name"
					value={data.senderName}
					onChange={this.onNameChange}
					name="name"
					required
				/>
				<input
					className='form_input'
					type="email"
					placeholder="Enter email"
					value={data.senderEmail}
					onChange={this.onEmailChange}
					name="email"
					required
				/>
				<textarea
					className='form_input textArea'
					type="text"
					placeholder="Your Message"
					value={data.senderMessage}
					onChange={this.onMessageChange}
					name="message"
				/>
				<div className={className} id="success">
                Your message was sent successfully. Thanks!
				</div>
				<button type='submit' className="button submit" >SUBMIT</button>
			</form>
		)
	}
}
