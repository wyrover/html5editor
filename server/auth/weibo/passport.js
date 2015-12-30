var passport = require('passport');
var WeiboStrategy = require('passport-weibo').Strategy;

exports.setup = function (User, config) {
  passport.use(new WeiboStrategy({
    clientID: config.weibo.app_key,
    clientSecret: config.weibo.app_secret,
    callbackURL: config.weibo.callbackURL
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