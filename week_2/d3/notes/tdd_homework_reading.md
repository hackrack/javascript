## Test Driven Development

As a programmer, your job is to write code that is robust and bug-free. So far throughout the course
we have *tested* our functions for correctness by calling them and printing out the results. Testing is
important because it allows us to verify our code. Let's talk about a process programmers use when writing
code to ensure that it is top quality! We use frameworks like **Mocha** to quickly test our code

### What is TDD?

TDD (Test Driven Development) is a strategy to develop programs where the requirements for the program are
turned into test cases. Changes to program are made until the program passes the test cases. Here is a
high level overview of a basic TDD workflow to test a function:

1. Write a new test
2. Run all tests & check for fail
  - The new test should fail. If it passes, it should be rewritten
3. Make changes to the function
4. Run all tests & check for pass
  - if any tests fail, go to back step 3
  - if all tests pass, but more coverage is needed, go to step 1

One we complete all 4 steps, we have completed 1 *iteration* of TDD.

In Bootcamp Prep, problems come with examples of how the function should behave.
These are examples of simple test cases.

### TDD workflow with `isPrime`

Time to explore a TDD workflow for developing our classic `isPrime` implementation.:

```
Write a function `isPrime(n)` that takes in a number and returns a
boolean indicating whether or not the number is prime.
```

Bear in mind that the point of TDD is write code methodically and test thoroughly. One iteration of
the TDD cycle will work to add one feature to our function. We will keep making iterations until our
`isPrime` has complete coverage of all scenarios we can give it. Let's go in-depth through the first
TDD iteration of `isPrime`. We begin with an empty function definition. Surely this will fail any test cases:

```js
function isPrime(num) {

}
```

#### Iteration 1: Write a new test

Let's add our first test. The test below will check if the function is correctly able to identify numbers that
are not prime. Notice that the desired output is only about a single requirement for the function. There are
multiple example cases, but they all test the same fact: "Will our function return false if the input is not prime?"

```js
// TDD Iteration 1: return false if the number is not prime

// new test
isPrime(6); // => false
isPrime(8); // => false
isPrime(9); // => false
```

#### Iteration 1: Run All Tests and Check for New Failure

Now that we have added a test, we should run the test to verify that it fails. This step seems trivial but it is
very important. If we have followed a true TDD cycle thus far, the test will almost certainly fail as we have
not yet implemented code to support the test. However, we cannot assume. **We need to know that the test can fail,
otherwise it may not be testing anything at all.** Imagine the scenario where we unknowingly wrote a broken test that
always passes. If we don't have the expectation that the test *should* fail as soon as we add it, we will unwittingly
add the broken test to our suite. The bad test will give us false sense of security and this can be very deadly.

So let's now verify that our new test fails.

```js
// TDD Iteration 1: return false if the number is not prime

// desired output
isPrime(6); // => false
isPrime(8); // => false
isPrime(9); // => false

// current output
isPrime(6); // => undefined (FAIL)
isPrime(8); // => undefined (FAIL)
isPrime(9); // => undefined (FAIL)
```

Wooo! Look at all of those fails. This is what we want. *TDD itself is driven by failure.* This seems counterintuitive,
but this is what makes TDD so thorough! A test is only valuable if it has more than 1 outcome. Now we know that
the test has a possible failure outcome and we can proceed.

#### Iteration 1: Make changes to the function

Now it's time to code! Our goal is to change the function so that it satisfies the failing test. Now we run into
another key principle of TDD. **We should only make changes to the function that will support the test. We should
not add any extra functionality.** At this stage, we want to write a minimal amount of logic that will allow us to
pass the test. This will help keep our code simple and avoid over-engineering. Even if we anticipate further
functionality requirements, we should save implementing it until we reach another iteration of the TDD cycle.

So let's be methodical and write code to support the test at hand. That is, we need to implement the logic to check
if a number is not prime.

```js
// TDD Iteration 1: return false if the number is not prime

function isPrime (num){
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
}
```

#### Iteration 1: Run All Tests

Now it's time to see if the changes have met the requirements. At this point, **we should run all
test, even those from previous TDD iterations.** It is important to run all tests to verify that the changes we made
did not break any existing functionality. If any tests fail, we should go back to the last stage and debug. If all tests
pass we can continue.

