export { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
export { ObserveContentModule, ObserveContent } from '@angular/cdk/observe-content';
export { Dir, Direction, Directionality, BidiModule } from './bidi/index';
export * from './option/index';
export { Portal, PortalHost, BasePortalHost, ComponentPortal, TemplatePortal } from './portal/portal';
export { PortalHostDirective, TemplatePortalDirective, PortalModule } from './portal/portal-directives';
export { DomPortalHost } from './portal/dom-portal-host';
export * from './platform/index';
export * from './overlay/index';
export { GestureConfig } from './gestures/gesture-config';
export { HammerInput, HammerManager } from './gestures/gesture-annotations';
export * from './ripple/index';
export { AriaLivePoliteness, LiveAnnouncer, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_PROVIDER } from './a11y/live-announcer';
export * from './selection/selection';
export * from './a11y/focus-trap';
export { InteractivityChecker } from './a11y/interactivity-checker';
export { isFakeMousedownFromScreenReader } from './a11y/fake-mousedown';
export { A11yModule } from './a11y/index';
export { UniqueSelectionDispatcher, UniqueSelectionDispatcherListener, UNIQUE_SELECTION_DISPATCHER_PROVIDER } from './coordination/unique-selection-dispatcher';
export { MdLineModule, MdLine, MdLineSetter } from './line/line';
export * from './style/index';
export { ComponentType } from './overlay/generic-component-type';
export * from './keyboard/keycodes';
export * from './compatibility/compatibility';
export * from './animation/animation';
export * from './selection/index';
export { CompatibilityModule, NoConflictStyleCompatibilityMode } from './compatibility/compatibility';
export { MdCommonModule, MATERIAL_SANITY_CHECKS } from './common-behaviors/common-module';
export * from './datetime/index';
export { FloatPlaceholderType, PlaceholderOptions, MD_PLACEHOLDER_GLOBAL_OPTIONS } from './placeholder/placeholder-options';
export { ErrorStateMatcher, ErrorOptions, MD_ERROR_GLOBAL_OPTIONS, defaultErrorStateMatcher, showOnDirtyErrorStateMatcher } from './error/error-options';
export declare class MdCoreModule {
}
