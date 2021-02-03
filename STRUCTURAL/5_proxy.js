function networkFetch(url) {
    return `${url} - Ответ с сервера`
  }
  
  const cache = new Set()
  const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
      const url = args[0]
      if (cache.has(url)) {
        return `${url} - Ответ из кэша`
      } else {
        cache.add(url)
        // Reflect - это встроенный объект, который предоставляет методы для перехватывания JavaScript операций. 
        // Эти методы аналогичны методам proxy handler`ов. Reflect - это не функциональный,
        // а простой объект, он не является сконструированным.
        return Reflect.apply(target, thisArg, args)
      }
    }
  })
  
  console.log(proxiedFetch('angular.io'))
  console.log(proxiedFetch('react.io'))
  console.log(proxiedFetch('angular.io'))