import { UserListResolver } from './services';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SantaListComponent, HomeComponent } from './components';

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                component: HomeComponent,
                path: "home"
            },
            {
                component: SantaListComponent,
                path: "santa-user",
                resolve : {
                    data : UserListResolver
                },
                data : {role : 'user'}
            },
            {
                component: SantaListComponent,
                path: "santa-admin",
                resolve : {
                    data : UserListResolver
                },
                data : {role : 'admin'}
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            { path: '**', redirectTo: '/home', }])
    ]
})
export class AppRoutingModule { }
