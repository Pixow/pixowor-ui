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
    public position: string = 'right';

    // 功能信息提示
    public info = 'Inspector'
    public stateText: string = ' This is the inspector . Here you can enable or disable an Entity , . Here you can enable or disable an En'
    public useText: string = 'If you want to add behaviors to your Entity click on Add Component How are you Im fine thank '
    public bottonText = 'GOT IT'
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
        { label: 'Anim', icon: 'pi pi-sun' },
        { label: 'Animation (legacy)', icon: 'pi pi-sun' },
        { label: 'Audio Listener', icon: 'pi pi-print' },
        { label: 'Button', icon: 'pi pi-filter-fill' },
        { label: 'Camera', icon: 'pi pi-briefcase' },
        { label: 'Collision ', icon: 'pi pi-camera' },
        { label: 'Element', icon: 'pi pi-box' },
        { label: 'Layout Child', icon: 'pi pi-qrcode' },
        { label: 'Layout Group', icon: 'pi pi-th-large' },
        { label: 'Light', icon: 'pi pi-th-large' },
        { label: 'Model (legacy)', icon: 'pi pi-sun' },
        { label: 'Particle System', icon: 'pi pi-box' },
        { label: 'Render', icon: 'pi pi-share-alt' },
        { label: 'Rigid Body', icon: 'pi pi-prime' },
        { label: 'Screen', icon: 'pi pi-desktop' },
        { label: 'Script', icon: 'pi pi-arrows-h' },
        { label: 'Scrollbar', icon: 'pi pi-sort' },
        { label: 'Scroll View', icon: 'pi pi-server' },
        { label: 'Sound', icon: 'pi pi-volume-off' },
        { label: 'Sprite', icon: 'pi pi-slack' },
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
