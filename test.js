function findPrimesNumberJs(limit){
    let primes = []
    for (let index = 1; index <= limit; index++) {
      let isPrime = true
      for (let focus = 1; focus <= index; focus++) {
        if(focus != 1 && focus != index){
          const result = index % focus
          if(result == 0) isPrime = false
        }
      }
      if(isPrime) primes.push(index)
    }
    return primes.join(",")
  }

  console.log(findPrimesNumberJs(7))