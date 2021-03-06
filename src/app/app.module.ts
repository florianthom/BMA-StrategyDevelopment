import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ROOT_REDUCERS, metaReducers } from "./store/reducers/root.reducer";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { BusinessStrategyComponent } from "./business-strategy/business-strategy.component";
import { BusinessStrategyModule } from "./business-strategy/business-strategy.module";
import { TestStepperComponent } from "./test-stepper/test-stepper.component";
import { MatStepperModule } from "@angular/material/stepper";
import { SharedModule } from "./shared/share.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, BusinessStrategyComponent, TestStepperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: "NgRx Book Store App"
      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    CoreModule,
    BusinessStrategyModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
