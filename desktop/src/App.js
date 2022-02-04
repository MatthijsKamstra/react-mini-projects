import React, { useState, useEffect, useRef } from "react";

// import "./App.scss";

import './App.css';

function App() {
	const quoteArray = ["The secret of getting ahead is getting started. – Mark Twain", "If you spend too much time thinking about a thing, you’ll never get it done. – Bruce Lee", "You miss 100 percent of the shots you never take. – Wayne Gretzky"];
	const bgArray = ["bg/faruk-kaymak-P_Ne56WEe5s-unsplash.jpg", "bg/simon-wilkes-py3Uw1QbK6A-unsplash.jpg", "bg/tim-swaan-eOpewngf68w-unsplash.jpg"];

	const [timeObj, setTimeObj] = useState({});
	const containerDesktop = useRef(null);
	const [quoteObj, setQuoteObj] = useState({});

	useEffect(() => {
		console.log('Setup effect App');
		startTime();
		randomBg();
		randomQuote();

	}, []);

	useEffect(() => {
		const myTimeout = setTimeout(startTime, 500);


		// console.log('Setup effect App');
		return () => {
			// console.log('Cleanup effect App');
			clearTimeout(myTimeout);
		}
	});

	function startTime() {
		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		let _h = checkTime(h);
		let _m = checkTime(m);
		let _s = checkTime(s);

		setTimeObj({ h: _h, m: _m, s: _s })


		// timeEl.innerHTML = _h + "<span className='dotdot'>:</span>" + _m + "<span className='dotdot'>:</span>" + _s;
		// let t = window.setTimeout($bind(this, startTime), 500);
	}


	function randomBg() {
		let url = bgArray[Math.floor(Math.random() * bgArray.length)];
		containerDesktop.current.style.backgroundImage = "url(" + url + ")";
		// containerDesktop.style.backgroundImage = "url(" + url + ")";
	}

	function randomQuote() {
		let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
		let rquote = randomQuote.split(" – ")[0];
		let rauthor = randomQuote.split(" – ")[1];
		setQuoteObj({ quote: rquote, author: rauthor })
	}

	function checkTime(i) {
		let str = "" + i;
		if (i < 10) {
			str = "0" + i;
		}
		return str;
	}

	return (
		<main>
			<div className="container-desktop" ref={containerDesktop}>
				<div className="container-fluid">

					<div className="row align-items-start justify-content-between">
						<div className="col-auto">
							<i className="fa fa-search fa-big"></i>
						</div>
						<div className="col-auto">
							{/* <!-- <i className="fa fa-sun-o fa-big"></i> --> */}
						</div>
					</div>

					<div className="row align-items-center justify-content-center">
						<div className="col-auto">
							<span id="time">{timeObj.h}<span className='dotdot'>:</span>{timeObj.m}<span className='dotdot'>:</span>{timeObj.s}</span>
						</div>
					</div>

					<div className="row align-items-end justify-content-between">
						<div className="col-auto">
							<div className="toggle-microphone">
								<i className="fa fa-microphone  fa-big"></i>
								{/* <!-- <i className="fa fa-microphone-slash  fa-big"></i> --> */}
							</div>
							{/* <!-- /.toggle-microphone --> */}
						</div>

						<div className="col-6">
							<div className="quote-wrapper">
								<span className="quote">
									{quoteObj.quote}
								</span><br />
								<span className="author">
									- <strong>{quoteObj.author}</strong>
								</span>
								<div className="toggle-heart">
									<i className="fa fa-heart-o  fa-big"></i>
									{/* <!-- <i className="fa fa-heart  fa-big"></i> --> */}
								</div>
								{/* <!-- /.toggle-heart --> */}
								<i className="fa fa-twitter  fa-big"></i>
							</div>
							{/* <!-- /.quote-wrapper --> */}
						</div>

						<div className="col-auto">
							<i className="fa fa-list-ul  fa-big"></i>
						</div>

					</div>

				</div>
				{/* <!-- /.container --> */}
			</div>
			{/* <!-- /.container-desktop --> */}
		</main>

	);
}

export default App;
