require('shelljs/global')
var express = require('express');
var router = express.Router();
/* var nodeversion = exec('node -v').output;
var sysversion = exec('uname -a').output;
var cpuversion = exec('cat /proc/cpuinfo | grep "model name" | tail -n 1 | cut -d: -f2 | cut -c 2-').output; */

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Poolium',
  	shownode: nodeversion
  });
});


/* FRONT END RENDERS */
router.get('/i/home', function(req, res) {
  res.render('template', {
        title: 'Poolium',
	director: '/p/home/',
	page: 'template'
  });
});

router.get('/i/graphs', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/graphs/',
        page: 'template'
  });
});

router.get('/i/tables', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/tables/',
        page: 'template'
  });
});


router.get('/i/readings', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/readings/',
        page: 'template'
  });
});

router.get('/i/schedule', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/schedule/',
        page: 'template'
  });
});

router.get('/i/system', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/system',
        page: 'template'
  });
});

router.get('/i/calibration', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/calibration',
        page: 'template'
  });
});


router.get('/i/notifications', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/notifications',
        page: 'template'
  });
});

router.get('/i/information', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/information',
        page: 'template',
  });
});

router.get('/i/licensing', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/licensing',
        page: 'template',
  });
});

router.get('/i/credits', function(req, res) {
  res.render('template', {
        title: 'Poolium',
        director: '/p/credits',
        page: 'template'
  });
});


/* BACK END RENDERS */
router.get('/p/home', function(req, res) {
  res.render('home', {
        title: 'Poolium',
        page: 'home'
  });
});

router.get('/p/graphs', function(req, res) {
  res.render('graphs', {
        title: 'Poolium',
        page: 'home'
  });
});

router.get('/p/tables', function(req, res) {
  res.render('tables', {
        title: 'Poolium',
        page: 'home'
  });
});

router.get('/p/readings', function(req, res) {
  res.render('readings', {
        title: 'Poolium',
        page: 'home'
  });
});

router.get('/p/schedule', function(req, res) {
  res.render('schedule', {
        title: 'Poolium',
        page: 'home'
  });
});


router.get('/p/system', function(req, res) {
  res.render('settings', {
        title: 'Poolium',
        page: 'settings'
  });
});

router.get('/p/calibration', function(req, res) {
  res.render('calibration', {
        title: 'Poolium',
        page: 'settings'
  });
});


router.get('/p/notifications', function(req, res) {
  res.render('notifications', {
        title: 'Poolium',
        page: 'settings'
  });
});

router.get('/p/information', function(req, res) {
  res.render('information', {
        title: 'Poolium',
        page: 'settings',
        node: nodeversion,
        kernel: sysversion,
        cpu: cpuversion
  });
});

router.get('/p/licensing', function(req, res) {
  res.render('licensing', {
        title: 'Poolium',
        page: 'settings'
  });
});

router.get('/p/credits', function(req, res) {
  res.render('credits', {
        title: 'Poolium',
        page: 'settings'
  });
});




module.exports = router;
