import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

import * as bootstrap from 'bootstrap';

function App() {

	const ref = useRef(null);
	const toastRef = useRef(null);

	useEffect(() => {
		ref.current.value = "Current date is " + new Date();
	}, []);

	function onClickHandler(e) {
		e.preventDefault();
		ref.current.select();
		window.document.execCommand("copy");
		// needs to be update: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API

		var myToast = toastRef.current
		var bsToast = new bootstrap.Toast(myToast);
		bsToast.show();

		// // use the wrong way
		// let toastLiveExample = window.document.getElementById("liveToast");
		// let toast = new bootstrap.Toast(toastLiveExample);
		// toast.show();
	}

	return (
		<main>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<div id="">
							<div className="mb-3">
								<label htmlFor="js-output-textarea" className="form-label">Copy content from this textarea</label>
								<textarea
									ref={ref}
									className="form-control"
									id="js-output-textarea"
									rows="3"></textarea>
								<div className="d-grid gap-2">
									<a
										onClick={onClickHandler}
										id="js-copy-btn"
										className="btn btn-primary btn-block"
										href="#zzz"
										role="button">
										Use this button to copy text to clipboard</a>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="paste-area" className="form-label">Test it by pasting content here</label>
								<textarea placeholder="Click button and paste (Command+V) the clipboard in the area"
									className="form-control" id="paste-area" rows="3"></textarea>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button> --> */}
			</div>
			{/* <!-- /.container --> */}


			<div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
				<div
					ref={toastRef}
					id="liveToast"
					className="toast align-items-center"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
					data-bs-autohide="true">
					<div className="d-flex">
						<div className="toast-body">
							Copied message
						</div>
						{/* <!-- <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button> --> */}
					</div>
				</div>
			</div>

		</main>

	);
}

export default App;
