import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-pix-dropdown',
    templateUrl: './pix-dropdown.component.html',
    styleUrls: ['./pix-dropdown.component.scss']
})
export class PixDropdownComponent implements OnInit {
    public items: MenuItem[] = [];
    public isShow: boolean = false;
    public isTitle: boolean = false;
    public label: string = "Perspective";
    public temporary: string;
    public isBgColor: boolean;
    public isClearBgColor: boolean;
    public zIndex: boolean = false;
    @Input() perpectiveItem: MenuItem[]
    @Input() inputValue: string | number;
    @Output() onChange: EventEmitter<any> = new EventEmitter()

    constructor() { }

    ngOnInit(): void {
    }

    directions(parameter: any) {
        this.label = parameter
        this.isTitle = false
        if (parameter != this.temporary) {
            this.onChange.emit({ name: parameter })
        }
        this.hidden()
    }
    hidden() {
        this.zIndex = false
        if (this.isTitle) {
            this.label = this.temporary;
            this.temporary = ''
        }
        this.isShow = false
        this.isTitle = false
    }
    show() {
        if (this.isTitle) {
            this.zIndex = true
            this.onChange.emit({ name: 'Perspective' })
            this.temporary = this.label
            this.label = "Perspective"
            this.isTitle = false
            this.isShow = !this.isShow
        } else {
            this.zIndex = true
            this.temporary = this.label
            this.label = "Perspective"
            this.isShow = !this.isShow
            this.isTitle = true
        }
    }

}
