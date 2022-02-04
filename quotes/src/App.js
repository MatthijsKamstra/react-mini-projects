import React, { useEffect, useState } from 'react';

import './App.css';

import jsonp from './jsonp';
import jsonp2 from './jsonp2';

function App() {

	const [data, setData] = useState(null);


	// oh, a react-angel somewhere died... 😈
	window.setQuote = (d) => {
		console.log(`setQuote(${JSON.stringify(d)})`);
		setData(d);
	}

	useEffect(() => {
		jsonp2(`https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=setQuote`);
	}, []);

	useEffect(() => {
		console.log('Setup effect App');
		console.log(data);
		return () => {
			console.log('Cleanup effect App');
		}
	}, [data]);

	function onTwitterHandler(e) {
		e.preventDefault();
		console.log('tweeet!');
		let tweetedLink = window.location.href;
		let getPostTitle = `"${data.quoteText}" ~ ${data.quoteAuthor}`;
		return window.open("http://twitter.com/intent/tweet?url=" + tweetedLink + "&text=" + getPostTitle + "&via=@matthijskamstra&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
	}

	function onHeartHandler(e) {
		e.preventDefault();
		console.log('like!');
		window.alert('Like doesn\'t work yet!')
	}

	return (
		<main>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<h1>quotes</h1>
						<div className="card">
							<img src="https://placeimg.com/1024/480/nature" className="card-img-top" alt="" />
							{(data) ? (
								<div className="card-body">
									<p className="card-text"><q id="quote-text">{data.quoteText}</q></p>
									<p className="card-text">
										<span id="quote-author">
											<a
												href={"https://en.wikipedia.org/wiki/" + data.quoteAuthor}
												target="_blank"
												rel="noreferrer">
												{data.quoteAuthor}<i class="fa fa-wikipedia-w"></i>
											</a>
										</span>
									</p>
									{/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
									<a href="#ss" id="btn-twitter" onClick={onTwitterHandler}><i className="fa fa-twitter"></i></a>
									<a href="#dd" id="btn-like" onClick={onHeartHandler}><i className="fa fa-heart"></i></a>
								</div>
							) : (null)}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /.container --> */}
		</main>
	);
}

export default App;
