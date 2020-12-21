# useFetch

### How to use useFetch?

```jsx
  const url = "URL NEEDED TO FETCH";

  const {
    data,  
    loading,
    error
  } =  useFetch(url); 
```

#### Example with real URL.
```jsx

  const countriesUrl = 'https://restcountries.eu/rest/v2/all';

  const {
    data,  
    loading,
    error
  } =  useFetch(url); 
  
```

