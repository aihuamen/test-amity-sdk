import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send'
import TextField from "@mui/material/TextField";
import { useMessageComposer } from "../hooks/useMessageComposer";
import React from "react";

interface IMC {
  channelId: string
  msgRef: React.RefObject<HTMLUListElement>
}

const MessageComposer: React.FC<IMC> = ({channelId, msgRef}) => {
  const { message, handleChange, handleSend } = useMessageComposer(channelId, msgRef)
  return (
    <form autoComplete="off" onSubmit={handleSend}>
      <Grid container style={{ padding: 16, height: 80 }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            placeholder="Type Here"
            autoComplete="off"
            fullWidth
            value={message}
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton color="primary" aria-label="add" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default MessageComposer