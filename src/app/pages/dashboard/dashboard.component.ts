import { Component, OnInit } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import OrgChart from '../../@core/org-chart/orgchart.js';


const datascource = {
  'id': '1',
    'name': 'Lao Lao',
    'title': 'general manager',
    'className': 'top-level',
    'children': [
      { 'id': '2', 'name': 'Bo Miao', 'title': 'department manager','className': 'middle-level' },
      { 'id': '3', 'name': 'Su Miao', 'title': 'department manager','className': 'middle-level',
        'children': [
          { 'id': '4', 'name': 'Tie Hua', 'title': 'senior engineer', 'className': 'bottom-level' },
          { 'id': '5', 'name': 'Hei Hei', 'title': 'senior engineer', 'className': 'bottom-level',
            'children': [
              { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer' , 'className': 'bottom-level'},
              { 'id': '7', 'name': 'Xiang Xiang', 'title': 'UE engineer' , 'className': 'bottom-level'}
            ]
          }
        ]
      },
      { 'id': '8', 'name': 'Yu Jie', 'title': 'department manager','className': 'middle-level' },
      { 'id': '9', 'name': 'Yu Li', 'title': 'department manager','className': 'middle-level' },
      { 'id': '10', 'name': 'Hong Miao', 'title': 'department manager','className': 'middle-level' },
      { 'id': '11', 'name': 'Yu Wei', 'title': 'department manager' ,'className': 'middle-level'},
      { 'id': '12', 'name': 'Chun Miao', 'title': 'department manager','className': 'middle-level' },
      { 'id': '13', 'name': 'Yu Tie', 'title': 'department manager','className': 'middle-level' }
    ]
  }
const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
      alert(`context menu for ${node.data.name}`);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit{
  public orgchart: any;
  public nextElementSibling: any;
  
  
  constructor() { }
  ngOnInit() {
    this.orgchart = new OrgChart({
      'chartContainer': '#chart-container',
      'data' : datascource,
      'nodeContent': 'title',
      'nodeID': 'id',
      'depth': 1,
      'direction': 'l2r',
      'pan': false,
      'zoom': false,
      'toggleSiblingsResp': false,
      'createNode': function(node, data) {
        let secondMenu = document.createElement('div');
        secondMenu.setAttribute('class', 'second-menu');
        secondMenu.innerHTML = `<div class="text" >dasd</div>`;
        // secondMenu.innerHTML = `<img class="avatar" src="../img/avatar/${data.id}.jpg">`;
        node.appendChild(secondMenu);
      }
    });
  }

 
  nodes = [
    {
      name: 'root1',
      children: [
        {
          name: 'child1'
        }, {
          name: 'child2'
        }
      ]
    },
    {
      name: 'root2',
      children: [
        {
          name: 'child2.1'
        }, {
          name: 'child2.2',
          children: [
            {
              id: 1001,
              name: 'subsub'
            }
          ]
        }
      ]
    },
    {
      name: 'root3',
      children: [
        {
          name: 'child3.1'
        }, {
          name: 'child3.2',
          children: [
            {
              id: 1003,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child3.3',
          children: [
            {
              id: 1004,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child3.4',
          children: [
            {
              id: 1005,
              name: 'subsub'
            }
          ]
        }
      ]
    },
    {
      name: 'root4',
      children: [
        {
          name: 'child4.1'
        }, {
          name: 'child4.2',
          children: [
            {
              id: 1006,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child4.3',
          children: [
            {
              id: 1007,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child4.4',
          children: [
            {
              id: 1008,
              name: 'subsub'
            }
          ]
        }
      ]
    },
    {
      name: 'root5',
      children: [
        {
          name: 'child5.1'
        }, {
          name: 'child5.2',
          children: [
            {
              id: 1009,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child5.3',
          children: [
            {
              id: 1010,
              name: 'subsub'
            }
          ]
        }, {
          name: 'child5.4',
          children: [
            {
              id: 1011,
              name: 'subsub'
            }
          ]
        }
      ]
    }
  ];

  options: ITreeOptions = {
    actionMapping
  };


  

  
}
