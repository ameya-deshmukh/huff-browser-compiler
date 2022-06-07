const {} = require('./generateFile');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get('/', (req, res) => {
  return res.json({ hello: "world!" });
});

app.post("/run", (req, res) => {
  const { language="huff", code} = req.body;
 

  if (code==undefined){
    return res.status(400).json({success: false, error: "Empty code body!"});
    //now need to generate a .huff file from the entered code
    //and run the file, return output as the response. 
  }
  
  const filepath = await generateFile(language, code);

  return res.json({ filepath });
});
app.listen(5000, () => {
  console.log('Listening on port 5000');

});
