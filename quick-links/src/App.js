
import { useEffect, useRef } from 'react';
import './App.css';
import { useLocalStorage, removeLocalStorage } from './hooks/useLocalStorage';
import { superHeroName } from './util';


function App() {

	const basisArr = [
		"https://haxe.org/",
		"https://getbootstrap.com/docs/5.1/getting-started/introduction/",
		"https://github.com/MatthijsKamstra?tab=repositories",
		"https://www.disneyplus.com/en-gb/",
		"https://www.netflix.com/",
		"https://tv.kpn.com/",
		"https://ficons.fiction.com/reference.html",
		"https://forecastapp.com/1389043/schedule/team",
		"https://fonkamsterdam1.harvestapp.com/time",
		"https://calendar.google.com/calendar/",
		"https://translate.google.com/"
	];

	const storageName = 'test-QuickLinks';
	const [json, setJson] = useLocalStorage(storageName, "");

	const ref = useRef(null);
	const textAreaRef = useRef(null);

	// useEffect(() => {
	// 	console.log('Setup effect App');
	// 	console.log(ref.current);
	// 	return () => {
	// 		console.log('Cleanup effect App');
	// 	}
	// }, []);

	// ____________________________________ update ____________________________________





	function updateOutput() {
		json.sort(function (a, b) {
			if (a.counter < b.counter) {
				return 1;
			} else {
				return -1;
			}
		});
		textAreaRef.current.value = JSON.stringify(json);

		// this.getLinks();
	}


	function getList() {
		let arr = [];
		for (let i = 0; i < json.length; i++) {
			const obj = json[i];
			arr.push(
				<li key={i} className="list-group-item d-flex justify-content-between align-items-start">
					<a
						href={obj.url}
						className="quicklink-btn"
						title={obj.name}
						target="_blank"
						data-uniq={obj._id}
						data-name={obj.name}
						data-counter={obj.counter} rel="noreferrer">
						{obj.url}
					</a>
					<a
						onClick={onEditHandler}
						href="#sss"
						data-uniq={obj._id}
						className="quicklink-edit-btn btn btn-sm btn-outline-danger"><i className="fa fa-edit"></i></a>
					<span className="badge bg-primary rounded-pill">{obj.counter}</span>
				</li>
			);
		}
		return arr;
	}

	// ____________________________________ onHandlers ____________________________________



	function onClearHandler(e) {
		e.preventDefault();
		console.log('onClearHandler');
		removeLocalStorage(storageName)
		window.location.reload(true);
	}

	function onReadHandler(e) {
		e.preventDefault();
		console.log('onReadHandler');
		console.log(json);
	}

	function onRandomHandler(e) {
		e.preventDefault();
		console.log('onRandomHandler');
		let item = basisArr[Math.floor(Math.random() * basisArr.length)];
		ref.current.value = item;
		onAddHandler(e);
	}

	function onAddHandler(e) {
		e.preventDefault();
		console.log('onAddHandler');

		let counter = 0;
		for (let i = 0; i < json.length; i++) {
			const element = json[i];
			if (element.counter >= counter)
				counter = element.counter + 1;
		}

		let _superHeroName = superHeroName();
		let obj = {
			_id: `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
			url: (ref.current.value),
			name: _superHeroName,
			created: new Date().toISOString(),
			counter: counter
		};
		let localItemArr = [...json];
		localItemArr.push(obj);
		localItemArr.sort(function (a, b) {
			if (a.counter < b.counter) {
				return 1;
			} else {
				return -1;
			}
		});
		setJson(localItemArr);
		updateOutput();
	}

	function onEditHandler(e) {
		e.preventDefault();
		console.log('WIP onEditHandler');
		window.alert('WIP');
	}

	return (
		<main>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<h1>Quick Links</h1>
						<div className="input-group mb-3">
							<input
								ref={ref}
								id="js-input"
								type="text"
								className="form-control"
								placeholder="Add link"
								aria-label="Add link"
								aria-describedby="js-btn-add" />
							<button
								onClick={onAddHandler}
								className="btn btn-dark"
								type="button"
								id="js-btn-add"

							>Add Link</button>
						</div>
					</div>

					<div className="col-12 mb-3">
						<div className="btn-group" role="group" aria-label="Basic example">
							<button id="js-btn-clear" className="btn btn-danger" onClick={onClearHandler}>clear</button>
							<button id="js-btn-read" className="btn btn-dark" onClick={onReadHandler}>read</button>
							<button id="js-btn-random" className="btn btn-warning" onClick={onRandomHandler}>Add random</button>
						</div>
					</div>

					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
						<textarea
							ref={textAreaRef}
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"></textarea>
					</div>

					<div className="col-12">
						<div id="js-output">
							<ul className="list-group">
								{getList()}
							</ul>
						</div>
					</div>


				</div>
			</div>
			{/* <!-- /.container --> */}
		</main>

	);
}

export default App;
