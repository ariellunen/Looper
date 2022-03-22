import React, { useState, useRef, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

let loop;

const TableItem = (props) => {
	const [mute, setMute] = useState(false);
	const audioRef = useRef();

	useEffect(() => {
		if (!props.data.audioRef) {
			props.data.audioRef = audioRef.current;	
		}
		if (props.play) {
			playAudio();
		} else {
			pauseAudio();
		}
		console.log(props.isLoop)
		loop = props.isLoop;

	}, [props, props.currTime, props.isLoop]);

	const playAudio = () => {
		props.handleTimer(audioRef.current.duration, audioRef.current.currentTime)
		audioRef.current.play();
	};

	const pauseAudio = () => {
		audioRef.current.pause();
	};

	const handleUpdate = () => {
		props.setCurrTime(audioRef.current.currentTime);
	};

	const handleMute = () => {
		if (mute) {
			setMute(false);
		} else {
			setMute(true);
		}
	};

	return (
		<TableBody style={{ backgroundColor: props.data.color }}>
			<TableRow>
				<TableCell align="center">
					<audio
						ref={audioRef}
						src={props.data.track}
						onTimeUpdate={handleUpdate}
						muted={mute}
						loop={loop}
					/>
					<div>{props.data.track.slice(14, props.data.track.length - 25)}</div>

					<Button onClick={handleMute}>
						{!mute && <VolumeUpIcon sx={{ color: 'black' }}/>}
						{mute && <VolumeMuteIcon sx={{ color: 'white' }}/>}
					</Button>
				</TableCell>
			</TableRow>
		</TableBody>
	);
};

export default TableItem;
