# Reflection
This is a reflection on the chapters 2 - 11 in the book Clean Code.
## Chapter 2
This is the chapter that I think has affected me the most. Since naming is something we do very frequently as programmers for functions, variables, parameters, classes and packages. The rules in this chapter has been helpful such as "Use Intention-Revealing Names" and "Use Pronounceable Names". You can see that in the method name "changeAnimationStyle" in stand-outify that I have only choosed words to make it easier to pronounce. It is also quite clear what the method will do thanks to it's method name. I choose to have a comment for the method since I wanted to tell the type of the parameter.
![Alt text](img/change-animation-style.png "Image of the method changeAnimationStyle()")
## Chapter 3
This chapter and the rule "Small!" caused me to reevaluate the amount of code I had inside my functions and methods. It also made me think about lifting out code inside methods/functions to make smaller methods/functions which helped with the overall code readability. I turned the method initializeStandOutify() in stand-outify which were at first 21 lines long of code into 4 lines of code.
![Alt text](img/initialize-stand-outify.png "Image of the method initializeStandOutify()")
In the method changeColorOfAnimation() in stand-outify I have several lines of code inside an if statement, this breaks the rule of "Blocks and Indenting". They mention that the line inside the if statement should be a function call and I could have probaly turned the lines of code into a method called "updateColorOfAnimation()".
![Alt text](img/change-color-of-animation.png "Image of the method changeColorOfAnimation()")
## Chapter 4
This chapter really emphasized the importance of "the code". That the truth can only be found in the code itself not the comments. Once I started implementing more rules from the book I saw that a lot of my comments were unnecesary since my code told the reader what it does. Often times I was just repeating myself. I find myself cleaning up my code and removing a lot of comments after reading this chapter. In the setter method "setEventType()" I use the rule "Explain Yourself in Code" in the if statements condition. Instead of just plain code I turned it into a function to make it easier to understand.
![Alt text](img/set-event-type.png "Image of the method setEventType()")
