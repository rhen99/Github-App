import React from "react";

export default function Form({ findUser }) {
	return (
		<div className="row">
			<div className="col-md-12">
				<h3>Find Users</h3>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Search for users..."
						onChange={e => findUser(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
