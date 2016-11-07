import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class LandingPage extends Component {

	componentWillMount() {
		// if the user is authenticated (has JWT in localStorage)
		// then push to '/userProfile' route.
		if (this.props.authenticated) {
			browserHistory.push(`/userProfile`);
		}
	}

	render() {
		return (
			<div id="landingPage">

				<div className="features">
					<div className="container">

						<div className="row">
							<div className="col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3">
								<h1>Point of Sale System</h1>
								<p className="lightOrange">This app was built for pharmacies in Vietnam and Indonesia.
								   Its purpose is to help pharmacies manage their inventories and sales
									 digitally instead of using pen and paper.
								</p>
							</div>
						</div>

						<div className="row">

							<div className="col-lg-4 col-md-4 wow bounceInLeft">
								<i className="fa fa-user-md fa-3x lightPurple"></i>
								<h4 className="lightOrange">Add Employees</h4>
								<p>
								   Employees can create their own sub-profiles and login.
								   Their sales will be tracked live and justified with store wide data.
								</p>

								<i className="fa fa-tags fa-3x turqoise"></i>
								<h4 className="lightOrange">Add Products</h4>
								<p>Add products to your inventory to lay the foundation of an organized pharmacy.</p>

								<i className="fa fa fa-exchange fa-3x slateGray"></i>
								<h4 className="lightOrange">Make Sales</h4>
								<p>Immediately begin making sales after login through the user friendly sell page.</p>
							</div>

							<div className="col-lg-4 col-md-4 wow fadeIn" data-wow-delay="0.2s" align="center">
								<img className="img-responsive" src="../../images/spilled_bottle.png"/>
							</div>

							<div className="col-lg-4 col-md-4 wow bounceInRight">
								<i className="fa fa-calculator fa-3x secondaryBlue"></i>
								<h4 className="lightOrange">Manage Inventory</h4>
								<p>All products have a category which can be used to filter search results and easily locate a product's data.</p>

								<i className="fa fa-line-chart fa-3x indianRed"></i>
								<h4 className="lightOrange">Track Sales</h4>
								<p>
								   Track revenue data by day, week, and month in the reporting section.
								   See which items are the top 10 sellers of the day, week, and month.
									 Beautiful charts make sales data come alive.
								</p>

								<i className="fa fa-money fa-3x limeGreen"></i>
								<h4 className="lightOrange">Maximize Profits</h4>
								<p>Streamline inventory management and sales data to maximize profits and eliminate headaches.</p>
							</div>
						</div>
					</div>
				</div>


				<footer className="footer">
		      <div className="container">
		        <div className="row">
		          <div className="col-sm-4 col-xs-6">
		            <p className="name">Copyright &copy; Marcus Hurney</p>
		          </div>
		          <div className="col-sm-4 col-xs-6">
		            <ul className="social-links">
		              <li><a href="https://www.facebook.com/marcus.hurney"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></li>
		              <li><a href="#"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></li>
		              <li><a href="#"><i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i></a></li>
		              <li><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
		            </ul>
		          </div>
		          <div className="col-sm-4 col-xs-12 scroll-to-top-button">
		            <a href="#cover"><i className="fa fa-chevron-circle-up fa-3x" aria-hidden="true"></i></a>
		          </div>
		        </div>
		      </div>
		    </footer>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.user.authenticated };
}

export default connect(mapStateToProps, null)(LandingPage);
