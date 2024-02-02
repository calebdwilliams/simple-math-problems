import { LitElement, html, css } from 'https://cdn.skypack.dev/lit@v3.1.0';

export class MathQuestion extends LitElement {
  // static styles = [css`
  // :host { color: var(--primary); display: block; }
  // table {
  //   font-size: 24px;
  //   font-variant-numeric: tabular-nums;
  // }
  // hr {
  //   border-bottom: 4px solid var(--primary);
  // }
  // td {
  //   text-align: right;
  // }`];
  static styles = css`
    :host {
      border-bottom: 3px solid currentColor;
      display: grid;
      font-size: 24px;
      font-variant-numeric: tabular-nums;
      gap: var(--size-2);
      grid-template: "base base" "symbol numberTwo";
    }

    .base {
      grid-area: base;
    }

    .symbol {
      grid-area: symbol;
    }

    .number-two {
      grid-area: numberTwo;
    }

    .base,
    .number-two {
      text-align: right;
    }
  `;

  static properties = {
    base: { type: Number },
    numberTwo: { type: Number },
    symbol: { type: String }
  };

  constructor() {
    super();
    this.base = 0;
    this.numberTwo = 0;
    this.symbol = '✖️';
  }

  get answer() {
    return this.base * this.numberTwo;
  }

  render() {
    // return html`<table>
    //   <tr>
    //     <td></td>
    //     <td>${this.base}</td>
    //   </tr>
    //   <tr>
    //     <td>${this.symbol}</td>
    //     <td>${this.multiplicand}</td>
    //   </table>
    //   <hr>`
    // }
    return html`<div class="base">${this.base}</div>
    <div class="symbol">${this.symbol}</div>
    <div class="number-two">${this.numberTwo}</div>`
  }
}
