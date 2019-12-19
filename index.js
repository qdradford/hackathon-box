var box_sdk = require('box-node-sdk');
var fs = require('fs');


var sdk = new box_sdk({
    clientID: '',
    clientSecret: ''
});


// create client with developer token
var client = sdk.getBasicClient('Sg90sNg4wlmNTXU1DLvk9B4nOZGoHf5G');


var fileData = fs.createReadStream('test.dcm');

// client.files.uploadFile('0','test.dcm', fileData, (err, file) => {

//     console.error(err);
//     console.log(file);
// });


client.folders.getItems('0', {fields: 'name', offset:0, limit:25}).then((items) => {

    console.log(items);
});
