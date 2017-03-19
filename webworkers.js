function primes(target) {
  var n = 1, nPrimes = 0;
  primelist = "";
  search: while (n < target) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
    nPrimes++;

    if(nPrimes == 100) {
      self.postMessage(primelist);
      nPrimes = 0;
      primelist = "";
    }
  }
  self.postMessage(primelist);
  self.postMessage("");
}

self.onmessage = function(event) {
  primes(event.data);
}
