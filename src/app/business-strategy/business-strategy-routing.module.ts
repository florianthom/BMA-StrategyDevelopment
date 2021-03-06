import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessStrategyComponent } from "./business-strategy.component";
import { PrivacyComponent } from "../static-sites/privacy/privacy.component";
import { V1StrategyDevelopmentComponent } from "./v-1-strategy-development/strategy-development.component";
import { MaturityModelComponent } from "../maturity-model/maturity-model.component";
import { TestStepperComponent } from "../test-stepper/test-stepper.component";

const routes: Routes = [
  {
    path: "",
    component: BusinessStrategyComponent
  },
  {
    path: "v1",
    component: V1StrategyDevelopmentComponent
  },
  {
    path: ":consistencyMatrix_id",
    component: BusinessStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessStrategyRoutingModule {}
