import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    mainWrapper: {
        width: "100%",
        margin: "10px 0px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.2s",

        "&:hover": {
            backgroundColor: "#5e5e5e",
        }
    },

    selectedChat: {
        backgroundColor: "#1e88e5",

        "&:hover": {
            backgroundColor: "#1e88e5",
        },
    },

    midddleContentWrapper: {
        marginLeft: "15px",
        width: "65%",
        height: "100%",
    },

    rightContentWrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        margin: "0px 10px",
    },

    overFlowText: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        height: "30px",
    },
}));

export default useStyles;