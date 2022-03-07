const Course = require('../models/Course');
class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({}, function (err, course) {
      if (!err) {
        res.json(course);
      } else {
        res.status(404).json({ err: 'Course not found' });
      }
    });

    // res.render('home');
  }

  // [GET] search
  search(req, res) {
    res.send('Search Page');
  }
}

module.exports = new SiteController();
