// create style here
const styles = {
  form: { margin: '16px 20% 0' },
  formGroup: { marginBottom: '16px' },
  formLabel: {
    marginBottom: '8px',
    display: 'block'
  },
  formInput: {
    width: '100%',
    padding: '10px 15px',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: '7px',
    border: '1px solid red'
  }
}

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>Username</label>
          <input type="text" id="username" style={styles.formInput} />
        </div>
      </form>
    </div>
  )
}

export default Form
