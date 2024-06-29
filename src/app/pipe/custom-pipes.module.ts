import {SafePipe} from "./DomSanitiser/safe.pipe";
import {NgModule} from "@angular/core";
import {DateFormatPipe} from "./date-format.pipe";

@NgModule({
  exports: [SafePipe, DateFormatPipe],
  declarations: [SafePipe, DateFormatPipe]
})
export class CustomPipesModule {}
