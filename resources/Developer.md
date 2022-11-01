# Developer
## Vision
The system should make it easier for potential users to get an quick insight on how the library Stand-outify works in practice. It does this by showing the main functionality that the library offers without the need to learn or install the library itself.

The system should be user friendly and easy to understand. By offering this system solution it could encourage more users to use and develop the library Stand-outify.

## Claims
### Technical Claims
* The user interface should be made of Javascript, HTML and CSS.
* The system should be deployed locally.
* The system should contain the vanilla.js components: stand-outify, stand-outify-menu and stand-outify-display.
### Functional Claims
* The system should allow users to select an element as a option.
* The system should allow users to select an animation as a option.
* The system should allow users to click on a button, that creates and animates an element with their selected options.
* The system should show the animated element and tell users how to play the animation on it.
### Non-functional Claims
* The system should be user-friendly.

## Test Report
### Stand-outify Demo
| Use-Cases     | Manual Test-Cases | Test Results |
| ------------- | ------------- | -------- |
| [UC1](https://github.com/ale356/stand-outify-demo-app/blob/main/resources/Use-Cases.md#uc1-showcase-an-animated-element)           | [TC1.1](https://github.com/ale356/stand-outify-demo-app/blob/main/resources/Test-Cases.md#tc11-showcase-an-animated-button-element-successfully)         | OK       |
| [UC1](https://github.com/ale356/stand-outify-demo-app/blob/main/resources/Use-Cases.md#uc1-showcase-an-animated-element)           | [TC1.2](https://github.com/ale356/stand-outify-demo-app/blob/main/resources/Test-Cases.md#tc12-showcase-an-animated-h1-element-successfully)         | OK       |
## Explaination of Code
### What works?
All of the claims are fulfilled and working. As of now a user can select a element option and an animation option and animate that element. The user can then click on the displayed element and play the animation. 
### What could be implemented further?
The things that could be implemented further are the following.
* Implementing the public method changeDurationOfAnimation() from the web component stand-outify into the user interface.
* Implementing the public method changeColorOfAnimation() from the web component stand-outify into the user interface.
* Creating more different animations for the library Stand-outify and implement them into the user interface of the system.
* Implement more elements options to select in the user interface.
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
