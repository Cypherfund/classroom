import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import BlotFormatter from 'quill-blot-formatter';
import Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

Quill.register('modules/blotFormatter', BlotFormatter)
@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: [ './rich-text.component.scss' ],
  standalone: true,
  imports: [
    QuillModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextComponent {
  quillEditorModules = {};
  @Input() richText: string = '';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.quillEditorModules = {
      toolbar:[
        [{'font':[]}],
        ['bold','italic','underline'],
        [{'list':'ordered'},{'list':'bullet'}],
        [{'color':[]},{'background':[]}],
        ['link','image'],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }]
      ],
      blotFormatter: {}
    }
  }


}
