# useForm

### How to use hook useForm?

```jsx

const initialForm = {
  name: ''
}

const [formValues, handleInputChange, reset] = useForm(initialForm);

const { name } = formValues;

return (
  <form onSubmit={ handleSearch }>
    <input
      autoComplete="off"
      className="form-control"
      name="name"
      onChange={ handleInputChange }
      placeholder="Put yoour age here...!"
      type="text"
      value={ name }
    />
    <button className="btn m-1 btn-block btn-outline-primary" type='submit'>
      Search!
    </button>
  </form>
)
```
#### IMPORTANT:

1. **formValues:** the current form values
2. **handleInputChange:** a function tha change the value for a specific attribute.
3. **reset:** a function that reset the value to the initialForm.

**Note:** the input value must be the same as the attribute passed on the initialForm.
