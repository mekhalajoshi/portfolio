import React, { Component } from 'react'
import ScrollReveal from 'scrollreveal'
import Grid from '@material-ui/core/Grid'
import ProjectCard from './ProjectCard'
import '../css/components/MyWork.css'


export default class ProjectGrid extends Component {
	componentDidMount() {

		ScrollReveal().reveal('.tile-0',
			{
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				viewFactor: 0,
				mobile: false,
			}, 150)
		ScrollReveal().reveal('.tile-1',
			{
				delay: 100,
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				viewFactor: 0,
				mobile: false,

			}, 150)
		ScrollReveal().reveal('.tile-2',
			{
				delay: 200,
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				mobile: false,
				viewFactor: 0,
			}, 150)
		ScrollReveal().reveal('.tile-3',
			{
				delay: 300,
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				mobile: false,
				viewFactor: 0,
			}, 150)
		ScrollReveal().reveal('.tile-4',
			{
				delay: 400,
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				mobile: false,
				viewFactor: 0,
			}, 150)
		ScrollReveal().reveal('.tile-5',
			{
				delay: 500,
				duration: 600,
				distance: '300px',
				easing: 'ease-out',
				origin: 'left',
				reset: false,
				scale: 1,
				mobile: false,
				viewFactor: 0,
			}, 150)
	}
	render() {
		return (
			<div className='project_grid_container'>
				<Grid
					container
					justify="center"
					spacing={5}
					style={styles.GridContainer}
				// className='GridContainer'
				>
					<Grid item className='tile-0' >
						<ProjectCard
							link={projects[0].Link}
							title={projects[0].Title}
							poster={projects[0].Poster}
							description={projects[0].Description}
							tags={projects[0].Tags}
						/>
					</ Grid>
					<Grid item className='tile-1'  >
						<ProjectCard
							link={projects[1].Link}
							title={projects[1].Title}
							poster={projects[1].Poster}
							description={projects[1].Description}
							tags={projects[1].Tags}
						/>
					</ Grid>
					<Grid item className='tile-2'  >
						<ProjectCard
							link={projects[2].Link}
							title={projects[2].Title}
							poster={projects[2].Poster}
							description={projects[2].Description}
							tags={projects[2].Tags}
						/>
					</ Grid>
					<Grid item className='tile-3'  >
						<ProjectCard
							link={projects[3].Link}
							title={projects[3].Title}
							poster={projects[3].Poster}
							description={projects[3].Description}
							tags={projects[3].Tags}
						/>
					</ Grid>
					{/* <Grid item className='tile-4'  >
						<ProjectCard
							link={projects[4].Link}
							title={projects[4].Title}
							poster={projects[4].Poster}
							description={projects[4].Description}
							tags={projects[4].Tags}
						/>
					</ Grid>
					<Grid item className='tile-5'  >
						<ProjectCard
							link={projects[5].Link}
							title={projects[5].Title}
							poster={projects[5].Poster}
							description={projects[5].Description}
							tags={projects[5].Tags}
						/>
					</ Grid> */}

				</Grid>

			</div>
		)
	}
}
const projects = [
	{
		Title: 'Image Search',
		Poster: 'webdev.jpg',
		Description: 'A React app to search for images implemented using React Hooks and Material-UI by Google. ',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Image-Search/',
	},
	{
		Title: 'Movie Database',
		Poster: 'webdev.jpg',
		Description: 'This app uses the OMDb API which is a RESTful web service to obtain movie information, content and images.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Movie-Search/',
	},
	{
		Title: 'Music Artist Details',
		Poster: 'webdev.jpg',
		Description: 'A Flux pattern is used to manage app data which it pulls from audiodb API to display artist information.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Music-Search/',
	},
	{
		Title: 'Todo List',
		Poster: 'webdev.jpg',

		Description: 'TODO list app is self explanatory. It is implemented using the Symantic-UI.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Todo-List/',
	},
	// {
	// 	Title: 'Calculator',
	// 	Poster: 'webdev.jpg',
	// 	Description: 'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.',
	// 	Tags: 'React',
	// 	Link: 'calculator',
	// },
	// {
	// 	Title: 'Music Details',
	// 	Poster: 'webdev.jpg',
	// 	Description: ' Rebel Alliance in a risky move to steal the Death Star plans.',
	// 	Tags: 'React',
	// 	Link: 'musicDetails',
	// },

]
const styles = {
	GridContainer: {
		display: 'flex',
		margin: 'auto',
		alignContent: 'flex-start',
		width: 'auto',
	},
}
