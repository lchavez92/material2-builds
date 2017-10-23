/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/material/core'), require('rxjs/BehaviorSubject'), require('@angular/cdk/rxjs'), require('rxjs/observable/empty')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/cdk/table', '@angular/common', '@angular/material/core', 'rxjs/BehaviorSubject', '@angular/cdk/rxjs', 'rxjs/observable/empty'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.table = global.ng.material.table || {}),global.ng.core,global.ng.cdk.table,global.ng.common,global.ng.material.core,global.Rx,global.ng.cdk.rxjs,global.Rx.Observable));
}(this, (function (exports,_angular_core,_angular_cdk_table,_angular_common,_angular_material_core,rxjs_BehaviorSubject,_angular_cdk_rxjs,rxjs_observable_empty) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MatTable = _angular_cdk_table.CdkTable;
/**
 * Wrapper for the CdkTable with Material design styles.
 */
var MatTable = (function (_super) {
    __extends(MatTable, _super);
    function MatTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTable.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-table',
                    exportAs: 'matTable',
                    template: _angular_cdk_table.CDK_TABLE_TEMPLATE,
                    styles: [".mat-table{display:block}.mat-header-row,.mat-row{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:48px;padding:0 24px}.mat-cell,.mat-header-cell{flex:1;overflow:hidden;word-wrap:break-word}"],
                    host: {
                        'class': 'mat-table',
                    },
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /**
     * @nocollapse
     */
    MatTable.ctorParameters = function () { return []; };
    return MatTable;
}(_MatTable));

/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MatCellDef = _angular_cdk_table.CdkCellDef;
var _MatHeaderCellDef = _angular_cdk_table.CdkHeaderCellDef;
var _MatColumnDef = _angular_cdk_table.CdkColumnDef;
var _MatHeaderCell = _angular_cdk_table.CdkHeaderCell;
var _MatCell = _angular_cdk_table.CdkCell;
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var MatCellDef = (function (_super) {
    __extends(MatCellDef, _super);
    function MatCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatCellDef.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[matCellDef]',
                    providers: [{ provide: _angular_cdk_table.CdkCellDef, useExisting: MatCellDef }]
                },] },
    ];
    /**
     * @nocollapse
     */
    MatCellDef.ctorParameters = function () { return []; };
    return MatCellDef;
}(_MatCellDef));
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var MatHeaderCellDef = (function (_super) {
    __extends(MatHeaderCellDef, _super);
    function MatHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderCellDef.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[matHeaderCellDef]',
                    providers: [{ provide: _angular_cdk_table.CdkHeaderCellDef, useExisting: MatHeaderCellDef }]
                },] },
    ];
    /**
     * @nocollapse
     */
    MatHeaderCellDef.ctorParameters = function () { return []; };
    return MatHeaderCellDef;
}(_MatHeaderCellDef));
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
var MatColumnDef = (function (_super) {
    __extends(MatColumnDef, _super);
    function MatColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatColumnDef.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[matColumnDef]',
                    providers: [{ provide: _angular_cdk_table.CdkColumnDef, useExisting: MatColumnDef }],
                },] },
    ];
    /**
     * @nocollapse
     */
    MatColumnDef.ctorParameters = function () { return []; };
    MatColumnDef.propDecorators = {
        'name': [{ type: _angular_core.Input, args: ['matColumnDef',] },],
    };
    return MatColumnDef;
}(_MatColumnDef));
/**
 * Header cell template container that adds the right classes and role.
 */
var MatHeaderCell = (function (_super) {
    __extends(MatHeaderCell, _super);
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    function MatHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef, renderer) || this;
        renderer.addClass(elementRef.nativeElement, "mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    MatHeaderCell.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'mat-header-cell',
                    host: {
                        'class': 'mat-header-cell',
                        'role': 'columnheader',
                    },
                },] },
    ];
    /**
     * @nocollapse
     */
    MatHeaderCell.ctorParameters = function () { return [
        { type: _angular_cdk_table.CdkColumnDef, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer2, },
    ]; };
    return MatHeaderCell;
}(_MatHeaderCell));
/**
 * Cell template container that adds the right classes and role.
 */
