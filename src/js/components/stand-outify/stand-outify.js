/**
 * The StandOutify web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
#slot-element {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<slot id="slot-element"></slot>
`

customElements.define('stand-outify',
  /**
   * Represents a Standoutify element.
   */
  class extends HTMLElement {
    /**
     * The slot element.
     *
     * @type {SlotElement}
     */
    #slotElement

    /**
     * The string value for the animation.
     *
     * @type {String}
     */
    #animationStyle

    /**
     * The child element.
     *
     * @type {HTMLElement}
     */
    #childElement

    /**
     * The selected animation property.
     *
     * @type {Object}
     */
    #selectedAnimationStyleSettings

    /**
     * The selected timing property.
     *
     * @type {Object}
     */
    #selectedAnimationTimingSettings

    /**
     * The abort controller.
     *
     * @type {Object}
     */
    #controller

    /**
     * The event type to listen for.
     *
     * @type {Object}
     */
    #eventType

    /**
     * Holds the different animation settings.
     *
     * @type {Object}
     */
    #animationObject = {
      magnify: [
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' }
      ],
      shake: [
        { transform: 'rotate(0deg)', offset: 0 },
        { transform: 'rotate(5deg)', offset: 0.25 },
        { transform: 'rotate(0deg)', offset: 0.50 },
        { transform: 'rotate(-5deg)', offset: 0.75 },
        { transform: 'rotate(0deg)', offset: 1 }
      ],
      highlight: [
        { transform: 'scale(1)', color: 'orange', opacity: 1 },
        { transform: 'scale(1)', color: 'orange', opacity: 1 },
        { transform: 'scale(1)' }
      ]
    }

    /**
     * Holds the timing settings for the animations.
     *
     * @type {object}
     */
    #timingObject = {
      magnify: { duration: 2000, iterations: 1, easing: 'ease-in-out', delay: '10' },
      shake: { duration: 300, iterations: 5 },
      highlight: { duration: 2000, iterations: 1, easing: 'ease-in-out' }
    }

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#slotElement = this.shadowRoot.getElementById('slot-element')

      // Controller object that can abort DOM requests.
      this.#controller = new AbortController()
    }

    /**
     * Initializes stand-outify with a style, event type and a child element.
     *
     * @param animationStyle - a string.
     * @param childElement - a HTMLElement.
     * @param eventType - a string.
     */
    initializeStandOutify(animationStyle, childElement, eventType) {
      this.#setupCustomElement(animationStyle, childElement, eventType)
      this.#setChosenAnimationSettings()
      this.#addEventListenerToChildElement()
    }

    /**
     * Changes the animation style.
     *
     * @param animationStyle - a string.
     */
    changeAnimationStyle(animationStyle) {
      this.#setAnimationStyle = animationStyle

      this.#setChosenAnimationSettings()
    }

    /**
     * Changes the event listener type.
     *
     * @param eventType - a string.
     */
    changeEventListenerType(eventType) {
      this.removeEventListenerChildElement()

      this.#setEventType(eventType)

      this.#addEventListenerToChildElement()
    }

    /**
     * Aborts the event listener on the child element.
     */
    removeEventListenerChildElement() {
      this.#controller.abort()

      if (this.#getChildElement === undefined) {
        throw new Error('No element has been initialized.')
      }
    }

    /**
     * Changes the color of the animation.
     *
     * @param colorString - a string.
     */
    changeColorOfAnimation(colorString) {
      if (this.#parameterIsAString(colorString)) {
        // Iterate through each transform object.
        const currentAnimation = this.getAnimationStyle
        const currentAnimationArray = this.#animationObject[currentAnimation]
        let animationUsesColor = false

        // Update the color of animation.
        currentAnimationArray.forEach(element => {
          if (element.color !== undefined) {
            element.color = colorString
            animationUsesColor = true
          }
        })

        if (!animationUsesColor) {
          throw new Error('This animation does not have any color property.')
        }
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    /**
     * Changes the duration of the animation.
     *
     * @param milliseconds - of type number.
     */
    changeDurationOfAnimation(milliseconds) {
      if (this.#parameterIsANumber(milliseconds)) {
        // Get the timing object.
        const currentAnimation = this.getAnimationStyle
        const currentTimingObject = this.#timingObject[currentAnimation]

        // Change the value of the timing object.
        currentTimingObject.duration = milliseconds
      } else {
        throw new Error('Parameter is not of type number.')
      }
    }

    /**
    * Setup stand-outify with the values needed to initialize it.
    * @param animationStyle - a string.
    * @param childElement - a HTMLElement.
    * @param eventType - a string.
    */
    #setupCustomElement(animationStyle, childElement, eventType) {

      this.#setAnimationStyle = animationStyle
      this.#setEventType = eventType

      childElement.setAttribute('id', 'animation-element')
      this.#slotElement.appendChild(childElement)

      this.#setChildElement = this.shadowRoot.getElementById('animation-element')
    }

    #setChosenAnimationSettings() {
      this.#setAnimationStyleSettings()
      this.#setAnimationTimingSettings()
    }

    #addEventListenerToChildElement() {
      // Add a eventlistener with a signal.
      this.#childElement.addEventListener(this.#getEventType, (event) => {
        this.#animateChildElement()
      }, { signal: this.#controller.signal })
    }

    #animateChildElement() {
      this.#childElement.animate(this.#selectedAnimationStyleSettings, this.#selectedAnimationTimingSettings)
    }

    /**
     * Sets the animation style settings to use.
     */
    #setAnimationStyleSettings() {
      for (const key in this.#animationObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationStyleSettings = this.#animationObject[key]
        }
      }
    }

    /**
     * Sets the animation timing settings to use.
     */
    #setAnimationTimingSettings() {
      for (const key in this.#timingObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationTimingSettings = this.#timingObject[key]
        }
      }
    }

    #parameterIsAString(value) {
      if (typeof value === 'string') {
        return true
      } else {
        return false
      }
    }

    #parameterIsANumber(value) {
      if (typeof value === 'number') {
        return true
      } else {
        return false
      }
    }

    #parameterIsAElement(value) {
      if (value instanceof Element) {
        return true
      } else {
        return false
      }
    }

    get getAnimationStyle() {
      return this.#animationStyle
    }

    set #setAnimationStyle(animationStyle) {
      if (this.#parameterIsAString(animationStyle)) {
        this.#animationStyle = animationStyle
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    get #getEventType() {
      return this.#eventType
    }

    set #setEventType(eventType) {
      if (this.#parameterIsAString(eventType)) {
        this.#eventType = eventType
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    get #getChildElement() {
      return this.#childElement
    }

    set #setChildElement(childElement) {
      if (this.#parameterIsAElement(childElement)) {
        this.#childElement = childElement
      } else {
        throw new Error('The parameter is not a element.')
      }
    }
  }
)
