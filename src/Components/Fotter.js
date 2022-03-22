import React from "react";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import StopIcon from "@mui/icons-material/Stop";
import ReplayIcon from "@mui/icons-material/Replay";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
const Fotter = (props) => {
	const handleOnClick = () => {
		props.handlePlay(!props.play);
	};

	return (
		<React.Fragment>
			<Button onClick={handleOnClick} variant="contained" sx={{ mt: 3, ml: 1 }}>
				{!props.play && <PlayCircleOutlineIcon />}
				{props.play && <PauseCircleOutlineIcon />}
			</Button>
			<Button variant="contained" sx={{ mt: 3, ml: 1 }}>
				<StopIcon onClick={props.stop} />
			</Button>
			{props.isLoop && <Button onClick={props.loop} variant="contained" sx={{ mt: 3, ml: 1 }}>
				<ReplayIcon />
			</Button>}
			{!props.isLoop && <Button onClick={props.loop} variant="contained" sx={{ mt: 3, ml: 1 }}>
				<DoNotDisturbAltIcon sx={{ color: 'red' }} />
			</Button>}
		</React.Fragment>
	);
};

export default Fotter;
