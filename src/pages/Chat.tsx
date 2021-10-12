import { Divider, Grid as MuiGrid, List, Typography } from "@mui/material"
import { styled } from "@mui/system"
import Message from "../components/Message"
import MessageComposer from "../components/MessageComposer"
import { useChat } from "../hooks/useChat"

const Grid = styled(MuiGrid)(({theme}) => ({
  width: "85%",
  height: "85vh",
  background: "#e5e5e5",
  borderRadius: "10px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  padding: 8
}))


const Chat: React.FC<{channelId: string}> = ({channelId}) => {
  const {channel, messages, msgRef} = useChat(channelId)
  return (
    <Grid container justifyContent="center">
      <MuiGrid item xs={12}>
        <Typography variant="h2" >Chat la</Typography>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <Typography variant="h5" >Channel: {channel?.channelId}</Typography>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <Typography variant="h5" >Member: {channel?.memberCount}</Typography>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <Divider />
      </MuiGrid>
      <MuiGrid item xs={12}>
        <List ref={msgRef} sx={{
          height: "calc(60vh - 80px)",
          overflowY: "auto",
          overflowX: "auto",
          padding: 1
        }}>
          {messages.map(m => <Message data={m}/>)}
        </List>
        <MessageComposer channelId={channelId} msgRef={msgRef}/>
      </MuiGrid>
    </Grid> 
  )
}

export default Chat