import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import groomer2 from './groomer2.png';
import groomer3 from './groomer3.png';


const SliderReact = () => {
	return (
		<main className='SliderReact'>
			<Slideshow controles={true}>
				<Slide>
					<a href="#">
						<img src={groomer2} alt="groomer2"/>
					</a>
					<TextoSlide>
						<p>Pet Groomer</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer3} alt="groomer3"/>
					</a>
					<TextoSlide>
						<p>Pet Toys</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer2} alt="groomer2"/>
					</a>
					<TextoSlide>
						<p>Pet Groomer</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer3} alt="groomer3"/>
					</a>
					<TextoSlide>
						<p>Pet Toys</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}


 
export default SliderReact;