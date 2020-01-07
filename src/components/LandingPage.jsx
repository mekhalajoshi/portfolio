import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import '../css/components/LandingPage.css'


export default class LandingPage extends Component {
	render() {
		return (
			<div style={styles.landingDiv}>
				<Typography style={styles.Typography} align='center' variant="h2" component="h2">
					Hello! I'm <span style={styles.name}>Mekhala Joshi</ span>.<br />
					I'm a Software Developer.<br />
					<div className="LandingPage_items">
						<div className="project-name">
							<button onClick={() => this.props.onClick('two')}>View my work</button>
						</div>
					</div>
				</Typography>
			</div>
		)
	}
}

const styles = {
	landingDiv: {
		width: '70%',
		height: '710px',
		margin: 'auto',
		// backgroundColor: ' rgba(40, 44, 52, 0)',

	},
	Typography: {
		color: '#fff',
		margin: '0',
		position: 'absolute',
		top: '50%',
		left: '50%',
		fontSize: '3vw',
		transform: 'translate(-50%, -50%)',
	},
	name: {
		color: '#00FFFF',
		// color: '#d71559',
		// color: '#f5c000',
		// textShadow: '2px 2px #f5c000',
		fontWeight: '400',
	},
	Button: {
		color: 'white',
		outline: 'none',
		textTransform: 'none',
		fontSize: '1.5vw',
		border: '1px ridge #6DF3F3',
		borderRadius: '0px',
	},

}