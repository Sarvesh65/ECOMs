// Login

var passport=require('passport')
,LocalStratergy=require('passport-local').Strategy;
const User = require('./models/user');

passport.use('local',new LocalStratergy({
  usernameField:'email',
  passwordField:'password',
},
  function(username,password,done){
    User.findOne({email:username},function(err,user){
      if(err){return done(err);}
      if(!user){
        return done(null,false,{message:'Incoorect Username'});
      }
      if(!user.isValid(password)){
        return done(null,false,{message:'Incorrect Password'});
      }
      return done(null,user);
    });
  }
));

passport.serializeUser(function(user,done){
  done(null,user._id);
});

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    done(err,user);
  });
});
