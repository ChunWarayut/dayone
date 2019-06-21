/* โหลด Express มาใช้งาน */
var app = require('express')(); // เสมือน import package มาใช้งาน
var bodyParser = require('body-parser');
var users = require('./users'); 
/* ใช้ port 5134 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 5134;

 

// parse application/json
app.use(bodyParser.json()); // ให้รองรับ json encoded bodies
// ให้รองรับ  urlencoded bodies
app.use(bodyParser.urlencoded({
	extended: true
})); 

/* Routing */ 
// path สมมติที่เราตั้งขึ้นมาเองซึ่งไม่ได้เป็น path จริงๆตามโครงสร้าง folder แต่มันคือ path
// ที่เราใช้เรียกบน url เว็บไซต์นั่นเอง 
//parameter req คือ header ของ client ที่ส่งเข้ามา ซึ่งอาจจะดู cookies, session ที่เข้ามาก็ได้
//parameter res คือ สิ่งที่ server Node เราจะตอบสนองข้อมูลกลับไปนั่นเอง
app.get('/', function (req, res) { 
    // server จะสามารถส่งทั้ง header ต่างๆหรือจะตัวหนังสือ json อะไรก็ได้กลับไป
	res.send('<h1>Hello Node.js</h1>');
});

app.get('/user', function (req, res) {
	res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
	var id = req.params.id;
	res.json(users.findById(id));
});

app.post('/newuser', function (req, res) {
	var json = req.body;
	res.send('Add new ' + json.name + ' Completed!');
}); 
  
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});