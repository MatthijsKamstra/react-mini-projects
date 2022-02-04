import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import Loading from './components/Loading';

function App() {

	const [profile, setProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [sortedRepo, setSortedRepo] = useState([]);


	/**
	 * need to revisit...
	 * how to automate more calls to the repos api
	 *
	 * I cheated here, I only have 170 repos... (but what if I have 201 😱)
	 */
	useEffect(() => {
		let arr = [];
		Promise.all([
			fetch(`https://api.github.com/users/MatthijsKamstra`)
				.then((r) => r.json())
				.then(data => {
					console.log(data);
					setProfile(data);
				})
				.catch(error => {
					console.log(error);
				}),
			fetch(`https://api.github.com/users/MatthijsKamstra/repos?page=1&per_page=100`)
				.then((r) => r.json())
				.then(data => {
					console.log(data);
					arr = arr.concat(data);
					setRepos(arr);
				})
				.catch(error => {
					console.log(error);
				}),
			fetch(`https://api.github.com/users/MatthijsKamstra/repos?page=2&per_page=100`)
				.then((r) => r.json())
				.then(data => {
					console.log(data);
					arr = arr.concat(data);
					setRepos(arr);
				})
				.catch(error => {
					console.log(error);
				}),
		])
			.catch(err => {
				console.error(err);
			});
	}, []);



	useEffect(() => {
		console.log('Setup effect App');

		console.log(repos);


		for (let i = 0; i < repos.length; i++) {
			const repo = repos[i];
			// let obj = json.data[i];
			if (repo.pushed_at == null) {
				continue;
			}
			repo._created_at = dateConverter(repo.created_at);
			repo._updated_at = dateConverter(repo.updated_at);
			repo._pushed_at = dateConverter(repo.pushed_at);

			repo._created_at_time = new Date(repo.created_at).getTime();
			repo._updated_at_time = new Date(repo.updated_at).getTime();
			repo._pushed_at_time = new Date(repo.pushed_at).getTime();
		}


		console.log(repos[0]);

		return () => {
			console.log('Cleanup effect App');
		}
	}, [repos]);

	function sortRepoList() {
		let arr = [];

		repos.sort((a, b) => {
			if (a._pushed_at_time < b._pushed_at_time) return true;
			else return false;
		})

		for (let i = 0; i < repos.length; i++) {
			const repo = repos[i];
			let home = null;
			if (repo.fork !== true) {
				if (repo.homepage != null) {
					home = <i className="fa fa-home"></i>;
				}
			}
			arr.push(
				<a
					key={i}
					href={repo.html_url}
					target="_blank"
					className="list-group-item list-group-item-action"
					rel="noreferrer">{home} {repo.name}</a>
			)
		}
		return arr;
	}

	function dateConverter(str) {
		return str.replace("T", " ").replace("Z", "");
	}

	return (
		<main>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<h1>Gitlab</h1>
						{/* <!-- <img src="https://placeimg.com/1200/480/nature" className="rounded img-fluid pb-3" alt="Responsive image"> --> */}
					</div>
				</div>

				<div className="row justify-content-center" id="js-gitlab-profile">

					{(profile) ? (
						<>
							<div className="col-auto">
								<img src={profile.avatar_url} className="rounded" alt='' /><br />
							</div>

							<div className="col-6">
								Name: {profile.name}<br />
								Bio: {profile.bio}<br />
								Public repos: {profile.public_repos}<br />
								Blog: <a href={profile.blog} target="_blank" rel="noreferrer">Check out blog</a><br />
								Repos: <a href={profile.html_url + "?tab=repositories"} target="_blank" rel="noreferrer">Check out repos</a><br />
							</div>
						</>
					) : (<Loading />)}

				</div>

				<div className="row justify-content-center" id="js-gitlab-projects">
					{(repos) ? (
						<div className="list-group">
							{sortRepoList()}
						</div>
					) : (<Loading />)}
				</div>
			</div>
			{/* <!-- /.container --> */}

		</main>


	);
}

export default App;
