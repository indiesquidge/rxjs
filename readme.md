# RxJS Observables

```

        | -------- | -------- |
        |          |          |
 vector |  [], {}  |Observable|
        |          |          |
        | -------- | -------- |
        |          |          |
 scalar | 'hi', 42 | Promise  |
        |          |          |
        | -------- | -------- |
            sync      async

```


## Observables vs. Functions

The fundamental difference between functions and observables is that observables
can return multiple values.


## Observables vs. Generator Functions

TL;DR - with observables, the values are pushed from the producer; with
generators, the values are pulled from the consumer

Both types are producers of values. They both required a producer and a consumer
to work. The main difference is that, with a generator function, **the consumer
determines when the values are sent (PULL)**, while with an observable, **the
producer determines when the values are sent (PUSH)**.

Observables are more useful for sequences of values that are "alive" (e.g.
`setTimeout`, `setInterval`, click events, etc.)

It doesn't make much sense to put a `setInterval` in a generator function
producer because the values won't necessarily be sent every one second; you
would need to put the `setInterval` on the consumer side.

Generator functions are more useful as a passive factory of values (e.g.
Fibonacci sequence)
