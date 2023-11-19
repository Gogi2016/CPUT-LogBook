const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '981021@Vuyo',
  database: 'LOGBOOK',
});

// Check the MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Function to send verification email
const transporter = nodemailer.createTransport({
  // Configure your email service here
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_EMAIL_PASSWORD',
  },
});

function sendVerificationEmail(email, verificationCode) {
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: email,
    subject: 'Account Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Verification code email sent: ' + info.response);
    }
  });
}

// Student Registration Endpoint
app.post('/register/student', async (req, res) => {
  const { studentNumber, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const verificationCode = crypto.randomBytes(6).toString('hex');

  // Save the verification code in the database
  db.query(
    'INSERT INTO students (studentNumber, email, password, verificationCode) VALUES (?, ?, ?, ?)',
    [studentNumber, email, hashedPassword, verificationCode],
    (err, _result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error registering student');
      } else {
        // Send the verification code via email
        sendVerificationEmail(email, verificationCode);
        res.status(201).send('Student registered successfully');
      }
    }
  );
});

// Supervisor Registration Endpoint
app.post('/register/supervisor', async (req, res) => {
  const { supervisorName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const verificationCode = crypto.randomBytes(6).toString('hex');

  // Save the verification code in the database
  db.query(
    'INSERT INTO supervisors (supervisorName, email, password, verificationCode) VALUES (?, ?, ?, ?)',
    [supervisorName, email, hashedPassword, verificationCode],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error registering supervisor');
      } else {
        // Send the verification code via email
        sendVerificationEmail(email, verificationCode);
        res.status(201).send('Supervisor registered successfully');
      }
    }
  );
});

// Update the password in the database using the verification code
app.post('/reset/student/confirm', async (req, res) => {
  const { email, verificationCode, newPassword } = req.body;

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Verify the verification code from the database
  db.query(
    'SELECT * FROM students WHERE email = ? AND verificationCode = ?',
    [email, verificationCode],
    async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error verifying verification code');
      } else if (result.length === 0) {
        res.status(401).send('Invalid verification code or email');
      } else {
        // Update the password in the database
        db.query(
          'UPDATE students SET password = ? WHERE email = ? AND verificationCode = ?',
          [hashedNewPassword, email, verificationCode],
          (updateErr, updateResult) => {
            if (updateErr) {
              console.error(updateErr);
              res.status(500).send('Error updating password');
            } else {
              res.status(200).send('Password reset successful');
            }
          }
        );
      }
    }
  );
});

// Update the password in the database using the verification code
app.post('/reset/supervisor/confirm', async (req, res) => {
  const { email, verificationCode, newPassword } = req.body;

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Verify the verification code from the database
  db.query(
    'SELECT * FROM supervisors WHERE email = ? AND verificationCode = ?',
    [email, verificationCode],
    async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error verifying verification code');
      } else if (result.length === 0) {
        res.status(401).send('Invalid verification code or email');
      } else {
        // Update the password in the database
        db.query(
          'UPDATE supervisors SET password = ? WHERE email = ? AND verificationCode = ?',
          [hashedNewPassword, email, verificationCode],
          (updateErr, updateResult) => {
            if (updateErr) {
              console.error(updateErr);
              res.status(500).send('Error updating password');
            } else {
              res.status(200).send('Password reset successful');
            }
          }
        );
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


