import React, { Component } from 'react'
import '../css/components/Projects.css'

export default class Projects extends Component {
	render() {
		return (

			<div className="container">
				<a href='https://mekhalajoshi.github.io/Todo-List/' target='_blank' rel="noopener noreferrer">
					<div className="items">
						<div className="icon-wrapper">
							<i className="fa fa-file-text-o"></i>
						</div>
						<div className="project-name">
							<p>Todo</p>
						</div>
					</div>
				</a>

				<a href='https://mekhalajoshi.github.io/Movie-Search/' target='_blank' rel="noopener noreferrer">
					<div className="items">
						<div className="icon-wrapper">
							<i className="fa fa-file-text-o"></i>
						</div>
						<div className="project-name">
							<p>Movies</p>
						</div>
					</div>
				</a>
				<a href='https://mekhalajoshi.github.io/Image-Search/' target='_blank' rel="noopener noreferrer">
					<div className="items">
						<div className="icon-wrapper">
							<i className="fa fa-file-text-o"></i>
						</div>
						<div className="project-name">
							<p>Images</p>
						</div>
					</div>
				</a>
				<a href='https://mekhalajoshi.github.io/Music-Search/' target='_blank' rel="noopener noreferrer">
					<div className="items">
						<div className="icon-wrapper">
							<i className="fa fa-file-text-o"></i>
						</div>
						<div className="project-name">
							<p>Music</p>
						</div>
					</div>
				</a>

			</div>

		)
	}
}


