import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableItem from './TableItem';

const TracksTable = (props) => {
  const [timer, setTimer] = useState(0);
  return (
    <TableContainer>
      <Table aria-label="simple table">
        {props.data?.map((track, index) => (
          <TableItem
            play={props.play}
            key={index}
            i={index}
            data={track}
            timerState={{ timer, setTimer }}
            handleClickeMute={props.handleClickeMute}
            isLoop={props.isLoop}
            timer={props.timer}
            handleTimer={props.handleTimer}
            setCurrTime={props.setCurrTime}
            currTime={props.currTime}
          />
        ))}
      </Table>
    </TableContainer>
  )
}

export default TracksTable;