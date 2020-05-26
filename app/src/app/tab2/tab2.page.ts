import { Component } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Media} from '@ionic-native/media/ngx'
import { File, FileEntry } from '@ionic-native/file/ngx'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(private file: File, private media:Media, private transfer:FileTransfer, private http:HttpClient) { }
  
  recordState = false;
  recordLabel = "Record";
  recordColor = "secondary";
  recordTime : number = 0;
  interval;
  recordingFile;
  fileTransfer: FileTransferObject = this.transfer.create();
  fileUrl;
  contador : number = 0;

  startTimer() {
    this.interval = setInterval(() => {
        this.recordTime++;
    },1000)
  }
  stopTimer() {
    clearInterval(this.interval);
    this.recordTime = 0;
  }

  startRecording() {
    // no recording 
    if (!this.recordState) {

      this.recordState = true;
      this.recordLabel = "Recording";
      this.recordColor = "danger";
      this.startTimer()
      console.log("Recording started");

      this.file.createFile(this.file.externalDataDirectory, 'record'+this.contador+'.aac', true)
      .then((path) => {
        this.contador++;
        this.fileUrl = path.toURL();
        this.recordingFile = this.media.create(path.toURL());
        this.recordingFile.startRecord();
      })
      .catch((err) => {console.log("ERR-CREATEFILE: " + err)});
    
    } else { // already recording
      this.recordState = false;
      this.recordLabel = "Record";
      this.recordColor = "secondary";
      this.stopTimer();
      console.log("Recording stoped");
      this.recordingFile.stopRecord();
      this.recordingFile.release();
      console.log("Recorded file at: " + this.fileUrl);
      this.sendRecord();
    }

  }

 sendRecord() {
    console.log("Sending File");
    let fileURL = '' + this.fileUrl;
    let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: fileURL.substr(fileURL.lastIndexOf('/')+1),
        mimeType: 'audio/mpeg',
        headers: {'Content-Type':'audio/mpeg'}
    }
    
    let user_id = 'testId';
    // POSAR URL DEL MIDDLEWARE
    let endpoint = encodeURI('http://192.168.1.169:3000/audio/' + user_id);

    this.fileTransfer.upload(fileURL, endpoint, options)
      .then((data) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      })
 }



}