```js
// TDD Iteration 1: return false if the number is not prime

// desired output
isPrime(6); // => false
isPrime(8); // => false
isPrime(9); // => false

// current output
isPrime(6); // => false (PASS)
isPrime(8); // => false (PASS)
isPrime(9); // => false (PASS)
```

Nice! We are passing all of the tests. At this point we can consider adding more tests to the function. Although our
current implementation of `isPrime` is passing all tests, it lacks complete coverage. Can you think of any scenarios
where our current `isPrime` will not work? Let's do additional iterations of TDD to fix these!

#### Iteration 2: Write a New Test

```js
// TDD Iteration 2: return true if the number is prime

isPrime(2); // => true
isPrime(7); // => true
isPrime(11); // => true
```

#### Iteration 2: Run All Tests and Check for New Failure

```js
// TDD Iteration 2: return true if the number is prime

// desired output
isPrime(2); // => true
isPrime(7); // => true
isPrime(11); // => true

// current output
isPrime(2); // => undefined (FAIL)
isPrime(7); // => undefined (FAIL)
isPrime(11); // => undefined (FAIL)
```

#### Iteration 2: Make Changes to the Function

```js
// TDD Iteration 2: return true if the number is prime

function isPrime (num){
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

#### Iteration 2: Run All Tests and Check for Pass

```js
// desired output
isPrime(2); // => true
isPrime(7); // => true
isPrime(11); // => true

// current output
isPrime(2); // => true (PASS)
isPrime(7); // => true (PASS)
isPrime(11); // => true (PASS)
```

#### Iteration 3: Write a new Test

```js
// TDD Iteration 2: return false if the number is less than 2, since 2 is the smallest prime

isPrime(1); // => false
isPrime(0); // => false
isPrime(-42); // => false
```

#### Iteration 3: Run All Tests and Check for Failure

```js
// TDD Iteration 2: return false if the number is less than 2, since 2 is the smallest prime

// desired output
isPrime(1); // => false
isPrime(0); // => false
isPrime(-42); // => false

// current output
isPrime(1); // => true (FAIL)
isPrime(0); // => true (FAIL)
isPrime(-42); // => true (FAIL)
```

#### Iteration 3: Make Changes to the functions

```js
function isPrime (num){
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

#### Iteration 3: Run All Tests and Check for Pass

```js
// desired output
isPrime(1); // => false
isPrime(0); // => false
isPrime(-42); // => false

// current output
isPrime(1); // => false
isPrime(0); // => false
isPrime(-42); // => false
```

We have completed 3 TDD iterations on isPrime and we are done! Note that we did not show the previous tests on every
iteration to keep things clean. However, you **should** run both the previous and new tests whenever testing the function. This ensures that any new code you write does not break any previous functionality.

### When Should We Use TDD?

TDD is a popular development strategy to employ in the professional world. From our walkthrough of test-driven `isPrime`,
you can definitely see how methodical the process is. Adding one feature and one test at a time is indeed
painstaking and tedious at times. If you are chomping at the bit to complete a function (like when you are facing a
  deadline) you will probably diverge from the TDD process and not follow it as strictly. However, you *should* follow
  it as best you can to be thorough!

You don't have to employ a true TDD workflow at this point in your programming careers, however you should at least have
it in mind. The big picture idea to take away from this lesson is that you should think how a function should behave
before writing it. You'll notice that every programming problem in Bootcamp Prep comes with
example calls that outline the function's behavior. Your goal is to make sure that your implementation satisfies
these tests. **If you are designing a function, you should create example function calls for yourself.** If you understand
how the function *should* behave, then you have a clear goal in mind and the code you write should bring you closer to this
goal.

When writing an example call about how a function should behave, we note its input (parameters) and output
(return value). Designing an example call is like plotting start and end points on a map. After we
have established the start and end, we can then choose the turns to take in the hope of reaching the end point.
If you cannot justify how a turn will bring you closer to the destination, then reconsider making that turn!
When writing a function, we begin with the parameters (start point) and any code we write (any turns we make) should bring
us ultimately closer to desired return value (end point). Have an active mind and ask yourself, "How does this
piece of code bring me closer to the desired return value?" If you are having trouble defending programming
decisions you made, then perhaps the choice was wrong.
