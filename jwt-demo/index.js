const jwt = require('jsonwebtoken');

// Step 1: Create a JWT
const createToken = (user) => {
  const payload = {
    username: user.username,
    role: user.role,
  };

  // Secret key (In a real app, keep this secret safe)
  const secretKey = 'your_secret_key';

  // Token expiration time (e.g., 1 hour)
  const options = { expiresIn: '1h' };

  // Create the token
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

// Step 2: Verify a JWT
const verifyToken = (token) => {
  try {
    const secretKey = 'your_secret_key';
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
};

// Example usage
const user = { username: 'Anusha', role: 'db_developer' };
const token = createToken(user);

console.log('Generated JWT:', token);

const verifiedData = verifyToken(token);
if (verifiedData) {
  console.log('Verified Token Data:', verifiedData);
} else {
  console.log('Invalid Token');
}

