import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const query = "SELECT * FROM users WHERE email = ?";
  db.execute(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result[0];
    // Implement password comparison logic here
    // For example, using bcrypt to compare hashed passwords
    // bcrypt.compare(password, user.password, (err, isMatch) => {
    //   if (err) {
    //     return res.status(500).json({ message: "Server error" });
    //   }
    //   if (!isMatch) {
    //     return res.status(400).json({ message: "Invalid credentials" });
    //   }
    //   // Generate and send JWT token
    //   const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    //   res.json({ token });
    // });
  });
});

export default router;
