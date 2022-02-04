import React from "react";

import "./Loading.scss";

function Loading(props) {
	return (
		<div className="container d-flex justify-content-center">
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
}

export default Loading;