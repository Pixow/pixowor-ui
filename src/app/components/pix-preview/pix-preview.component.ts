import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';
interface City {
  name: string;
}
@Component({
  selector: 'app-pix-preview',
  templateUrl: './pix-preview.component.html',
  styleUrls: ['./pix-preview.component.scss'],
  providers: [MessageService],
})
export class PixPreviewComponent implements OnInit {
  files: TreeNode[];
  selectedFile: TreeNode;
  items: MenuItem[];
  nodesShow: any;
  cities: City[];
  selectedCity: City;
  public changeValue: string = '';
  public girdViewShow: boolean = true;
  public girdViewSmallShow: boolean = false;
  public girdListShow: boolean = false;
  public _contentHidden: boolean = false;
  public _contentShow: boolean = false;
  constructor(
  ) {
    this.cities = [
      { name: 'All' },
      { name: 'Animation' },
      { name: 'Audio' },
      { name: 'Binary' },
      { name: 'Container' },
      { name: 'Cubemap' },
      { name: 'Css' },
      { name: 'Font' },
      { name: 'Font (source)' },
      { name: 'Folder' },
      { name: 'Json' },
      { name: 'Html' },
      { name: 'Material' },
      { name: 'Model' },
      { name: 'Model(source)' },
      { name: 'Render' },
      { name: 'Script' },
      { name: 'Shader' },
      { name: 'Sprite' },
      { name: 'Template' },
      { name: 'Text' },
      { name: 'Texture' },
      { name: 'texture(source)' },
      { name: 'Texture Atlas' },
      { name: 'Texture Atlas (Source)' },
      { name: 'Wasm' },
    ];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'New Asset',
        icon: 'pi pi-plus',
        command: (event) => this.newFile(this.selectedFile),
      },
      {
        label: 'Copy',
        icon: 'pi pi-calendar-plus',
        command: (event) => this.copyFile(event),
      },
      {
        label: 'Paste',
        icon: 'pi pi-calendar',
        command: (event) => this.pasteFile(),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.deleteFile(event),
      },
    ];
  }


  contentHidden() {
    this._contentHidden = true;
    this._contentShow = true;
  }
  contentShow() {
    this._contentShow = false;
    this._contentHidden = false;
  }
  newFile(file: TreeNode) {
    // this.messageService.add({ severity: 'info', summary: 'Node Details', detail: file.label });
    console.log(file);
  }
  copyFile(a) {
    console.log(this.selectedFile, a);
  }
  pasteFile() {
    console.log(this.selectedFile);
  }
  // 删除节点
  deleteFile(event) {
    // console.log(event.target);
    // this.confirmationService.confirm({
    //   target: event.target,
    //   message: '你确定要删除吗？',
    // icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.files.forEach((parent) => {
    //       this.deleteFromTree(parent, this.files);
    //     });
    //     this.nodesShow = [];
    //   },
    //   reject: () => {
    //     //reject action
    //   },
    // });
       this.files.forEach((parent) => {
          this.deleteFromTree(parent, this.files);
        });
  }

  /* 展出菜单时调用的回调函数 */
    onShow(parame) {
        this.selectedFile = parame;
  }

  deleteFromTree(obj, parent) {
    if (obj == this.selectedFile) {
      let index = parent.findIndex((o) => o.children == obj.children);
      parent.splice(index, 1);
    //   this.nodesShow = [];
      return;
    }
    if (obj.children && obj.children.length > 0) {
      obj.children.forEach((child) => {
        this.deleteFromTree(child, obj.children);
      });
    }
  }
  rightShow() {
    if (this.selectedFile != undefined) {
      if (this.selectedFile.children != undefined) {
        this.nodesShow = this.selectedFile.children;
      }
    }
  }
  addNode(e) {
    console.log(e.node);
  }
  //  Files are presented in different ways
  girdView() {
    this.girdViewShow = true;
    this.girdViewSmallShow = false;
    this.girdListShow = false;
  }
  girdViewSmall() {
    this.girdViewSmallShow = true;
    this.girdViewShow = false;
    this.girdListShow = false;
  }
  girdList() {
    this.girdListShow = true;
    this.girdViewShow = false;
    this.girdViewSmallShow = false;
  }
  //  条件筛选
  changValue(e) {
    console.log(e.value.name);
  }
  // 模糊查询事件
  fuzzySearch(e) {
    if (this.selectedFile != undefined) {
      if (e.target.value != '') {
        this.nodesShow = [];
        let reg = RegExp(e.target.value);
        this.nodesShow = this.selectedFile.children.filter((item) =>
          item.label.match(reg)
        );
      } else {
        this.nodesShow = this.selectedFile.children;
      }
    }
  }

  //delete  node
  //   onDrop(event) {
  //     this.confirmationService.confirm({
  //       target: event.target,
  //       message: 'Are you sure that you want to proceed?',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //         //confirm action
  //       },
  //       reject: () => {
  //         //reject action
  //       },
  //     });
  //   }
}
