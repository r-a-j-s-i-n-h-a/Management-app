import React from "react";
import Nav from "../nav/Nav";
import Sideheader from "../Sideheader/Sideheader";
import { makeStyles } from "@material-ui/core/styles";
import Alltodo from "../../todo/alltodo/Alltodo";
import { reactLocalStorage } from "reactjs-localstorage";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    marginTop:"100px",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Alltask(props) {
    const classes = useStyles();
    if(!reactLocalStorage.get('token')){
      return(
        <Navigate to="/logi" />
      )
    }

    return (
      <div className={classes.root}>
        <Nav />
        <Sideheader />
        <main className={classes.content}>
          <Alltodo/>
        </main>
      </div>
    );
}

export default Alltask;
