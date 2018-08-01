import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                component: HomeComponent,
                path: "home"
            },
            {
                component: HomeComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
