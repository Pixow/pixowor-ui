import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
export interface addComponent {
    name: string
}
@Component({
    selector: 'app-pix-listbox',
    templateUrl: './pix-listbox.component.html',
    styleUrls: ['./pix-listbox.component.scss']
})
export class PixListboxComponent implements OnInit {
    public isshow: boolean = false;
    public zIndex: boolean = false;
    @Input() addData: MenuItem[] = []
    @Input() addTitle: string = ''
    @Output() onChange: EventEmitter<any> = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }
    addModules(item: {}) {
        // console.log(item)
        this.onChange.emit(item)
        this.hidden()
    }
    hidden() {
        this.zIndex = false
        this.isshow = false
    }
    addShow(e) {
        console.log(e)
        this.zIndex = true
        this.isshow = !this.isshow
    }
}
