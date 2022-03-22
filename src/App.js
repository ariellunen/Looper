import React, { useState } from "react";
import track1 from "./Tracks/_tambourine_shake_higher.mp3";
import track2 from "./Tracks/ALL TRACK.mp3";
import track3 from "./Tracks/B VOC.mp3";
import track4 from "./Tracks/DRUMS.mp3";
import track5 from "./Tracks/HE HE VOC.mp3";
import track6 from "./Tracks/HIGH VOC.mp3";
import track7 from "./Tracks/JIBRISH.mp3";
import track8 from "./Tracks/LEAD 1.mp3";
import track9 from "./Tracks/UUHO VOC.mp3";
import TracksTable from "./Components/Table";
import Fotter from "./Components/Fotter";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Cursor from "./Components/Cursor";

const App = () => {
	const audio = [
		// { track: track1, color: "#e3342f", audioRef: null },
		// { track: track2, color: "#f6993f", audioRef: null },
		// { track: track3, color: "#ffed4a", audioRef: null },
		// { track: track4, color: '#38c172', audioRef: null },
		// { track: track5, color: '#4dc0b5', audioRef: null },
		// { track: track6, color: '#3490dc', audioRef: null },
		// { track: track7, color: '#6574cd', audioRef: null },
		{ track: track8, color: "#9561e2", audioRef: null },
		{ track: track9, color: "#f66d9b", audioRef: null },
	];

	const [isLoop, setLoop] = useState(true);
	const [timer, setTimer] = useState(0);
	const [currTime, setCurrTime] = useState(0);
	const [play, setPlay] = useState(false);

	const stop = () => {
		audio.forEach((track) => (track.audioRef.currentTime = 0));
	};

	const loop = () => {
		setLoop(!isLoop)
	};

	console.log(isLoop)
	const handlePlay = (bool) => {
		setPlay(bool);
	};

	const handleTimer = (duration, currTime) => {
		setTimer(duration)
		setCurrTime(currTime)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
					position: "relative",
					borderBottom: (t) => `1px solid ${t.palette.divider}`,
				}}
			>
				<Toolbar>
					<Typography variant="h4" color="inherit" noWrap>
						Moveo name
					</Typography>
				</Toolbar>
			</AppBar>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Cursor currTime={currTime} />
					<TracksTable data={audio} play={play} isLoop={isLoop} timer={timer} handleTimer={handleTimer} currTime={currTime} setCurrTime={setCurrTime} />
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Fotter handlePlay={handlePlay} play={play} stop={stop} loop={loop} isLoop={isLoop} />
					</Box>
				</Paper>
			</Container>
		</React.Fragment>
	);
};

export default App;
