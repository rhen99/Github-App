import React, { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Form from "./components/Form";
import Axios from "axios";
import NotFound from "./components/NotFound";
import User from "./components/User";

function App() {
	const [output, setOutput] = useState();
	const findUser = name => {
		if (name === "") {
			setOutput("");
			return;
		}
		Axios.get(`https://api.github.com/users/${name}`, {
			client_id: "7b98ec3141b1934eec4a",
			client_secret: "a08d20b30799692621fdc8b1fafcb8ec43b1a023",
		})
			.then(res => {
				return Axios.get(`https://api.github.com/users/${name}/repos`, {
					client_id: "7b98ec3141b1934eec4a",
					client_secret: "a08d20b30799692621fdc8b1fafcb8ec43b1a023",
				})
					.then(res2 => {
						setOutput(<User user={res.data} repos={res2.data} />);
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				setOutput(<NotFound />);
				console.log(err);
			});
	};
	return (
		<>
			<Navbar />
			<div className="container">
				<Form findUser={findUser} />
				<div className="row">
					<div className="col-md-12">{output}</div>
				</div>
			</div>
		</>
	);
}

export default App;
