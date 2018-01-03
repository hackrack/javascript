## Technical Interview Tips

At this point in the course we have explored all the technical material required
for an interview at the top coding bootcamps. Let's go over some tips
you should follow to make yourself the ideal bootcamp candidate.

### Interview When You Feel Ready

This. Don't schedule your interview if you do not yet feel comfortable with any
of the topics covered. Work to fill any holes you have in your game beforehand. Like any test,
the outcome of the technical interview will be dictated by how you *prepared* for it. If your
interview does not go well, the bootcamp may not allow you another opportunity to apply
in the near future. Take this opportunity seriously. If you are applying to your
dream bootcamp, then study, study, study. You will be inevitably nervous on interview
day. Leave nothing to chance. Strive to be a tip-top candidate, even on your worst day.
You want to go into your interview with the confidence that you prepped as hard
as humanly possible.

### Have a Positive Attitude

Like any interview, you want to put your best foot forward on a bootcamp interview. Bootcamps
aren't just looking for candidates with technical skill alone. Bring positive energy
and be enthusiastic about coding. Top candidates are friendly and fun to work with.
By applying to a coding bootcamp you have shown that you are interested to code for a
living, so you should have some passion for this work!

### Read and Understand the Problem

Don't rush through reading the coding prompt. There may be information you can
use as clues to solve the problem. This can save you extra work in the long run and
shows that you have attention to detail. Make sure you are solving the question
being asked and not some question you assumed by merely glancing at the prompt!

If examples are given, be sure to understand how every example relates to the prompt
before jumping into the code. If anything is unclear, absolutely seek clarification with your
interviewer. They will be more than happy to clarify. Some details of a problem will only be found
in the examples, so it is important not to overlook them.

### Think of a Strategy

After understanding the question statement, take a few seconds to come up with a plan.
Try asking yourself these questions to get the gears turning:

+ What data am I given as arguments?
  + Is it structured a certain way?
+ What data should I return?
+ What variables and data types to create will be useful to me?
+ Can I decompose this into a sub problem?
  + What helper functions?
+ Is that an array?
  + Well, time to iterate with a loop (probably)

You don't need a detail strategy that you will strictly follow. Just have an idea
of the big picture. As you write the code and explain, you may find nuances of the
problem that you didn't consider. Don't panic! Adjusting to change and thinking
on the fly is part of the test.

### Be Able to Predict How Code will Behave

On some interviews, like App Academy's technical interview, you will not be able
to run any code, so you must be able to predict how your code will behave and
foresee any bugs (remember those annoying "What Would JavaScript Do" exercises?
:stuck_out_tongue_winking_eye:). Writing code without running it sounds scary,
but realize that code Bootcamps are not looking for perfection.
The point of an interview is to get insight into how you think and solve problems.
You will not be nitpicked for small errors. The important aspect is the overarching
strategy used and your thought process! That being said, your goal is to be an absolute
cream of the crop applicant, so strive to write working code every time!

Starting now, as you code, try to predict how your code will behave before running it.
Proofread your work using only your eyes. Practice makes perfect!

### Communication

Many bootcamps emphasize collaborative work in their curriculum. A bootcamp interview
will be used to test your technical and collaborative abilities. Knowing how solve
a problem is almost worthless if we can't communicate it to someone else!

#### Keep Them in the Loop

Before you begin writing code for a programming question, chime in with your interviewer
and tell them what you are going to do. State the strategy or tools you plan to use.
For example, things you may want to say before writing code are, "I am going to
iterate over the array" or "I am going to initialize a counter variable." What you
say may get a reaction from your interviewer, so be receptive to their comments.
They may be trying to nudge you in the right direction.

#### Treat Them like a Fellow Programmer

On a technical interview, the person interviewing you will be a
programmer (and a pretty darn good one!). When you explain your code, no need to
explain every single expression as if they are a beginner. You can use a high level
of abstraction to explain and give them the nitty gritty details if they ask for it.

Let's see how one may explain the solution to our beloved `maxValue` problem. Say
we just finished writing a solution and now it's our turn to explain it:

```js
function maxValue(numbers) {
  var largest = null;

  for (var i = 0; i < numbers.length; i += 1) {
    var num = numbers[i];

    if (largest === null || num > largest) {
      largest = num;
    }
  }

  return largest;
}
```

Here's a nicely abstracted explanation we can use for `maxValue`:

> We'll use `largest` to track the largest number we've seen so far
> in the array. We initialize it to null as the default value. Then we'll iterate
> through each number in array and replace `largest` if we find something bigger than
> the current `largest`. After we're done checking the entire array we should have the real
> `largest`!

Now for a less appropriate explanation:

