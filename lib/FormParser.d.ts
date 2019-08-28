import "@babel/polyfill";
export interface Props {
    x: number;
    y: number;
}
export declare class FormParser {
    private value;
    private props;
    getValue(): number;
    setValue(value: number): void;
    setProps(props: Props): void;
    getProps(): Props;
    getMenu(): any;
}
