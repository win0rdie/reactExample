const UncontrolledForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    setTimeout(() => {
      console.log(email, password);
      e.target.reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Enter your email" type="email" />
      <input
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default UncontrolledForm;
