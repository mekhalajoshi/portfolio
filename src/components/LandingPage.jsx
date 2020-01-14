import React, { Component } from 'react'
import '../css/components/LandingPage.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class LandingPage extends Component {
	render() {
		return (
			<div className="landingPageDiv">
				<div className='landing_page_content_container'>
					<div className="landing_page_text">
						Hello, I'm <span className='name'>Mekhala Joshi</ span>.<br />
						I'm a Software Developer.<br />
					</div>
					<button className='button' onClick={() => this.props.onClick('myWork')}>View my work &nbsp;
						<ArrowForwardIcon className='right_icon' />
					</button>
				</div>

			</div >
		)
	}
}

