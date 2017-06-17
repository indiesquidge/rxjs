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


## Error Handling & Completion


### Dealing with Errors

`observer.error` can be used to "deliver" errors in an observable.

The second argument to `subscribe` is a function to handle errors.

If you are using the `Observable.create` API it is recommended to wrap the
contained logic in a try/catch block, with `observer.error` being used in the
catch so that the subscribed consumer can properly handle any errors.


### Finishing an Observable

`observer.complete` is a function that takes no arguments and is called by the
observable producer to let all subscribers know that it has "finished", it won't
be delivering any more values.

The third argument to `subscribe` is a function to handle completion.

A use case for this concept would be if you wanted to concatenate two observables
together. This could only be accomplished if the first observable ends.

Another use case would be if the observer was only interested in the final value
produced. "Last" can only be determined if the observable has finished.
