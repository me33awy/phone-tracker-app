import React from "react";
import "./index.scss";
import Logo from "./logo.png"
const How = (props) => {
	return (
		<div id="how">
			<div className="how-logo">
				<img src={Logo} />
			</div>
			<h1 className="how-h1">PERMISSION WRITE_SECURE_SETTINGS</h1>
			<p>
				In order to activate Location-Services (GPS)
				when your phone gets lost a special Permission
				is needed. To activate this permission you need
				a PC. Here are the steps:
			</p>
			<ol>
				<li>
					Download adb from the web to your pc.
					There are also minimal adb packages.
				</li>
				<li>
					Enable Developer Settings on you device.
					Go to Settings -> About Phone and than
					click several times onto the Build
					Number. You will be asked to enter your
					password if you have one.
				</li>
				<li>
					Now enable USB-Debugging. Therefore go
					to System -> Developer Options ->
					Android debugging.
				</li>
				<li>Now plug your phone into the computer.</li>
				<li>
					Now open a terminal/cmd on your
					computer.
				</li>
				<li>
					Enter the following command: adb shell
					pm grant com.ntmsecurity.sova
					android.permission.WRITE_SECURE_SETTINGS
				</li>
			</ol>
			<p>
				Congratulations! If everything went right the
				button on sova app for this permission should
				glow green.
			</p>
			<h2 className="how-h2">Notes:</h2>
			<p>
				If adb returns an error you can try the
				following:
			</p>

			<ol>
				<li>Go to DeveloperSettings</li>
				<li>Enable USB-Debugging</li>
				<li>Enable Install via USB</li>
				<li>
					Enable USB-Debugging (Security Settings)
				</li>
				<li>
					Rerun adb shell pm grant
					com.ntmsecurity.sova
					android.permission.WRITE_SECURE_SETTINGS
				</li>
			</ol>
		</div>
	);
};

export default How;
