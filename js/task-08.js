document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
      alert("All fields must be completed!");
      return;
    }

    const formData = {
      email: email,
      password: password
    };

    console.log("Form data:", formData);

    form.reset();
  });
