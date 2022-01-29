import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pix-button',
    templateUrl: './pix-button.component.html',
    styleUrls: ['./pix-button.component.scss']
})
export class PixButtonComponent implements OnInit {

    @Input() hint: string;
    public isShow: boolean = true
    public top: boolean = false
    public bottom: boolean = false
    @Output() clickButton: EventEmitter<any> = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }
    onclick() {
        this.clickButton.emit()
    }
    enterButton(e) {
        const clientY = e.clientY - e.offsetY - 60;
        if (clientY >= 0) {
            this.top = true;
        } else {
            this.bottom = true;
        }
        this.isShow = false
    }
    leaveButton() {
        this.isShow = true
    }

}
