import { Avatar, Box, Card, CardContent, Grid, ListItem, Typography } from "@mui/material"

interface IMessage {
  data: Amity.Message
}

const Message: React.FC<IMessage> = ({data}) => {
  return (
    <ListItem >
      <Grid container style={{ paddingTop: 10 }}>
        <Grid
          item
          xs={12}
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Avatar alt={data.userId}>{data.userId.charAt(0).toUpperCase()}</Avatar>
          <Box style={{ marginTop: -5 }}>
            <Typography
              variant="caption"
              style={{
                display: "inline",
                color: "grey",
                paddingLeft: 10,
              }}
            >
              {data.userId}
            </Typography>
            <Typography>
              <span
                style={{
                  hyphens: "auto",
                  wordBreak: "break-word",
                  display: "block",
                  background: "#ffa500",
                  borderRadius: "10px",
                  padding: "8px 10px",
                  margin: "0px 10px",
                }}
              >
                {JSON.stringify(data.data)}
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default Message