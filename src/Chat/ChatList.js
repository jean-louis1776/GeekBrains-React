import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
    },
    ListItemText: {
        // color: '#fff',
    },
    inline: {
        display: 'inline',
    },
}));

const ChatList = (chatList) => {
    const classes = useStyles();

    return <List className={classes.root}>
        {chatList.chatArray.map((chat, i) =>
        (<div key={i}>
            <ListItem alignItems="flex-start" button className={classes.listItem}>
                <ListItemAvatar>
                    <Avatar src={chat.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={chat.chatName}
                    className={classes.ListItemText}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {chat.id}
                            </Typography>
                            {chat.chatText}
                        </React.Fragment>
                    }
                />
                <IconButton aria-label="delete" className={classes.deleteButton}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
        )
        )}
    </List>
};

ChatList.propTypes = {
    chatArray: PropTypes.array.isRequired,
};

export default ChatList;