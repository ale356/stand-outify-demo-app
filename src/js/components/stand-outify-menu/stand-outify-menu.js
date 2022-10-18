/**
 * The Stand-outify menu web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
</style>
<div class="select-options">
  <select>
    <option value="button">Button</option>
    <option value="a">Anchor</option>
    <option value="h1">H1</option>
    <option value="h2">H2</option>
    <option value="p">Paragraph</option>
  </select>
  <select>
    <option value="magnify">Magnify</option>
    <option value="highligt">Highlight</option>
    <option value="shake">Shake</option>
  </select>
  <button>Animate</button>
</div>
`

customElements.define('stand-outify-menu',
  /**
   * Represents a Stand-outify menu element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)
