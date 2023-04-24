def memoized_fib(n, cache={}):
    if n in cache:
        result = cache[n]
    elif n <= 2:
        result = 1
        cache[n] = result
    else:
        result = memoized_fib(n - 2) + memoized_fib(n - 1)
    cache[n] = result
    return result
