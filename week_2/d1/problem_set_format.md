## Problem Set Format

Now that you are familiar with using **Mocha** to quickly verify your work on assessments, we will be using the same workflow for the problem sets for the rest of the course! Starting in Week 2, you can download the problem sets as a zip file, just like assessments. Inside the zip you will find two folders: `problem_set` and `solution`. **Don't forget to study the solutions after you have spent some time with the problem set.**

### Testing a Problem Set with Mocha

The workflow for doing a problem set will be almost identical to assessments, but let's review it right now.

+ Download the pset `.zip` file.
+ Unzip/Uncompress it somewhere you can access easily, like your `Desktop` folder. Unzipping the file will leave you with a `pset` folder
+ There will be an unsolved `problem_set` folder and a completed `solution` folder inside the `pset` folder
+ In your command line, `cd` into the `problem_set`folder.
  + If you unzipped the `pset` onto your `Desktop`, you need to `cd` into your `Desktop` first, then `cd` into `pset`, then finally `cd` into `problem_set`.
+ In your command line, use the command `mocha` to run the problem set against our test cases.
+ Open up the `problem_set` folder in Atom, and work through it just like an assessment. You may test with `mocha` as many times as you like.
+ Help yourself to the `solution` folder when you get stuck or need a hint.

Here is an example of setting up a problem set in the command line:

```
Alvin$ cd Desktop/
Desktop Alvin$ ls
 w2d1_pset

Desktop Alvin$ cd w2d1_pset/

w2d1_pset Alvin$ ls
 problem_set	solution

w2d1_pset Alvin$ cd problem_set/
problem_set Alvin$ ls
 problems	test		utils

problem_set Alvin$ mocha
  diffArrayLen()
    1) should return a boolean indicating the lengths of the arrays are the same

  mirrorArray()
    2) should return an array where the first half is the original array and the second half is a mirror of the first half

  ... etc.

  0 passing
  7 failing
```


### Testing Manually

+ If you'd like to test a problem manually (without Mocha), you still have the option of that as well. Write your manual function calls and `console.log`s in the `.js` files like you did during week 1. Simply cd into the `problems` folder and run the individual `.js` files using `node`.
+ Before moving on from a problem, be sure to verify your work using `mocha`.
