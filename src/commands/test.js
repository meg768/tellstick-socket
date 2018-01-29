var sprintf = require('yow/sprintf');
var telldus = require('telldus');


var Module = new function() {

	function defineArgs(args) {

		args.wrap(null);

	}

	function run(argv) {

		try {
			telldus.addRawDeviceEventListener(function(id, data) {
				console.log(id, data);
			});

			var val = '36';
			console.log(telldus.getDeviceParameterSync(4, 'house', val));
			console.log(val);
			setTimeout(function(){}, 10 * 1000);


		}
		catch(error) {
			console.log(error.stack);
		}


	}

	module.exports.command  = 'test [options]';
	module.exports.describe = 'Test script';
	module.exports.builder  = defineArgs;
	module.exports.handler  = run;



};