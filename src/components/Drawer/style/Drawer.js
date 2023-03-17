
import { styled } from "@mui/material/styles";
const drawerWidth = 440;

export const Time = styled("div")(() => ({
    fontSize: "12px",
    fontWeight: 600,
    color: "#1fa855",
  }));
  
  export const Badge = styled("div")(() => ({
    fontSize: "12px",
    fontWeight: 600,
    color: "white",
    backgroundColor: "#25d366",
    borderRadius: "50%",
    width: "20px",
    textAlign: "center",
  }));
  
  export const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: "767px",
      backgroundColor: "#f0f1f1",
      borderBottom: "7px solid #25d366",
      // padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  
 export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    backgroundColor: "#f0f1f1",
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  }));
