/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
import { MatDatepickerIntl } from './datepicker-intl';
import { MatMonthView } from './month-view';
import { MatMultiYearView } from './multi-year-view';
import { MatYearView } from './year-view';
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
export declare class MatCalendar<D> implements AfterContentInit, OnDestroy, OnChanges {
    private _intl;
    private _dateAdapter;
    private _dateFormats;
    private _intlChanges;
    /** A date representing the period (month or year) to start the calendar in. */
    startAt: D | null;
    private _startAt;
    /** Whether the calendar should be started in month or year view. */
    startView: 'month' | 'year' | 'multi-year';
    /** The currently selected date. */
    selected: D | null;
    private _selected;
    /** The minimum selectable date. */
    minDate: D | null;
    private _minDate;
    /** The maximum selectable date. */
    maxDate: D | null;
    private _maxDate;
    /** A function used to filter which dates are selectable. */
    dateFilter: (date: D) => boolean;
    /** Emits when the currently selected date changes. */
    readonly selectedChange: EventEmitter<D>;
    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    readonly yearSelected: EventEmitter<D>;
    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     */
    readonly monthSelected: EventEmitter<D>;
    /** Emits when any date is selected. */
    readonly _userSelection: EventEmitter<void>;
    /** Reference to the current month view component. */
    monthView: MatMonthView<D>;
    /** Reference to the current year view component. */
    yearView: MatYearView<D>;
    /** Reference to the current multi-year view component. */
    multiYearView: MatMultiYearView<D>;
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    _activeDate: D;
    private _clampedActiveDate;
    /** Whether the calendar is in month view. */
    _currentView: 'month' | 'year' | 'multi-year';
    /** The label for the current calendar view. */
    readonly _periodButtonText: string;
    readonly _periodButtonLabel: string;
    /** The label for the the previous button. */
    readonly _prevButtonLabel: string;
    /** The label for the the next button. */
    readonly _nextButtonLabel: string;
    constructor(_intl: MatDatepickerIntl, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Handles date selection in the month view. */
    _dateSelected(date: D): void;
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear: D): void;
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth: D): void;
    _userSelected(): void;
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date: D, view: 'month' | 'year' | 'multi-year'): void;
    /** Handles user clicks on the period label. */
    _currentPeriodClicked(): void;
    /** Handles user clicks on the previous button. */
    _previousClicked(): void;
    /** Handles user clicks on the next button. */
    _nextClicked(): void;
    /** Whether the previous period button is enabled. */
    _previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    _nextEnabled(): boolean;
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    private _isSameView(date1, date2);
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    private _getValidDateOrNull(obj);
}
