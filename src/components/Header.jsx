import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import ScrollReveal from 'scrollreveal'
import '../css/components/Header.css'

export default class Header extends Component {
	componentDidMount() {
		ScrollReveal().reveal('.section-title-container',
			{
				duration: 700,
				distance: '1000px',
				easing: 'ease-out',
				origin: 'left',
				reset: true,
				// scale: 0.5,
				viewFactor: 0,
			}, 150)
	}

	render() {
		return (
			<div className="section-title-container" >
				<div className="section-title"  >
					<Typography variant="h2" component="h2" align='center'>
						<span className="title">{this.props.title} </span>
						<div className="header-bar"></div>
					</Typography>
				</div>
			</div>
		)
	}
}
