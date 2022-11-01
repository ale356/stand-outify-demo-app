# Developer
## Vision
The library should highlight important HTML elements on a web app with the help of animations. This should help to emphasize and draw in attention on certain parts of a web app. Whether it be information or buttons on a ecommerce web app. It should help it's users to reach their goals regarding attention on certain parts of their web app.

## Claims
### Technical Claims
* The library should be made of Javascript, HTML and CSS.
* The library should contain the vanilla.js component: stand-outify.
### Functional Claims
* The library should allow it's users to animate HTML elements.
* The library should allow it's users to change duration of animation.
* The library should allow it's users to change color of animation.
* The library should allow it's users to remove an animation on a element.
* The library should allow it's users to change animation style.
### Non-functional Claims
* The library should be user-friendly.

## Test Report
### Stand-outify Library
Ran the tests again after changes to the library. Note the method abortEventListenerChildElement() is now called removeEventListenerChildElement().
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
## Explaination of Code
### What works?
All of the claims are fulfilled and working.
### What could be implemented further?
The things that could be implemented further are the following.
* Implementing more animation styles with the help of the Web Animations API.
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
