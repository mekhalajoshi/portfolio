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
				>
					<Grid item className='tile-0' >
						<ProjectCard
							link={projects[0].Link}
							title={projects[0].Title}
							poster={projects[0].Poster}
							description={projects[0].Description}
							tags={projects[0].Tags}
							GitHubLink={projects[0].GitHubLink}
						/>
					</ Grid>
					<Grid item className='tile-1'  >
						<ProjectCard
							link={projects[1].Link}
							title={projects[1].Title}
							poster={projects[1].Poster}
							description={projects[1].Description}
							tags={projects[1].Tags}
							GitHubLink={projects[1].GitHubLink}
						/>
					</ Grid>
					<Grid item className='tile-2'  >
						<ProjectCard
							link={projects[2].Link}
							title={projects[2].Title}
							poster={projects[2].Poster}
							description={projects[2].Description}
							tags={projects[2].Tags}
							GitHubLink={projects[2].GitHubLink}
						/>
					</ Grid>
					<Grid item className='tile-3'  >
						<ProjectCard
							link={projects[3].Link}
							title={projects[3].Title}
							poster={projects[3].Poster}
							description={projects[3].Description}
							tags={projects[3].Tags}
							GitHubLink={projects[3].GitHubLink}
						/>
					</ Grid>

				</Grid>

			</div>
		)
	}
}
const projects = [
	{
		Title: 'Todo List',
		Poster: 'webdev.jpg',
		Description: 'React Todo app consumes RESTful Microservices created using AWS serverless architecture.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Todo-List/',
		GitHubLink: 'https://github.com/mekhalajoshi/Todo-List',
	},
	{
		Title: 'Trello Clone',
		Poster: 'webdev.jpg',
		Description: 'Trello-Clone uses React on the frontend and AWS serverless architecture on backend.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/trello-clone/',
		GitHubLink: 'https://github.com/mekhalajoshi/trello-clone',
	},
	{
		Title: 'Image Search',
		Poster: 'webdev.jpg',
		Description: 'A React app to search for images implemented using React Hooks and Material-UI by Google. ',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Image-Search/',
		GitHubLink: 'https://github.com/mekhalajoshi/Image-Search',

	},
	{
		Title: 'Movie Database',
		Poster: 'webdev.jpg',
		Description: 'This app uses the OMDb API which is a RESTful web service to obtain movie information, content and images.',
		Tags: 'React',
		Link: 'https://mekhalajoshi.github.io/Movie-Search/',
		GitHubLink: 'https://github.com/mekhalajoshi/Movie-Search',

	},

]
const styles = {
	GridContainer: {
		display: 'flex',
		margin: 'auto',
		alignContent: 'flex-start',
		width: 'auto',
	},
}
