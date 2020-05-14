var jwt = require('jsonwebtoken')

var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%"
jwt.sign(
  {
      userId : result[0].id,
      userEmail : result[0].user_email
  },
  tokenKey,
  {
      expiresIn : '10d',
      issuer : 'fintech.admin',
      subject : 'user.login.info'
  },
  function(err, token){
      console.log('로그인 성공', token)
      res.json(token)
  }
)