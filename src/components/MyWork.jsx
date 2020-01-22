import React, { Component } from 'react'
import '../css/App.css'
import '../css/components/MyWork.css'
import Header from './Header'
// import Projects from './Projects'
import ProjectGrid from './ProjectGrid'

import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import { Link } from '@material-ui/core'


export default class MyWork extends Component {
	render() {
		return (
			<div className='my_work_container'>
				<Header title='My Work' />
				<Typography color='textPrimary' align='center' className='text' variant="h5" component="h3">
					These are some of the projects I've worked on. Check out more of my work on <Link style={styles.link} href='https://github.com/mekhalajoshi/' target='_blank'>GitHub</Link>.
				</Typography>
				<div className='project_grid_container'>
					{/* <Projects /> */}
					<ProjectGrid />
				</div>
			</div>
		)
	}
}

const styles = {
	link: {
		color: '#E31B6D',
		cursor: 'pointer',
	}
}