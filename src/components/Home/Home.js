/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => {
	return (
		<div className='container'>
			<div className='hamburger-menu'>
				<div className='line line-1'></div>
				<div className='line line-2'></div>
				<div className='line line-2'></div>
			</div>
			<header className='header'>
				<div className='img-wrapper'>
					<img src='images/farmers.jpg' alt='test' />
				</div>
				<div className='banner'>
					<h1>Farmer's Dream</h1>
					<p>We work with Farmer and Agricultural improvements</p>
					<button>Discover now</button>
				</div>
			</header>
			<section className='sidebar'>
				<ul className='menu'>
					<li className='menu-item'>
						<a data-content='Home' href='#' className='menu-link'>
							Home
						</a>
					</li>
					<li className='menu-item'>
						<a data-content='About Us' Us href='#' className='menu-link'>
							About Us
						</a>
					</li>
					<li className='menu-item'>
						<a data-content='Team' href='#' className='menu-link'>
							Team
						</a>
					</li>
					<li className='menu-item'>
						<a data-content='Contact' href='#' className='menu-link'>
							Contact
						</a>
					</li>
				</ul>
				<div className='social-media'>
					<a href='#'>
						<i className='fab fa-facebook-f'></i>
					</a>
					<a href='#'>
						<i className='fab fa-instagram'></i>
					</a>
					<a href='#'>
						<i className='fab fa-twitter'></i>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Home;
