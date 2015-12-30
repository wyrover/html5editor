var passport = require('passport');
var QQStrategy = require('passport-qq').Strategy;

exports.setup = function (User, config) {
  passport.use(new QQStrategy({
    clientID: config.qq.app_key,
    clientSecret: config.qq.app_secret,
    callbackURL: config.qq.callbackURL
  },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile)
      User.findOne({
        'profile.id': profile.id
      }, function(err, user) {
        if (!user) {
          user = new User({
            provider: 'sina',
            token: accessToken,
            profile: profile._json
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }
  ));
};
