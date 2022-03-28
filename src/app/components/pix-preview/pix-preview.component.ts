import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { NodeService } from 'src/app/services/node/node.service';
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
  public isMessage: boolean = false;

  public deleteFileName: string = '';
  constructor(private nodeService: NodeService) {
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
    console.log(this);
    this.nodeService.getFiles().then((files) => (this.files = files.data));
    this.items = [
      {
        label: 'New Asset',
        icon: 'pi pi-plus',

        items: [
          {
            label: 'Upload',
            icon: 'pi pi-ellipsis-h',
          },
          {
            label: 'Folder',
            icon: 'pi pi-folder',
            command: (event) => this.newFolder(event),
          },
          {
            label: 'Css',
            icon: 'pi pi-file-excel',
            command: (event) => this.newFile(event),
          },
          {
            label: 'HTML',
            icon: 'pi pi-pencil',
            command: (event) => this.newFile(event),
          },
          {
            label: 'JSON',
            icon: 'pi pi-reddit',
            command: (event) => this.newFile(event),
          },
          {
            label: 'Material',
            icon: 'pi pi-vimeo',
            command: (event) => this.newFile(event),
          },
          {
            label: 'Script',
            icon: 'pi pi-stop',
            command: (event) => this.newFile(event),
          },
          {
            label: 'Shader',
            icon: 'pi pi-file-excel',
            command: (event) => this.newFile(event),
          },
        ],
      },
      {
        label: 'Copy',
        icon: 'pi pi-calendar-plus',
        command: (event) => this.copyFile(event),
      },
      {
        label: 'Paste',
        icon: 'pi pi-calendar',
        command: (event) => this.pasteFile(event),
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.deleteFile(),
      },
    ];
  }
  // 内容的显示与隐藏
  contentHidden() {
    this._contentHidden = true;
    this._contentShow = true;
  }
  contentShow() {
    this._contentShow = false;
    this._contentHidden = false;
  }

  //  Files are presented in different ways
  girdView(parame: string) {
    this.girdViewSmallShow = false;
    this.girdListShow = false;
    this.girdViewShow = false;
    if (parame == 'large') {
      this.girdViewShow = true;
    } else if (parame == 'small') {
      this.girdViewSmallShow = true;
    } else {
      this.girdListShow = true;
    }
  }

  //  条件筛选
  conditionQuery(e) {
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

  // 右键菜单功能
  newFile(file: TreeNode) {
    this.files.forEach((parent) => {
      this.addFromTree(parent, this.files, file);
    });
  }
  addFromTree(item, parent, file) {
    if (item == this.selectedFile) {
      parent.forEach((element) => {
        if (element == this.selectedFile && element.children) {
          if (file.children) {
            element.children.push({
              label: `New ${file.label}`,
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder',
              children: [],
            });
          } else {
            element.children.push({
              label: `New ${file.item.label}`,
              icon: file.item.icon,
            });
          }
        }
      });
      //   this.nodesShow = [];
      return;
    }
    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        this.addFromTree(child, item.children, file);
      });
    }
  }
  newFolder(parame) {
    let folder = {
      label: parame.item.label,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [],
    };

    this.files.forEach((parent) => {
      this.addFromTree(parent, this.files, folder);
    });
  }
  copyFile(a) {
    console.log(this.selectedFile, a);
  }
  pasteFile(e) {
    console.log(e);
  }
  deleteFile() {
    if (this.selectedFile) {
      this.deleteFileName = this.selectedFile.label;
      this.isMessage = true;
    }
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
  onCancle() {
    this.isMessage = false;
  }
  onDelete() {
    this.files.forEach((parent) => {
      this.deleteFromTree(parent, this.files);
    });
    this.isMessage = false;
  }

  // 文件展示区域  右键菜单展示时调用的函数
  onShow(parame) {
    this.selectedFile = parame;
  }
  rightShow() {
    if (this.selectedFile != undefined) {
      if (this.selectedFile.children != undefined) {
        this.nodesShow = this.selectedFile.children;
      }
    }
  }
  // 双击文件夹显示子文件
  doubleClick(item) {
    if (item.children != undefined) {
      this.nodesShow = item.children;
    }
  }
  // 单击文件
  onlyClick(item) {
    this.selectedFile = item;
  }
}
