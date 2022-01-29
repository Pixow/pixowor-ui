import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'pixowor-ui';
    // button 按钮
    public buttonHint: string = 'Open PlayCanvas Store'  //  button 按钮传值

    // 功能信息提示
    public tipText1: string = ' This is the inspector . Here you can enable or disable an Entity , . Here you can enable or disable an En'
    public tipText2: string = 'If you want to add behaviors to your Entity click on Add Component How are you Im fine thank '

    // 输入框 
    public getInputValue: number = 0
    public inputPlaceholder: string = "X"
    // dropdown 
    public perpectiveItem: {}[] = [
        { label: 'Top' },
        { label: 'Bottom' },
        { label: 'Front' },
        { label: 'Back' },
        { label: 'Left' },
        { label: 'Right' },
        { label: 'ball' },
        { label: 'camera' },
    ]
    // 列表框 
    public addData: {}[] = [
        { label: 'Anim', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Animation (legacy)', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Audio Listener', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Button', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Camera', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Collision ', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Element', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Layout Child', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Layout Group', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Light', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Model (legacy)', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Particle System', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Render', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Rigid Body', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Screen', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Script', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Scrollbar', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Scroll View', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Sound', icon: 'assets/compoennt/icon/1.png' },
        { label: 'Sprite', icon: 'assets/compoennt/icon/1.png' },
    ]
    public addTitle = "ADD COMPONENT"
    // 表单
    public showData: { name: string; inputValue: number }[] = [
        { name: 'X', inputValue: 0 },
        { name: 'Y', inputValue: 0 },
        { name: 'Z', inputValue: 0 },
    ]
    public formHeader: string = 'Position'
    onButton() {
        console.log('你点击了子组件的按钮！')
    }
    changeValue(e) {
        console.log(e)
    }
    getOnChangedValue(e) {
        console.log(e)
    }

    getFeature(e) {
        console.log(e)
    }
    logCoordinate(data) {
        console.log(data)
    }
}
