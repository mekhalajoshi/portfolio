import React, { Component } from 'react'
import '../css/components/LandingPage.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class LandingPage extends Component {
	render() {
		return (
			<div className="landing">
				<div className="landing-text">
					<div>Hello, I'm <span className="landing-name">Mekhala Joshi</span>.</div>
					<div>I'm a full-stack web developer.</div>
				</div>
				<button className='button' onClick={() => this.props.onClick('about')}>
					<span className="button-text">View my profile</span>
					<ArrowForwardIcon className='right-icon' />
				</button>
			</div >
		)
	}
}

