import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface CoordinateData {
    name: string;
    inputValue: number
}
@Component({
    selector: 'app-pix-form',
    templateUrl: './pix-form.component.html',
    styleUrls: ['./pix-form.component.scss']
})
export class PixFormComponent {
    @Input('label') label: string;
    @Input('coordinate') coordinate: CoordinateData[];
    @Output('onChange') onChange = new EventEmitter();
    constructor() { }
    ngOnInit(): void {
    }
    changeData(e: { name: string, value: number }) {
        this.coordinate.filter(data => {
            if (data.name == e.name) {
                data.inputValue = e.value
            }
        })
        this.onChange.emit(this.coordinate);
    }
}
