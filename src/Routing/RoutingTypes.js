import { URL } from "../constant";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const publicRoutes = [
  { path: URL.LOGIN_PAGE, Component: Login },
  { path: URL.REGISTER_PAGE, Component: Register },
];
export const privateRoutes = [{ path: URL.HOME_PAGE, Component: Home }];
