module.exports = function(app) {
  app.dataSources.localpg.automigrate('KnowBit', function(err) {
    if (err) throw err;

    console.log('KnowBit automigrate callback - The boot script containing the automigration command will run each time you run your application. Since automigrate() first drops tables before trying to create new ones, it won\'t create duplicate tables.');

    app.models.KnowBit.create([
      {label: 'Stujo\'s GitHub', link: 'https://github.com/stujo'},
      {label: 'Loopback API Data Source', link: 'http://docs.strongloop.com/display/public/LB/Connect+your+API+to+a+data+source'},
      {label: 'Object Playground', link: 'http://www.objectplayground.com/'},
    ], function(err, createdInstances) {
      if (err) throw err;
       console.log('Models created: \n', createdInstances);
    });
  });
};
