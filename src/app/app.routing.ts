import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "./core/core.module";
import { UserService } from "./core/services/user.service";

const routes: Routes = [
    { path: '', loadChildren: './user/user.module#UserModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
        CoreModule
    ],
    providers: [UserService]
})




export class RouterModuleApp { }