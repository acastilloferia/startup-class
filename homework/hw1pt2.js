#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";

var out="2";

var primeCount=0;
var count=3;
var primes = new Array();
primes[0]=2;

while (primeCount<99)
{
	if (isPrime(count) == true)
	{
		primeCount=primeCount+1;
		primes[primeCount]=count;
	}
	count=count+1;
}

for (var x=1; x<100; x++)
{
	var n=primes[x];
	out=out+","+n.toString();
}

fs.writeFileSync(outfile, out);




function isPrime(n)
{
	for (x in primes)
	{
		if (n%primes[x] === 0)
		{
			return false;
		}
	}
	return true;
}

