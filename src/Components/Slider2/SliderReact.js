import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import styled from 'styled-components';
import groomer2 from './groomer2.png';
import groomer3 from './groomer3.png';


const SliderReact = () => {
	return (
		<main className='SliderReact'>
			<Slideshow controles={true}>
				<Slide>
					<a href="#">
						<img src={groomer2} alt=""/>
					</a>
					<TextoSlide>
						<p>Pet Groomer</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer3} alt=""/>
					</a>
					<TextoSlide>
						<p>Pet Toys</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer2} alt=""/>
					</a>
					<TextoSlide>
						<p>Pet Groomer</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src={groomer3} alt=""/>
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