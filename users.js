/* ลองใส่ข้อมูลเล่นๆ เพื่อเอาไว้เทส */
var users = [
    {
        "id": 1,
        "username": "chunwarayut",
        "name": "Chun D. Tae",
        "position": "Software Engineer"
    },
    {
        "id": 2,
        "username": "warayut",
        "name": "Sir Warayut",
        "position": "Frontend Deverloper"
    },
    {
        "id": 3,
        "username": "Chun",
        "name": "Chun Wara",
        "position": "Backend Deverloper"
    },
    {
        "id": 4,
        "username": "Wara",
        "name": "Taekra Wara",
        "position": "CEO"
    },
    {
        "id": 5,
        "username": "Som Chun",
        "name": "Chun Warayut Taekrathok",
        "position": "CTO"
    }
    ];
     
    /* ฟังก์ชันสำหรับหา user ทั้งหมดในระบบ ในส่วนนี้ผมจะให้ส่งค่า users ทั้งหมดกลับไปเลย */
    exports.findAll = function() {
        return users;
    };
     
    /* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้เราจะวน loop หา users ที่มี id ตามที่ระบุแล้วส่งกลับไป */
    exports.findById = function (id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) return users[i];
        }
    };