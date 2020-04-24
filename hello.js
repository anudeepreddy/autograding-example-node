var spawn = require('child_process').spawn;
function hello(callback){
    var child = spawn('a.out');
    child.stdin.end('12 34 56');
    child.stdout.on('data', (data) => {
        callback(data);
    });
    child.on('close', (code) => console.log('Exit code: ' + code));
}
hello((data)=>{
    console.log("data");
})
module.exports = hello;
