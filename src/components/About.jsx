import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import '../css/App.css'
import '../css/components/About.css'

import { Link } from '@material-ui/core'
import Header from './Header'

export default class About extends Component {
	render() {

		return (
			<div className='root'>
				<Header title='About Me' />
				<div className='sectionDiv' >
					<div className='about-top'>
						<div className='about-image'>
							<img className='avtar' src="MekhalaJoshi2.jpg" alt="Avatar"></img>
						</div>
						<div className='about-text'>
							<Typography className='about-me-text' variant="h5" component="h2">
								Hi there! I am Mekhala Joshi. <br />
								I am an AWS certified Software Developer based in Toronto, Canada.
								<br /><br />
								I am passionate about building clean software that
								improves the lives of those around me.
								Although my professional path has taken many twists
								and turns I've never stopped engaging my love of
								building things; websites, apps, furniture.
								<br /><br />
								You can check out my work on <Link style={styles.link} target='_blank' href='https://github.com/mekhalajoshi/'>GitHub </Link>
								or view some of it <Link style={styles.link} onClick={() => this.props.onClick('two')}>here</Link>.<br /><br />
								Feel free to contact me via email at  mekhalajoshi@gmail.com
							</Typography>
						</div>
					</div>

				</div>

			</div>
		)
	}
}

const styles = {
	link: {
		color: '#00FFFF',
	}
}