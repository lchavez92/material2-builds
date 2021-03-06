/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ViewContainerRef, Attribute, ContentChildren, ElementRef, Input, ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { CdkNestedTreeNode, CdkTree, CdkTreeNodeDef, CdkTreeNode, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTreeModule } from '@angular/cdk/tree';
import { mixinTabIndex, mixinDisabled, MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { DataSource } from '@angular/cdk/collections';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators/map';
import { take } from 'rxjs/operators/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class MatTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
MatTreeNodeOutlet.decorators = [
    { type: Directive, args: [{
                selector: '[matTreeNodeOutlet]'
            },] },
];
/** @nocollapse */
MatTreeNodeOutlet.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _MatTreeNodeMixinBase = mixinTabIndex(mixinDisabled(CdkTreeNode));
const /** @type {?} */ _MatNestedTreeNodeMixinBase = mixinTabIndex(mixinDisabled(CdkNestedTreeNode));
/**
 * Wrapper for the CdkTree node with Material design styles.
 */
class MatTreeNode extends _MatTreeNodeMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, tabIndex) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this.role = 'treeitem';
        this.tabIndex = Number(tabIndex) || 0;
    }
}
MatTreeNode.decorators = [
    { type: Directive, args: [{
                selector: 'mat-tree-node',
                exportAs: 'matTreeNode',
                inputs: ['disabled', 'tabIndex'],
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'level',
                    '[attr.role]': 'role',
                    'class': 'mat-tree-node'
                },
                providers: [{ provide: CdkTreeNode, useExisting: MatTreeNode }]
            },] },
];
/** @nocollapse */
MatTreeNode.ctorParameters = () => [
    { type: ElementRef, },
    { type: CdkTree, },
    { type: undefined, decorators: [{ type: Attribute, args: ['tabindex',] },] },
];
MatTreeNode.propDecorators = {
    "role": [{ type: Input },],
};
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 */
class MatTreeNodeDef extends CdkTreeNodeDef {
}
MatTreeNodeDef.decorators = [
    { type: Directive, args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]
            },] },
];
/** @nocollapse */
MatTreeNodeDef.ctorParameters = () => [];
MatTreeNodeDef.propDecorators = {
    "data": [{ type: Input, args: ['matTreeNode',] },],
};
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */
class MatNestedTreeNode extends _MatNestedTreeNodeMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, tabIndex) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this.tabIndex = Number(tabIndex) || 0;
    }
}
MatNestedTreeNode.decorators = [
    { type: Directive, args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node',
                },
                inputs: ['disabled', 'tabIndex'],
                providers: [
                    { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
                    { provide: CdkTreeNode, useExisting: MatNestedTreeNode }
                ]
            },] },
];
/** @nocollapse */
MatNestedTreeNode.ctorParameters = () => [
    { type: ElementRef, },
    { type: CdkTree, },
    { type: undefined, decorators: [{ type: Attribute, args: ['tabindex',] },] },
];
MatNestedTreeNode.propDecorators = {
    "node": [{ type: Input, args: ['matNestedTreeNode',] },],
    "nodeOutlet": [{ type: ContentChildren, args: [MatTreeNodeOutlet,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Wrapper for the CdkTree padding with Material design styles.
 */
class MatTreeNodePadding extends CdkTreeNodePadding {
}
MatTreeNodePadding.decorators = [
    { type: Directive, args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]
            },] },
];
/** @nocollapse */
MatTreeNodePadding.ctorParameters = () => [];
MatTreeNodePadding.propDecorators = {
    "level": [{ type: Input, args: ['matTreeNodePadding',] },],
    "indent": [{ type: Input, args: ['matTreeNodePaddingIndent',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */
class MatTree extends CdkTree {
}
MatTree.decorators = [
    { type: Component, args: [{selector: 'mat-tree',
                exportAs: 'matTree',
                template: `<ng-container matTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'mat-tree',
                    'role': 'tree',
                },
                styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;padding:0 24px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: CdkTree, useExisting: MatTree }]
            },] },
];
/** @nocollapse */
MatTree.ctorParameters = () => [];
MatTree.propDecorators = {
    "_nodeOutlet": [{ type: ViewChild, args: [MatTreeNodeOutlet,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 */
class MatTreeNodeToggle extends CdkTreeNodeToggle {
    constructor() {
        super(...arguments);
        this.recursive = true;
    }
}
MatTreeNodeToggle.decorators = [
    { type: Directive, args: [{
                selector: '[matTreeNodeToggle]',
                host: {
                    '(click)': '_toggle($event)',
                },
                providers: [{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]
            },] },
];
/** @nocollapse */
MatTreeNodeToggle.ctorParameters = () => [];
MatTreeNodeToggle.propDecorators = {
    "recursive": [{ type: Input, args: ['matTreeNodeToggleRecursive',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
class MatTreeModule {
}
MatTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CdkTreeModule, CommonModule, MatCommonModule],
                exports: MAT_TREE_DIRECTIVES,
                declarations: MAT_TREE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MatTreeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 */
class MatTreeFlattener {
    /**
     * @param {?} transformFunction
     * @param {?} getLevel
     * @param {?} isExpandable
     * @param {?} getChildren
     */
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    /**
     * @param {?} node
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    _flattenNode(node, level, resultNodes, parentMap) {
        const /** @type {?} */ flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            this.getChildren(node).pipe(take(1)).subscribe(children => {
                children.forEach((child, index) => {
                    let /** @type {?} */ childParentMap = parentMap.slice();
                    childParentMap.push(index != children.length - 1);
                    this._flattenNode(child, level + 1, resultNodes, childParentMap);
                });
            });
        }
        return resultNodes;
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     * @param {?} structuredData
     * @return {?}
     */
    flattenNodes(structuredData) {
        let /** @type {?} */ resultNodes = [];
        structuredData.forEach(node => this._flattenNode(node, 0, resultNodes, []));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     * @param {?} nodes
     * @param {?} treeControl
     * @return {?}
     */
    expandFlattenedNodes(nodes, treeControl) {
        let /** @type {?} */ results = [];
        let /** @type {?} */ currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach((node) => {
            let /** @type {?} */ expand = true;
            for (let /** @type {?} */ i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        });
        return results;
    }
}
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 */
class MatTreeFlatDataSource extends DataSource {
    /**
     * @param {?} treeControl
     * @param {?} treeFlattener
     * @param {?=} initialData
     */
    constructor(treeControl, treeFlattener, initialData = []) {
        super();
        this.treeControl = treeControl;
        this.treeFlattener = treeFlattener;
        this._flattenedData = new BehaviorSubject([]);
        this._expandedData = new BehaviorSubject([]);
        this._data = new BehaviorSubject(initialData);
    }
    /**
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data.next(value);
        this._flattenedData.next(this.treeFlattener.flattenNodes(this.data));
        this.treeControl.dataNodes = this._flattenedData.value;
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        const /** @type {?} */ changes = [
            collectionViewer.viewChange,
            /** @type {?} */ ((this.treeControl.expansionModel.onChange)),
            this._flattenedData
        ];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this.treeFlattener.expandFlattenedNodes(this._flattenedData.value, this.treeControl));
            return this._expandedData.value;
        }));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */
class MatTreeNestedDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this._data = new BehaviorSubject([]);
    }
    /**
     * Data for the nested treee
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) { this._data.next(value); }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        return merge(...[collectionViewer.viewChange, this._data])
            .pipe(map(() => {
            return this.data;
        }));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { _MatTreeNodeMixinBase, _MatNestedTreeNodeMixinBase, MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource, MatTreeNodeOutlet as ɵa13 };
//# sourceMappingURL=tree.js.map
