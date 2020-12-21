# useForm

### How to use useForm?

```jsx

const initialForm = {
  name: '',
  age: 0,
  email: ''
}

const [formValues, handleInputChange, reset] = useForm(initialForm);
```

#### IMPORTANT:

1. **formValues:** the current form values
2. **handleInputChange:** a function tha change the value for a specific attribute.
3. **reset:** a function that reset the value to the initialForm.
