/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CircuitConnection {
    }
    interface MdComponent {
    }
}
declare global {
    interface HTMLCircuitConnectionElement extends Components.CircuitConnection, HTMLStencilElement {
    }
    var HTMLCircuitConnectionElement: {
        prototype: HTMLCircuitConnectionElement;
        new (): HTMLCircuitConnectionElement;
    };
    interface HTMLMdComponentElement extends Components.MdComponent, HTMLStencilElement {
    }
    var HTMLMdComponentElement: {
        prototype: HTMLMdComponentElement;
        new (): HTMLMdComponentElement;
    };
    interface HTMLElementTagNameMap {
        "circuit-connection": HTMLCircuitConnectionElement;
        "md-component": HTMLMdComponentElement;
    }
}
declare namespace LocalJSX {
    interface CircuitConnection {
    }
    interface MdComponent {
    }
    interface IntrinsicElements {
        "circuit-connection": CircuitConnection;
        "md-component": MdComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "circuit-connection": LocalJSX.CircuitConnection & JSXBase.HTMLAttributes<HTMLCircuitConnectionElement>;
            "md-component": LocalJSX.MdComponent & JSXBase.HTMLAttributes<HTMLMdComponentElement>;
        }
    }
}
