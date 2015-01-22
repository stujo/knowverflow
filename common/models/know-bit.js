module.exports = function(KnowBit) {
    KnowBit.my_remote_method = function(cb) {

    var response = 'This is my_remote_method on the KnowBit model';

    cb(null, response);
  };
  KnowBit.remoteMethod(
    'my_remote_method',
    {
      http: {path: '/my_remote_method', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );

};
