import React, { useState, useRef, useEffect, useCallback } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

const TableItem = (props) => {
	const [mute, setMute] = useState(false);
	const audioRef = useRef();

	const playAudio = useCallback(() => {
		props.handleTimer(audioRef.current.duration, audioRef.current.currentTime)
		audioRef.current.play();
	});

	const pauseAudio = () => {
		audioRef.current.pause();
	};

	useEffect(() => {
		//create audioRef for every audio/mp3
		if (!props.data.audioRef) {
			props.data.audioRef = audioRef.current;
		}
		if (props.play) {
			playAudio();
		} else {
			pauseAudio();
		}
		//checking if loop button was pressed
		if(props?.isLoop){
			audioRef.current.loop = true;
		} else{
			audioRef.current.loop = false
		}

	}, [playAudio, props, props.currTime, props.isLoop]);

	useState(() => {
	}, [props.isLoop])

	//update the current time
	const handleUpdate = () => {
		props.setCurrTime(audioRef.current.currentTime);
	};

	//update mute state
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
					/>
					<div>{props.data.track.slice(14, props.data.track.length - 25)}</div>
					<Button onClick={handleMute}>
						{!mute && <VolumeUpIcon sx={{ color: 'black' }} />}
						{mute && <VolumeMuteIcon sx={{ color: 'white' }} />}
					</Button>
				</TableCell>
			</TableRow>
		</TableBody>
	);
};

export default TableItem;
