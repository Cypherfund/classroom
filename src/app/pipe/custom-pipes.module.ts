import {SafePipe} from "./DomSanitiser/safe.pipe";
import {NgModule} from "@angular/core";

@NgModule({
  exports: [SafePipe],
  declarations: [SafePipe]
})
export class CustomPipesModule {}
