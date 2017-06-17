import './style.css'
import { Observable } from 'rxjs'

// Observable (PUSH)
// producer determines when the values are sent
const bar = Observable.create(observer => {
  try {
    console.log('hello')
    observer.next(42)
    observer.next(100)
    observer.next(200)
    observer.complete()
    setTimeout(() => observer.next(300), 1000) // this line will never be run
  } catch (err) {
    observer.error(err)
  }
})

// consumer
bar.subscribe(
  function nextValueHandler (next) {
    console.log(next)
  },
  function errorHandler (err) {
    console.error(`Something went wrong: ${err}`)
  },
  function completionHandler () {
    console.log('done')
  }
)
