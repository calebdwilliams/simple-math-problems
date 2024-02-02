import { LitElement, html, css } from 'https://cdn.skypack.dev/lit@v3.1.0';
import { live } from 'https://cdn.skypack.dev/lit@v3.1.0/directives/live.js';

export class AppControls extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      box-shadow: var(--shadow-2);
      container-type: inline-size;
      display: block;
      position: sticky;
        top: 0;
    }
    form {
      background: ButtonFace;
      display: flex;
      font-size: var(--font-size-1);
      line-height: var(--font-lineheight-1);
      gap: var(--size-7);
      padding: var(--size-3) var(--size-7);
    }
    form div {
      align-items: center;
      display: flex;
      gap: var(--size-1);
    }
    input, select {
      border: var(--border-size-1) solid var(--sand-5);
      border-radius: var(--radius-2);
      font-size: var(--font-size-1);
      height: 1.5lh;
      padding: 0 var(--size-2);
    }
    .base {
      grid-area: base;
    }
    button {
      background-color: transparent;
      border: var(--border-size-2) solid var(--blue-5);
      border-radius: var(--radius-2);
      color: var(--blue-9);
      display: inline-flex;
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-7);
      padding-inline: var(--size-2);
      padding-block: var(--size-1);
      white-space: nowrap;
    }
    .button:is(:hover, :focus) {
      cursor: pointer;
      color: var(--blue-0);
      background-color: var(--blue-7);
    }
    button:active:not(:focus-visible) {
      position: relative;
    }
    @container (max-width: 500px) {
      form {
        display: block;
      }
    }
    @media print {
      :host {
        display: none;
      }
    }
  `;

  static properties = {
    base: { type: Number, reflect: true },
    problemType: { type: String, attribute: 'problem-type',  },
    count: { type: Number, reflect: true }
  }

  render() {
    return html`<form>
      <div>
        <label for="base">Base</label>
        <input type="text" inputmode="decimal" id="base" name="base" .value=${live(this.base)} size="2" required>
      </div>
      <div>
        <label for="problem-type">Problem type</label>
        <select id="problem-type" name="type" .value=${live(this.problemType)} required>
          <option value="">Please select</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
      </div>
      <div>
        <label for="count">Problem count</label>
        <input type="text" inputmode="decimal" id="count" name="count" .value=${live(this.count)} size="3" required>
      </div>
      <div>
        <button class="button" type="submit">Continue</button>
      </div>
    </form>`;
  }
}
