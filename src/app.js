import './style.css'
import { Observable } from 'rxjs'

// Function
function foo () {
  console.log('hello')
  return 42
}

console.log(foo.call())

// Observable (PUSH)
// producer determines when the values are sent
const bar = Observable.create(observer => {
  console.log('hello')
  observer.next(42)
  observer.next(100)
  observer.next(200)
  setTimeout(() => observer.next(300), 1000)
})

// consumer
bar.subscribe(x => console.log(x))

// Generator (PULL)
// producer
function * baz () {
  console.log('hello')
  yield 42
  yield 100
  yield 200
}

// consumer determines when the values are sent
const iterator = baz()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
