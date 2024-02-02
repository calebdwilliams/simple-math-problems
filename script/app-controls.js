import { LitElement, html, css } from 'https://cdn.skypack.dev/lit@v3.1.0';
import { live } from 'https://cdn.skypack.dev/lit@v3.1.0/directives/live.js';

export class AppControls extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      display: block;
    }
    form {
      background: ButtonFace;
      display: flex;
      gap: var(--size-7);
      padding: var(--size-3) var(--size-7);
    }
    .base {
      grid-area: base;
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
        <input type="text" inputmode="decimal" id="base" name="base" .value=${live(this.base)}>
      </div>
      <div>
        <label for="problem-type">Problem type</label>
        <select id="problem-type" name="problem-type" .value=${live(this.problemType)}>
          <option value="">Please select</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
      </div>
      <div>
        <label for="count">Problem count</label>
        <input type="text" inputmode="decimal" id="count" name="count" .value=${live(this.count)}>
      </div>
      <div>
        <button class="button" type="submit">Continue</button>
      </div>
    </form>`;
  }
}
