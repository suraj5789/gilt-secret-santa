import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SantaListComponent } from './components';

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                component: SantaListComponent,
                path: "home"
            },
            {
                component: SantaListComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
