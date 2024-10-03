import {root} from './root'
import { homePage } from "./root/home";
import { registerPage } from './root/auth/register';
import { loginPage } from './root/auth/login';

export const routes = root.concat(
   homePage,
   registerPage,
   loginPage
);
