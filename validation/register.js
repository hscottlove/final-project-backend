module.exports = ({ username, profileimage, email, password, password2 }) => {
    let errors = [];
    if (!username) {
      errors.push({ message: 'Please enter your username' });
    }

    if (!profileimage) {
      errors.push({ message: 'Please enter your image' });
    }
  
    if (!email) {
      errors.push({ message: 'Please enter your email' });
    }
  
    if (!password) {
      errors.push({ message: 'Please enter your password' });
    }
  
    if (password !== password2) {
      errors.push({ message: 'Your passwords do not match' });
    }
  
    return {
      errors,
      notValid: Boolean(errors.length),
    }
  }
  