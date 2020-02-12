import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { PostCreateComponent } from './post/post-create/post-component';



//decorator
@NgModule({

    //all the module will be declare here
    imports: [
        BrowserModule
    ],

    // all the component and pipe
    declarations: [
        AppComponent,
        PostCreateComponent
    ],

    //only first component
    bootstrap: [
        AppComponent
    ],

    //all services
    providers: []


})


export class AppModule{

}
