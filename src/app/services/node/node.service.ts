import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
// import {TreeTableModule} from 'primeng/treetable';

import {TreeNode} from 'primeng/api';
// export interface TreeNode {
//     data?: any;
//     children?: TreeNode[];
//     leaf?: boolean;
//     expanded?: boolean;
// }
@Injectable({
  providedIn: 'root'
})
export class NodeService {
    public demo:any
    constructor(public http:HttpService) { }
    getFiles() {
        return this.http.get('../../../assets/compoennt/files.json')
            .then(res => { 
                this.demo=res
             return this.demo
            });
    }
}
