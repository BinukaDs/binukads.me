declare global {
    interface Window {
        _VP_CHECKERS?: ViewportChecker[];
    }
}
export declare type Action = 'add' | 'remove';
export interface ViewportCheckerOptions {
    classToAdd: string;
    classToRemove: string;
    classToAddForFullView: string;
    removeClassAfterAnimation: boolean;
    offset: number | string;
    repeat: boolean;
    invertBottomOffset: boolean;
    callbackFunction: ((elem: Element, action: Action) => void);
    scrollHorizontal: boolean;
    scrollBox: Window | string;
}
export declare type ViewportCheckerAttributeOptions = Partial<Pick<ViewportCheckerOptions, 'classToAdd' | 'classToRemove' | 'classToAddForFullView' | 'removeClassAfterAnimation' | 'offset' | 'repeat' | 'scrollHorizontal' | 'invertBottomOffset'>>;
export default class ViewportChecker implements EventListenerObject {
    readonly query: string;
    /**
     * Index on which the instance if registered in the global register
     */
    private _registerIndex;
    /**
     * User provided options, merged with default options
     */
    readonly options: ViewportCheckerOptions;
    /**
     * Cached list of element to use.
     */
    private elements;
    /**
     * Size of the provided scrollBox
     */
    private boxSize;
    constructor(query: string, userOptions?: Partial<ViewportCheckerOptions>);
    handleEvent(evt: Event): void;
    /**
     * Query the document for elements and save them under elements
     */
    attach(): void;
    /**
     * Detach checker from elements.
     */
    detach(): void;
    /**
     * Returns a reference to the defined scrollbox
     */
    private resolveScrollBox;
    /**
     * Recalculate and set the box size
     */
    recalculateBoxsize(): void;
    /**
     * Main method which checks the elements and applies the correct actions to it
     */
    check(): void;
    /**
     * Get box size of provided scrollBox
     */
    private getBoxSize;
}
