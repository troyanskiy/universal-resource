import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { HttpClientModule } from '@angular/common/http';
import { TestResource } from '../resource/test.resource';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        HttpClientModule,
        ResourceModule.forRoot(),
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ]),
        TransferHttpCacheModule,
    ],
    providers: [TestResource],
    bootstrap: [AppComponent]
})
export class AppModule {
}
