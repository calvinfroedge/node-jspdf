This package allows you to use jsPDF on the server. Any methods that require DOM stuff will fail, but you can create and modify PDF files and save them to disk as shown in the documentation.

Dependencies:
```
wget
unzip
```

To use:

```
npm install
```

And then...

```
var jsPDF = require('node-jspdf');

var doc = jsPDF();
doc.text(20, 20, 'Hello, world.');
doc.save('Test.pdf', function(err){console.log('saved!');});
```
