import { h } from "@stencil/core";
import * as StellarSdk from 'stellar-sdk';
export class Wallet {
    render() {
        return [
            h("h1", null, !!StellarSdk
                ? 'The StellarSdk is ready to rock 🤘'
                : 'Uh oh, the StellarSdk is missing 😱')
        ];
    }
    static get is() { return "stellar-wallet"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wallet.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wallet.css"]
    }; }
}