var MatCell = (function (_super) {
    __extends(MatCell, _super);
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    function MatCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef, renderer) || this;
        renderer.addClass(elementRef.nativeElement, "mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    MatCell.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: 'mat-cell',
                    host: {
                        'class': 'mat-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /**
     * @nocollapse
     */
    MatCell.ctorParameters = function () { return [
        { type: _angular_cdk_table.CdkColumnDef, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer2, },
    ]; };
    return MatCell;
}(_MatCell));

/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MatHeaderRowDef = _angular_cdk_table.CdkHeaderRowDef;
var _MatCdkRowDef = _angular_cdk_table.CdkRowDef;
var _MatHeaderRow = _angular_cdk_table.CdkHeaderRow;
var _MatRow = _angular_cdk_table.CdkRow;
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var MatHeaderRowDef = (function (_super) {
    __extends(MatHeaderRowDef, _super);
    function MatHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderRowDef.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[matHeaderRowDef]',
                    providers: [{ provide: _angular_cdk_table.CdkHeaderRowDef, useExisting: MatHeaderRowDef }],
                    inputs: ['columns: matHeaderRowDef'],
                },] },
    ];
    /**
     * @nocollapse
     */
    MatHeaderRowDef.ctorParameters = function () { return []; };
    return MatHeaderRowDef;
}(_MatHeaderRowDef));
/**
 * Data row definition for the mat-table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
var MatRowDef = (function (_super) {
    __extends(MatRowDef, _super);
    function MatRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatRowDef.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[matRowDef]',
                    providers: [{ provide: _angular_cdk_table.CdkRowDef, useExisting: MatRowDef }],
                    inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen'],
                },] },
    ];
    /**
     * @nocollapse
     */
    MatRowDef.ctorParameters = function () { return []; };
    return MatRowDef;
}(_MatCdkRowDef));
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
var MatHeaderRow = (function (_super) {
    __extends(MatHeaderRow, _super);
    function MatHeaderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHeaderRow.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-header-row',
                    template: _angular_cdk_table.CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'mat-header-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    exportAs: 'matHeaderRow',
                    preserveWhitespaces: false,
                },] },
    ];
    /**
     * @nocollapse
     */
    MatHeaderRow.ctorParameters = function () { return []; };
    return MatHeaderRow;
}(_MatHeaderRow));
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var MatRow = (function (_super) {
    __extends(MatRow, _super);
    function MatRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatRow.decorators = [
        { type: _angular_core.Component, args: [{selector: 'mat-row',
                    template: _angular_cdk_table.CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'mat-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    exportAs: 'matRow',
                    preserveWhitespaces: false,
                },] },
    ];
    /**
     * @nocollapse
     */
    MatRow.ctorParameters = function () { return []; };
    return MatRow;
}(_MatRow));

var MatTableModule = (function () {
    function MatTableModule() {
    }
    MatTableModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_cdk_table.CdkTableModule, _angular_common.CommonModule, _angular_material_core.MatCommonModule],
                    exports: [MatTable, MatCellDef, MatHeaderCellDef, MatColumnDef,
                        MatHeaderCell, MatCell, MatHeaderRow, MatRow,
                        MatHeaderRowDef, MatRowDef],
                    declarations: [MatTable, MatCellDef, MatHeaderCellDef, MatColumnDef,
                        MatHeaderCell, MatCell, MatHeaderRow, MatRow,
                        MatHeaderRowDef, MatRowDef],
                },] },
    ];
    /**
     * @nocollapse
     */
    MatTableModule.ctorParameters = function () { return []; };
    return MatTableModule;
}());

