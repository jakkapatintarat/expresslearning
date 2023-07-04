//HTTPrequest with id
// หรือการส่งค่าพารามิเตอร์ไปพร้อมกับ HTTP request

const express = require('express');
const app = express();
const member = [
    {id:1,name: 'Jakkapat'},
    {id:2, name: 'Korrawee'},
    {id:3, name: 'Hassadin'},
];

app.get('/', (req, res) => {
    res.send('Hello')
});

app.get('/member', (req, res) => {
    res.send(member);
});

app.get('/member/:id', (req, res) => {
    const id = req.params.id;
    const foundMember = member.find(member => member.id === parseInt(id)); //จำเป็นต้องใช้ parseInt() หรือ Number ถ้าไม่ใช้จะไม่สามารถค้นหาได้ เพราะต้องแปลง req เป็นตัวเลข
    if (foundMember) {
        res.send(foundMember);
    } else {
        res.send('Member not found');
    }
});


app.listen(3000, () => {
    console.log('running on port 3000');
})