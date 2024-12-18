function signUp() {
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    
    if (email && password) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Sign Up Successful! Please Sign In.');
      document.getElementById('sign-up-form').style.display = 'none';
      document.getElementById('sign-in-form').style.display = 'block';
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  function signIn() {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    
    if (email === storedEmail && password === storedPassword) {
      alert('Sign In Successful!');
      document.getElementById('profile-info').innerHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p>Welcome back, ${email.split('@')[0]}!</p>
      `;
      document.getElementById('sign-in-form').style.display = 'none';
    } else {
      alert('Invalid email or password.');
    }
  }
  
  document.getElementById('sign-out-link').addEventListener('click', function() {
    alert('You have been signed out.');
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('sign-in-form').style.display = 'none';
    document.getElementById('profile-info').innerHTML = '';
  });