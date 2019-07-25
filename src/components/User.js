import React from "react";

export default function User({ user, repos }) {
	const fit = {
		width: "100%",
	};
	return (
		<>
			<div className="row">
				<div className="card card-body">
					<div className="row">
						<div className="col-md-3">
							<img src={user.avatar_url} alt="dp" style={fit} />

							<a href={user.html_url} className="btn btn-info btn-block mt-3">
								View Profile
							</a>
						</div>
						<div className="col-md-9">
							<h3>{user.name}</h3>
							<h6>
								<strong>{user.type}</strong>: @{user.login}
							</h6>
							<h6>
								<strong>Public Repos</strong>: {user.public_repos}
							</h6>
							<h6>
								<strong>Public Gists</strong>: {user.public_gists}
							</h6>
							<h6>
								<strong>Following</strong>: {user.following}{" "}
								<strong>Followers</strong>: {user.followers}
							</h6>
							<h6>
								<strong>{user.location !== null ? "Location:" : ""}</strong>{" "}
								{user.location !== null ? user.location : ""}
							</h6>
						</div>
					</div>
				</div>
				{console.log(repos)}
			</div>
			<div className="row">
				<div className="col-md-12">
					{repos.length > 0 ? <h1>All Repositories</h1> : ""}
					{repos.map(repo => (
						<div className="card card-body mb-3" key={repo.id}>
							<h3>{repo.name}</h3>
							<h6>
								<strong>Language</strong>: {repo.language}{" "}
								<strong>Forked</strong>: {repo.fork ? "Yes" : "No"}{" "}
								<strong>Has Issues</strong>: {repo.has_issues ? "Yes" : "No"}{" "}
								<strong>Has Pages</strong>: {repo.has_pages ? "Yes" : "No"}
							</h6>
							<div className="my-2">{repo.description}</div>
							{repo.html_url !== null ? (
								<a className="btn btn-primary mb-2" href={repo.html_url}>
									Visit Repo
								</a>
							) : (
								""
							)}

							{repo.homepage !== null ? (
								<a className="btn btn-danger" href={repo.homepage}>
									Visit Page
								</a>
							) : (
								""
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
