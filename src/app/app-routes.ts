import { Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { LoginGuard } from "./components/login/login.guard";
import { RegisterComponent } from "./components/register/register.component";
import { UserPageComponent } from "./components/user-page/user-page.component";

export const APP_ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "user-page",
    component: UserPageComponent,
    canActivate: [LoginGuard],
  },
  { path: "**", redirectTo: "/login" },
];
