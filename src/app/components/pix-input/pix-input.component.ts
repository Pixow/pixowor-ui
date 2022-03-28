import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pix-input',
  templateUrl: './pix-input.component.html',
  styleUrls: ['./pix-input.component.scss'],
})
export class PixInputComponent implements OnInit {
  @ViewChild('getDom') getDom: ElementRef; // 获取dom 元素  用于隐藏光标
  @Input() inputValue: number;
  @Input() label: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  public addValue = true;
  public isAddMouse: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  testShow() {
    this.addValue = false;
    this.getDom.nativeElement.requestPointerLock(); // 锁定光标并隐藏
    this.isAddMouse = true;
    return false;
  }
  mouseUp() {
    this.addValue = true;
    this.isAddMouse = false;
    document.exitPointerLock(); // 松开鼠标显示光标
    this.onChange.emit({ name: this.label, value: Number(this.inputValue) });
  }
  mouseMove(e) {
    if (this.isAddMouse) {
      let movementValue = e.movementX;
      let transitionValue = Number(this.inputValue);
      this.inputValue = Number(movementValue + transitionValue);
    }
  }
  keyupValue(e) {
    e.target.value = e.target.value
      .replace(/[^\d^\.]+/g, '')
      .replace('.', '$#$')
      .replace(/\./g, '')
      .replace('$#$', '.');
    this.onChange.emit({ name: this.label, value: Number(this.inputValue) });
  }
}
