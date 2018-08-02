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
                data : {role : 'user'}
            },
            {
                component: SantaListComponent,
                path: "santa-admin",
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