/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 */
var MatTableDataSource = (function () {
    /**
     * @param {?=} initialData
     */
    function MatTableDataSource(initialData) {
        if (initialData === void 0) { initialData = []; }
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        this._renderData = new rxjs_BehaviorSubject.BehaviorSubject([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */
        this._filter = new rxjs_BehaviorSubject.BehaviorSubject('');
        /**
         * Data accessor function that is used for accessing data properties for sorting.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];
            return isNaN(+value) ? value : +value;
        };
        /**
         * Transforms data objects into a filter term that will be used to check against the filter if
         * a filter is set. By default, the function will iterate over the values of the data object
         * and convert them to a lowercase string.
         * @param data Data object to convert to a string that checked for containing the filter term.
         */
        this.filterTermAccessor = function (data) {
            var accumulator = function (currentTerm, key) { return currentTerm + data[key]; };
            return Object.keys(data).reduce(accumulator, '').toLowerCase();
        };
        this._data = new rxjs_BehaviorSubject.BehaviorSubject(initialData);
        this._updateChangeSubscription();
    }
    Object.defineProperty(MatTableDataSource.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this._data.value; },
        /**
         * Array of data that should be rendered by the table, where each object represents one row.
         * @param {?} data
         * @return {?}
         */
        set: function (data) { this._data.next(data); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "filter", {
        /**
         * @return {?}
         */
        get: function () { return this._filter.value; },
        /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * the filter matches data objects, provide a custom function on filterTermAccessor.
         * @param {?} filter
         * @return {?}
         */
        set: function (filter) { this._filter.next(filter); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "sort", {
        /**
         * @return {?}
         */
        get: function () { return this._sort; },
        /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         * @param {?} sort
         * @return {?}
         */
        set: function (sort) {
            this._sort = sort;
            this._updateChangeSubscription();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTableDataSource.prototype, "paginator", {
        /**
         * @return {?}
         */
        get: function () { return this._paginator; },
        /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         * @param {?} paginator
         * @return {?}
         */
        set: function (paginator) {
            this._paginator = paginator;
            this._updateChangeSubscription();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     * @return {?}
     */
    MatTableDataSource.prototype._updateChangeSubscription = function () {
        var _this = this;
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // Otherwise, use an empty observable stream to take their place.
        var /** @type {?} */ sortChange = this._sort ? this._sort.sortChange : rxjs_observable_empty.empty();
        var /** @type {?} */ pageChange = this._paginator ? this._paginator.page : rxjs_observable_empty.empty();
        if (this._renderChangesSubscription) {
            this._renderChangesSubscription.unsubscribe();
        }
        this._renderChangesSubscription = _angular_cdk_rxjs.RxChain.from(this._data)
            .call(_angular_cdk_rxjs.combineLatest, this._filter)
            .call(_angular_cdk_rxjs.map, function (_a) {
            var data = _a[0];
            return _this._filterData(data);
        })
            .call(_angular_cdk_rxjs.combineLatest, _angular_cdk_rxjs.startWith.call(sortChange, null))
            .call(_angular_cdk_rxjs.map, function (_a) {
            var data = _a[0];
            return _this._orderData(data);
        })
            .call(_angular_cdk_rxjs.combineLatest, _angular_cdk_rxjs.startWith.call(pageChange, null))
            .call(_angular_cdk_rxjs.map, function (_a) {
            var data = _a[0];
            return _this._pageData(data);
        })
            .subscribe(function (data) { return _this._renderData.next(data); });
    };
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._filterData = function (data) {
        var _this = this;
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overriden for customization.
        var /** @type {?} */ filteredData = !this.filter ? data : data.filter(function (obj) {
            return _this.filterTermAccessor(obj).indexOf(_this.filter) != -1;
        });
        if (this.paginator) {
            this._updatePaginator(filteredData.length);
        }
        return filteredData;
    };
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._orderData = function (data) {
        var _this = this;
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort || !this.sort.active || this.sort.direction == '') {
            return data;
        }
        var /** @type {?} */ active = this.sort.active;
        var /** @type {?} */ direction = this.sort.direction;
        return data.slice().sort(function (a, b) {
            var /** @type {?} */ valueA = _this.sortingDataAccessor(a, active);
            var /** @type {?} */ valueB = _this.sortingDataAccessor(b, active);
            return (valueA < valueB ? -1 : 1) * (direction == 'asc' ? 1 : -1);
        });
    };
    /**
     * Returns a paged splice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     * @param {?} data
     * @return {?}
     */
    MatTableDataSource.prototype._pageData = function (data) {
        if (!this.paginator) {
            return data;
        }
        var /** @type {?} */ startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice().splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @param {?} filteredDataLength
     * @return {?}
     */
    MatTableDataSource.prototype._updatePaginator = function (filteredDataLength) {
        var _this = this;
        Promise.resolve().then(function () {
            if (!_this.paginator) {
                return;
            }
            _this.paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (_this.paginator.pageIndex > 0) {
                var /** @type {?} */ lastPageIndex = Math.ceil(_this.paginator.length / _this.paginator.pageSize) - 1 || 0;
                _this.paginator.pageIndex = Math.min(_this.paginator.pageIndex, lastPageIndex);
            }
        });
    };
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * \@docs-private
     * @return {?}
     */
    MatTableDataSource.prototype.connect = function () { return this._renderData; };
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * \@docs-private
     * @return {?}
     */
    MatTableDataSource.prototype.disconnect = function () { };
    return MatTableDataSource;
}());

exports.MatTableModule = MatTableModule;
exports._MatCellDef = _MatCellDef;
exports._MatHeaderCellDef = _MatHeaderCellDef;
exports._MatColumnDef = _MatColumnDef;
exports._MatHeaderCell = _MatHeaderCell;
exports._MatCell = _MatCell;
exports.MatCellDef = MatCellDef;
exports.MatHeaderCellDef = MatHeaderCellDef;
exports.MatColumnDef = MatColumnDef;
exports.MatHeaderCell = MatHeaderCell;
exports.MatCell = MatCell;
exports._MatTable = _MatTable;
exports.MatTable = MatTable;
exports._MatHeaderRowDef = _MatHeaderRowDef;
exports._MatCdkRowDef = _MatCdkRowDef;
exports._MatHeaderRow = _MatHeaderRow;
exports._MatRow = _MatRow;
exports.MatHeaderRowDef = MatHeaderRowDef;
exports.MatRowDef = MatRowDef;
exports.MatHeaderRow = MatHeaderRow;
exports.MatRow = MatRow;
exports.MatTableDataSource = MatTableDataSource;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-table.umd.js.map
