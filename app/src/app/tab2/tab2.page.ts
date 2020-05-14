import { Component } from '@angular/core';
import { MediaCapture } from '@ionic-native/media-capture/ngx'
import { Media} from '@ionic-native/media/ngx'
import { File } from '@ionic-native/file/ngx'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(private file: File, private media:Media) { }
  
  recordState = false;
  recordLabel = "Record";
  recordColor = "secondary";
  recordTime : number = 0;
  interval;
  recordingFile;
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

      this.file.createFile(this.file.externalDataDirectory, 'record.mp3', true)
      .then((path) => {
  
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
    }

    /*
    this.file.createFile(this.file.externalDataDirectory, 'record.mp3', true)
    .then((path) => {

      let file = this.media.create(path.toURL());
      file.startRecord();
      this.recordState = true;
      this.recordLabel = "Recording";
      console.log("Recording started");

      window.setTimeout(() => {
        file.stopRecord();
        this.recordState = false;
        this.recordLabel = "Record";
        console.log("Recording stoped");
      } , 10000);
    })

    .catch((err) => {console.log("ERR-CREATEFILE: " + err)});
    */
  }

  play(myFile) {
    
  }





}


