import {SafePipe} from "./DomSanitiser/safe.pipe";
import {NgModule} from "@angular/core";
import {DateFormatPipe} from "./date-format.pipe";
import {RemoveSpacePipe} from "./remove-space.pipe";

@NgModule({
  exports: [SafePipe, DateFormatPipe, RemoveSpacePipe],
  declarations: [SafePipe, DateFormatPipe, RemoveSpacePipe]
})
export class CustomPipesModule {}
