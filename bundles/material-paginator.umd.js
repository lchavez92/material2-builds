/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('@angular/cdk/coercion'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/select'), require('@angular/material/tooltip')) :
	typeof define === 'function' && define.amd ? define('@angular/material/paginator', ['exports', '@angular/core', 'rxjs/Subject', '@angular/cdk/coercion', '@angular/common', '@angular/material/button', '@angular/material/select', '@angular/material/tooltip'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.paginator = {}),global.ng.core,global.Rx,global.ng.cdk.coercion,global.ng.common,global.ng.material.button,global.ng.material.select,global.ng.material.tooltip));
}(this, (function (exports,core,Subject,coercion,common,button,select,tooltip) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
var MatPaginatorIntl = /** @class */ (function () {
    function MatPaginatorIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject.Subject();
        /**
         * A label for the page size selector.
         */
        this.itemsPerPageLabel = 'Items per page:';
        /**
         * A label for the button that increments the current page.
         */
        this.nextPageLabel = 'Next page';
        /**
         * A label for the button that decrements the current page.
         */
        this.previousPageLabel = 'Previous page';
        /**
         * A label for the button that moves to the first page.
         */
        this.firstPageLabel = 'First page';
        /**
         * A label for the button that moves to the last page.
         */
        this.lastPageLabel = 'Last page';
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */
        this.getRangeLabel = function (page, pageSize, length) {
            if (length == 0 || pageSize == 0) {
                return "0 of " + length;
            }
            length = Math.max(length, 0);
            var /** @type {?} */ startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var /** @type {?} */ endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " of " + length;
        };
    }
    MatPaginatorIntl.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    MatPaginatorIntl.ctorParameters = function () { return []; };
    return MatPaginatorIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_PAGINATOR_INTL_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new core.Optional(), new core.SkipSelf(), MatPaginatorIntl]],
    useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The default page size if there is no page size and there are no provided page size options.
 */
var /** @type {?} */ DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
var   /**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
PageEvent = /** @class */ (function () {
    function PageEvent() {
    }
    return PageEvent;
}());
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
var MatPaginator = /** @class */ (function () {
    function MatPaginator(_intl, _changeDetectorRef) {
        var _this = this;
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._pageIndex = 0;
        this._length = 0;
        this._pageSizeOptions = [];
        this._hidePageSize = false;
        this._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */
        this.page = new core.EventEmitter();
        this._intlChanges = _intl.changes.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatPaginator.prototype, "pageIndex", {
        get: /**
         * The zero-based page index of the displayed list of items. Defaulted to 0.
         * @return {?}
         */
        function () { return this._pageIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageIndex = coercion.coerceNumberProperty(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "length", {
        get: /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */
        function () { return this._length; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._length = coercion.coerceNumberProperty(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSize", {
        get: /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */
        function () { return this._pageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSize = coercion.coerceNumberProperty(value);
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
        get: /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */
        function () { return this._pageSizeOptions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSizeOptions = (value || []).map(function (p) { return coercion.coerceNumberProperty(p); });
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
        get: /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */
        function () { return this._hidePageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hidePageSize = coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
        get: /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */
        function () { return this._showFirstLastButtons; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFirstLastButtons = coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initialized = true;
        this._updateDisplayedPageSizeOptions();
    };
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
    };
    /** Advances to the next page if it exists. */
    /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.nextPage = /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasNextPage()) {
            return;
        }
        this.pageIndex++;
        this._emitPageEvent();
    };
    /** Move back to the previous page if it exists. */
    /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.previousPage = /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.pageIndex--;
        this._emitPageEvent();
    };
    /** Move to the first page if not already there. */
    /**
     * Move to the first page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.firstPage = /**
     * Move to the first page if not already there.
     * @return {?}
     */
    function () {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
            return;
        }
        this.pageIndex = 0;
        this._emitPageEvent();
    };
    /** Move to the last page if not already there. */
    /**
     * Move to the last page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.lastPage = /**
     * Move to the last page if not already there.
     * @return {?}
     */
    function () {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
            return;
        }
        this.pageIndex = this.getNumberOfPages();
        this._emitPageEvent();
    };
    /** Whether there is a previous page. */
    /**
     * Whether there is a previous page.
     * @return {?}
     */
    MatPaginator.prototype.hasPreviousPage = /**
     * Whether there is a previous page.
     * @return {?}
     */
    function () {
        return this.pageIndex >= 1 && this.pageSize != 0;
    };
    /** Whether there is a next page. */
    /**
     * Whether there is a next page.
     * @return {?}
     */
    MatPaginator.prototype.hasNextPage = /**
     * Whether there is a next page.
     * @return {?}
     */
    function () {
        var /** @type {?} */ numberOfPages = this.getNumberOfPages();
        return this.pageIndex < numberOfPages && this.pageSize != 0;
    };
    /** Calculate the number of pages */
    /**
     * Calculate the number of pages
     * @return {?}
     */
    MatPaginator.prototype.getNumberOfPages = /**
     * Calculate the number of pages
     * @return {?}
     */
    function () {
        return Math.ceil(this.length / this.pageSize) - 1;
    };
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    MatPaginator.prototype._changePageSize = /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        // Current page needs to be updated to reflect the new page size. Navigate to the page
        // containing the previous page's first item.
        var /** @type {?} */ startIndex = this.pageIndex * this.pageSize;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent();
    };
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    MatPaginator.prototype._updateDisplayedPageSizeOptions = /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    function () {
        if (!this._initialized) {
            return;
        }
        // If no page size is provided, use the first page size option or the default page size.
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ?
                this.pageSizeOptions[0] :
                DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) == -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        // Sort the numbers using a number-specific sort function.
        this._displayedPageSizeOptions.sort(function (a, b) { return a - b; });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @return {?}
     */
    MatPaginator.prototype._emitPageEvent = /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @return {?}
     */
    function () {
        this.page.emit({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    };
    MatPaginator.decorators = [
        { type: core.Component, args: [{selector: 'mat-paginator',
                    exportAs: 'matPaginator',
                    template: "<div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [aria-label]=\"_intl.itemsPerPageLabel\" (change)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasPreviousPage()\" *ngIf=\"showFirstLastButtons\"><div class=\"mat-paginator-first\"></div><div class=\"mat-paginator-decrement\"></div></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasPreviousPage()\"><div class=\"mat-paginator-decrement\"></div></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasNextPage()\"><div class=\"mat-paginator-increment\"></div></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasNextPage()\" *ngIf=\"showFirstLastButtons\"><div class=\"mat-paginator-increment\"></div><div class=\"mat-paginator-last\"></div></button></div></div>",
                    styles: [".mat-paginator{display:block}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-decrement-button+.mat-paginator-decrement-button{margin:0 0 0 8px}[dir=rtl] .mat-paginator-decrement-button+.mat-paginator-decrement-button{margin:0 8px 0 0}.mat-paginator-decrement,.mat-paginator-increment{width:8px;height:8px}.mat-paginator-increment,[dir=rtl] .mat-paginator-decrement{transform:rotate(45deg)}.mat-paginator-decrement,[dir=rtl] .mat-paginator-increment{transform:rotate(225deg)}.mat-paginator-increment{margin-left:12px}[dir=rtl] .mat-paginator-increment{margin-right:12px}.mat-paginator-decrement{margin-left:16px}[dir=rtl] .mat-paginator-decrement{margin-right:16px}.mat-paginator-first{transform:rotate(90deg);width:14px;height:8px;float:left;margin-left:3px}.mat-paginator-navigation-first .mat-paginator-decrement{margin-left:21px}.mat-paginator-navigation-last .mat-paginator-increment{float:left;margin-left:9px}.mat-paginator-last{transform:rotate(90deg);width:14px;height:8px;margin-left:15px}.mat-paginator-range-actions{display:flex;align-items:center;min-height:48px}"],
                    host: {
                        'class': 'mat-paginator',
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    MatPaginator.ctorParameters = function () { return [
        { type: MatPaginatorIntl, },
        { type: core.ChangeDetectorRef, },
    ]; };
    MatPaginator.propDecorators = {
        "pageIndex": [{ type: core.Input },],
        "length": [{ type: core.Input },],
        "pageSize": [{ type: core.Input },],
        "pageSizeOptions": [{ type: core.Input },],
        "hidePageSize": [{ type: core.Input },],
        "showFirstLastButtons": [{ type: core.Input },],
        "page": [{ type: core.Output },],
    };
    return MatPaginator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatPaginatorModule = /** @class */ (function () {
    function MatPaginatorModule() {
    }
    MatPaginatorModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        button.MatButtonModule,
                        select.MatSelectModule,
                        tooltip.MatTooltipModule,
                    ],
                    exports: [MatPaginator],
                    declarations: [MatPaginator],
                    providers: [MAT_PAGINATOR_INTL_PROVIDER],
                },] },
    ];
    /** @nocollapse */
    MatPaginatorModule.ctorParameters = function () { return []; };
    return MatPaginatorModule;
}());

exports.MatPaginatorModule = MatPaginatorModule;
exports.PageEvent = PageEvent;
exports.MatPaginator = MatPaginator;
exports.MatPaginatorIntl = MatPaginatorIntl;
exports.MAT_PAGINATOR_INTL_PROVIDER_FACTORY = MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
exports.MAT_PAGINATOR_INTL_PROVIDER = MAT_PAGINATOR_INTL_PROVIDER;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-paginator.umd.js.map
