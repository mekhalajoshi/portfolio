import React, { Component } from 'react'
import '../css/App.css'
import Header from './Header'
import Projects from './Projects'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import { Link } from '@material-ui/core'


export default class MyWork extends Component {


	render() {
		return (
			<div className='root'>
				<Header title='My Work' />
				<Typography align='center' className='text' variant="h5" component="h3">
					Theese are some of the projects I've worked on. Check out more of my work on <Link style={styles.link} href='https://github.com/mekhalajoshi/' target='_blank'>GitHub</Link>.
				</Typography>
				<div className='sectionDiv' >

					<Projects />
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