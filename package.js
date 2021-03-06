Package.describe({
  name: 'nodexpert:react-switchbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nodexpertsdev/react-switchbox',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.use('fortawesome:fontawesome');
  api.mainModule('react-switchbox.jsx');
  api.addFiles('style.css', 'client');
});
