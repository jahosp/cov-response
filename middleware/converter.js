class Converter {
    constructor(){
        this.spawn = require('child_process').spawn;
        this.cmd = './ffmpeg';
    }

    convert(file, cb){

        var input = './records/' + file
        var output = "./records/output/"+file.split('.')[0] + '.flac'

        console.log(output)

        var args = [
            '-i',input,
            '-f','flac',output
        ];

        var proc = this.spawn(this.cmd, args);

        proc.on('close', function() {
            cb()
        });
    }
}

module.exports = Converter