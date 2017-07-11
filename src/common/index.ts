/**
 * Redux ActionResult interface
 */
export interface ActionResult<T> {
    type: string,
    value?: T
}