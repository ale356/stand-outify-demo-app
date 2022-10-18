# Stand-outify
Easily animate your HTML elements.
## About
Stand-outify makes important elements stand out with the help of Web Animations API. With the help of event listeners you can choose when your elements should be animated.
## Installation
Fork this repository.
```
$ git clone https://github.com/ale356/stand-outify.git
```
Then simply add the folder to your projects components folder.
Lastly import the folder from your components folder with ES6 modules to your index/app.js file.
##### Example:
```
import './components/stand-outify/index.js'
```
## How to use
First you have to create the custom element stand-outify. This element allows you to call on different methods to help with animating your elements.
##### Example:
```
const standoutifyElement = document.createElement('stand-outify')
```
You will then need to initialize the choosen element to animate with the method initializeElement.  
Down below are explainations on how to use the various methods available.
### Methods
#### initializeElement()
A method that setups and animates your element. It will add chosen element as a child to stand-outify custom element. It will then set the animation style settings. Lastly it will add an eventlistener that will trigger by chosen eventype that will animate the element.

It takes in 3 parameters.
- animationStyle - String
- childElement - HTML Element(object)
- eventType - String

As of right now there are 3 animation styles available.
- highlight
- magnify
- shake
##### Example:
```
standoutifyElement.initializeElement('highlight', headerElement, 'click')
```
#### changeAnimationStyle()
This method changes the animation style on the instantiated element. 

It takes in one parameter.
- animationStyle - String

As of right now there are 3 animation styles available.
- highlight
- magnify
- shake
##### Example:
```
standoutifyElement.changeAnimationStyle('magnify')
```
#### changeColorOfAnimation()
This method changes the color property of the animation. 

It takes in one parameter.
- colorString - String
##### Example:
```
standoutifyElement.changeColorOfAnimation('blue')
```
#### changeDurationOfAnimation()
This method changes the duration of the animation in milliseconds.

It takes in one parameter.
- milliseconds - number
##### Example:
```
standoutifyElement.changeDurationOfAnimation(4000)
```
#### abortEventListenerChildElement()
This method removes the event listener on the element and in turn removes the animation on it.
##### Example:
```
standoutifyElement.abortEventListenerChildElement()
```
## Test Report
| Use-Cases     | Manual Test-Cases | Test Results |
| ------------- | ------------- | -------- |
| [UC1](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc1-initialize-element)           | [TC1.1](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc11-initialize-element-successfully)         | OK       |
| [UC1](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc1-initialize-element)           | [TC1.2](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc12-initialize-element-unsuccessfully)         | OK       |
| [UC2](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc2-change-animation-style)           | [TC2.1](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc21-change-element-style-successfully)         | OK       |
| [UC2](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc2-change-animation-style)           | [TC2.2](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc22-change-elements-style-unsuccessfully)         | OK      |
| [UC3](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc3-remove-animation)           | [TC3.1](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc31-remove-animation-successfully)         | OK       |
| [UC3](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc3-remove-animation)           | [TC3.2](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc32-remove-animation-unsuccessfully)         | OK       |
| [UC4](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc4-change-animation-color)           | [TC4.1](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc41-change-animation-color-successfully)         | OK       |
| [UC4](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc4-change-animation-color)           | [TC4.2](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc42-change-animation-color-unsuccessfully)         | OK     |
| [UC5](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc5-change-duration-of-animation)           | [TC5.1](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc51-change-duration-of-animation-successfully)         | OK |
| [UC5](https://github.com/ale356/1DV610-L1/blob/main/resources/Use-Cases.md#uc5-change-duration-of-animation)           | [TC5.2](https://github.com/ale356/1DV610-L1/blob/main/resources/Test-Cases.md#tc52-change-duration-of-animation-unsuccessfully)         | OK |

## Contributing
You are welcome to contribute to this project. Have a look at the Web [Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) to learn more. If you want to add more animation styles feel free to do so check out [this link](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect). 
## License
   Copyright 2022 ale356

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