> `maxValue` is a function that takes in an array of numbers as a parameter.
> We declare the variable using the `var` keyword because it's good practice
> and keeps the variable out of global scope. In the for loop we initialize the counter
> `i` to be 0 and we'll go up to the length of the array and increment by 1 every time.
> Then inside we'll save `array[i]` to another variable... etc.

Your goal is to explain the problem and solution and not to explain JavaScript.
To sum up, you should highlight key aspects of your code like necessary variables
and loops, but no need for painstaking JavaScript detail. Explanation of the code
will be an open conversation, you may go back and forth with your interviewer about details.
Your goal on an interview is show them your problem solving skills and thought process!

### What to do if you don't know what to do

Let's say you have absolutely no idea what to do on a problem. Bounce some ideas
off your interviewer. Let them know what you are thinking. If you can't write
working code, the next best thing is to jot down some comments with any ideas you
have. Keep working at the problem, even if it is just a little piece of it.
You don't need to write 100% percent working code on an interview to pass. An interview
will test how candidates behave in a high pressure environment. Just try your best on every
problem, bootcamps are looking for *potential*, not *perfection*. Remember your
training and you got this!


## a/A Technical Interview FAQ

As students of Bootcamp Prep, all of you have expressed interest in gaining admission
into App Academy's immersive course. App Academy is well known for being a highly
selective bootcamp, so you'll want to set your best foot forward by following all
that we highlighted above. Here is some insider information to help you stand out
against the crowd of all those applying to App Academy. We have compiled answers
to common questions you may have about the interview:

+ **How will the interview be administered? Is it in person?**
  + The App Academy technical interview will be administered remotely using a video/voice
  chat service like Skype or Google Hangouts. It will not be given in person, even
  if you are located near the a/A campus.

+ **How long is the interview?**
  + You can expect the entire interview to take about 50 minutes.

+ **What's the format of the interview?**
  + The technical interview will consist of 3 different programming problems of varying
  difficulty. You will be given an *easy*, *medium*, and *hard* problem (not necessarily
  in that order). You will be given each question one at a time. For each problem you
  will be given 15 minutes to work through, code, and explain a solution. For the *hard*
  problem, you will be pair programming with your interviewer to design a solution by
  collaborating

+ **What style will the problems be?**
  + The problems will be structured the same way as most of the Bootcamp Prep problems.
  You will be given a text description of the problem, followed by examples. All problems
  will ask you to write a function. Just like problems from our problem sets and assessments!

+ **What happens if I finish a problem early?**
  + When your interviewer is satisfied with your answer and explanation, you may
  move onto the next problem before the 15 minutes is up. If you finish a problem early,
  the time remaining will not rollover to the next problem.

+ **What happens if I don't finish a problem in the given time?**
  + When the 15 minutes is up, you will continue to the next, regardless of
  whether or not you solved the problem.

+ **Where will I be typing my code?**
  + You will be typing your code in an online collaborative text editor, such as [codeshare.io][codeshare]. Both you and your interviewer
  will be able to view and make changes to the file. Perhaps, practice typing code
  in kobra (be sure to set the language to JS). Small things like being familiar
  with the code environment will help put your nerves at ease during an interview.

+ **Can I run my code?**
  + You will not be allowed to run any of the code you write.

+ **Can I use any outside resources during the interview?**
  + You will not be allowed to access any resources during the interview. However,
  you may ask your interviewer about methods you can't exactly remember. For example,
  let's say you forgot about `Math.floor`. You can ask "I forgot the name of the method that r
  rounds a number down to the nearest integer, but I know it exists. Can I assume
  it's called `roundDown`?". The point of an interview is not to test how many methods you
  memorized. Your goal is to show how you solve problems using what you know and what you're
  given! Of course, there are limits to this. We probably won't give you a free `isPrime`
  function :).

#### Pairing Up

On App Academy's technical interview, one of the given problems may be an exercise
in pair work! This means that you and your interviewer will collaborate and
collectively come up with a solution. The pairing will be a/A style, with a **driver**
and **navigator** at any given time. This means that one person will be typing
while the other will be making the decisions, switching back and forth between these roles.
This pairing will be more structured than how we have been pairing so far in prep,
but those communication skills you developed will translate. We'll practice this
driver/navigator pairing a ton in week 4. Here some pairing rules
to obey for now:

+ Be enthusiastic, respectful, and overall fun to work with
+ Make sure you are both on the same page. Don't speed ahead and leave your partner
in the dust. Ask for clarification if you need it (*"can you repeat that?"*) and offer
clarification if you detect confusion (*"does that make sense?"*)
+ Be patient

More on pairing like this in week 4. So stay tuned!


[codeshare]: https://codeshare.io/
