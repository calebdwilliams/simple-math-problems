import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class MathQuestion extends LitElement {
  static styles = [css`
  :host { color: var(--primary); display: block; }
  table {
    font-family: Helvetica;
    font-size: 24px;
    font-variant-numeric: tabular-nums;
  }
  hr {
    border-bottom: 4px solid var(--primary);
  }
  td {
    text-align: right;
  }`];

  static properties = {
    base: { type: Number },
    multiplicand: { type: Number },
    symbol: { type: String }
  };

  constructor() {
    super();
    this.base = 0;
    this.multiplicand = 0;
    this.symbol = '✖️';
  }

  get answer() {
    return this.base * this.multiplicand;
  }

  render() {
    return html`<table>
      <tr>
        <td></td>
        <td>${this.base}</td>
      </tr>
      <tr>
        <td>${this.symbol}</td>
        <td>${this.multiplicand}</td>
      </table>
      <hr>`
    }
  }
