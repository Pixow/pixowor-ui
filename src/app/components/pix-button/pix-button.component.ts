import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-pix-button',
    templateUrl: './pix-button.component.html',
    styleUrls: ['./pix-button.component.scss']
})
export class PixButtonComponent implements OnInit {
    public isShow: boolean = true;
    public top: boolean = false;
    public bottom: boolean = false;
    public left: boolean = false;
    public right: boolean = false;
    @Input() hint: string;
    @Input() positionStyle: string;
    @Output() clickButton: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }
    onclick() {
        this.clickButton.emit()
    }
    enterButton(e) {
        console.log(this.positionStyle)
        if (this.positionStyle == '') {
            const DOM_HEIGHT = 60
            const clientY = e.clientY - e.offsetY - DOM_HEIGHT;
            if (clientY >= 0) {
                this.top = true;
            } else {
                this.bottom = true;
            }
            this.isShow = false
        } else {
            switch (this.positionStyle) {
                case 'top':
                    this.top = true;
                    break;
                case 'right':
                    this.right = true;
                    break;
                case 'bottom':
                    this.bottom = true;
                    break;
                case 'left':
                    this.left = true;
                    break
                default:
                    this.top = true
            }
            this.isShow = false
        }

    }
    leaveButton() {
        this.isShow = true
    }

}
