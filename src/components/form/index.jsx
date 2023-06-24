import React from "react";
import Logo from "../logo";
import { Container } from "react-bootstrap";
import Img from "../../assets/images/png/Frame.png";
import "./index.scss";
function Form() {
	return (
		<>
			<div id="form">
				<Container>
					<Logo />
					<h1>Let's Start</h1>
					<div class="flex">
						<div class="img">
							<img src={Img} />
						</div>
						<form method="">
							<div class="inputs">
								<input
									placeholder="Name: "
									type="text"
									required
								/>
								<input
									placeholder="Email: "
									type="email"
									requird
								/>
								<input
									placeholder="Phone: "
									type="tel"
									requird
								/>
								<input
									placeholder="Subject: "
									type="text"
									requird
								/>
							</div>
							<h2>
								Write your
								message
							</h2>
							<div>
								<input
									type="textarea"
									requird
								/>
							</div>
							<input
								type="submit"
								value="Send"
							/>
						</form>
					</div>
				</Container>
			</div>
		</>
	);
}
export default Form;
