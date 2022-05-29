
const data=[
  [25.09, -13.34, 19.71, -22.90, 15.11, -21.48, 15.13, -15.44, -46.75, -3.38, 9.12, -28.53, 5.06, -19.57, 3.82, -16.52, -35.91, 61.11, 4.16, -32.30, 2.29, -22.82, 1.13, -17.78, -24.61, 76.64, -2.35, -28.79, -0.40, -20.86, 0.17, -16.80, -14.10, 76.85, -10.51, -20.05, -6.63, -14.57, -5.34, -14.85, 0.86, -0.69],
  [23.63, -16.69, 13.53, -23.58, 1.69, -22.74, -4.48, -14.57, -11.00, 7.97, 4.09, -22.79, 3.33, -4.69, 1.98, -3.82, -26.16, 31.77, 1.81, -20.68, 3.50, 5.90, 0.68, 0.55, -21.80, 19.16, -0.07, -17.87, 4.42, 6.22, 0.93, 0.45, -20.17, 19.85, -2.07, -14.37, 3.03, 2.86, 0.16, 0.32, -0.05, -0.39],
  [10.21, -18.07, 14.51, -9.34, 14.11, -5.44, 12.73, -5.43, -12.21, 23.38, 24.57, -4.78, 16.14, -3.54, 12.32, -2.64, -50.96, 22.49, 27.72, -2.89, 18.01, -3.56, 13.53, -2.91, -58.81, 18.79, 24.69, -1.24, 16.60, -3.05, 12.15, -2.95, -54.33, 14.51, 19.29, -0.28, 12.24, -1.75, 9.75, -2.13, 0.31, -0.94],
  [15.88, -10.05, 10.38, -16.75, 3.42, -16.28, 2.17, -12.37, -13.16, 9.76, 3.96, -17.60, 2.84, -10.95, 2.53, -8.63, -20.61, 34.82, 4.17, -18.60, 3.63, -12.09, 2.87, -9.27, -21.41, 40.92, 0.75, -17.24, 2.15, -12.25, 2.12, -9.77, -15.62, 43.28, -1.44, -13.85, 0.40, -10.00, 1.16, -9.55, 1.34, -0.17],
  [28.75, -10.56, 18.56, -19.25, 7.05, -18.75, 0.07, -13.99, -18.86, 1.26, 5.28, -8.58, 1.61, 5.39, 0.99, 0.40, -26.29, 1.92, 7.90, 4.06, 1.38, 21.72, -0.67, 6.47, -26.19, -27.62, 8.23, 6.06, 3.24, 20.83, -0.35, 6.27, -27.07, -25.15, 6.48, 1.73, 4.12, 14.37, -0.61, 6.35, -0.09, -0.36],
  [20.92, -12.80, 16.10, -19.36, 15.50, -16.50, 17.48, -12.67, -36.06, 2.71, 19.49, -16.57, 14.43, -6.78, 11.84, -4.46, -50.33, 25.27, 20.21, -17.65, 14.49, -5.06, 11.61, -1.70, -50.76, 25.53, 18.49, -15.85, 14.63, -2.52, 11.07, 0.63, -49.05, 20.59, 15.75, -11.53, 11.71, -2.69, 9.65, -0.51, 0.94, -0.33],
  [20.80, -13.02, 15.03, -24.57, 14.46, -18.95, 19.25, -10.76, -49.46, 2.54, 3.71, -23.45, 3.59, -11.78, 2.32, -11.23, -24.49, 48.04, 1.23, -8.99, 4.01, 20.89, 3.07, 12.43, -23.01, -20.52, 0.25, -7.17, 7.66, 20.65, 5.22, 12.79, -26.43, -21.56, -8.61, -16.34, -3.96, -10.94, -2.24, -13.71, 1.09, -0.61],
  [16.35, -23.25, 17.52, -12.01, 16.17, -2.86, 11.34, -0.09, -11.42, 10.15, 25.61, -9.66, -2.27, -0.71, -6.09, 1.78, -13.26, 24.01, 23.89, -12.29, -5.06, -2.52, -7.54, 1.03, -10.36, 26.94, 19.59, -12.54, -6.19, -3.54, -7.32, 1.11, -6.44, 26.25, 14.10, -11.92, -5.26, -4.85, -6.98, 0.04, 1.26, -1.60],
  [24.00, -24.06, 9.74, -27.92, 0.08, -21.54, -6.37, -13.00, -17.11, 8.39, 2.46, -24.40, 2.51, -7.88, 0.29, -5.65, -18.23, 40.63, 15.11, -17.93, 9.31, 21.81, -1.96, 12.74, -33.60, -9.36, 17.50, -14.08, 9.27, 22.32, -3.57, 12.40, -32.94, -10.13, 16.41, -12.08, 10.00, 14.02, -2.85, 10.65, 0.56, -0.59],
  [-5.96, -23.69, -11.97, -16.55, -10.57, -12.15, -9.82, -8.91, -2.14, 25.39, -16.20, -14.70, -3.81, -9.85, -1.01, -6.51, 16.94, 37.84, -20.07, -14.75, -4.97, -12.33, -1.30, -8.50, 25.43, 43.13, -19.84, -12.57, -5.07, -12.74, -1.60, -9.60, 28.54, 42.75, -16.88, -7.85, -9.24, -8.40, -6.61, -7.81, 0.49, -0.54],
  [24.30, -4.79, 23.14, -13.10, 18.11, -10.31, 13.78, -5.03, -43.77, -22.88, 7.56, -23.00, 4.29, -15.37, 3.13, -13.36, -29.34, 46.71, 6.95, -25.63, 4.37, -18.00, 3.24, -14.22, -28.66, 58.54, 4.67, -23.36, 3.49, -16.93, 3.43, -13.46, -26.45, 59.42, 0.07, -18.46, 0.17, -12.91, 1.22, -12.48, 0.93, -0.29],
  [-10.87, -17.55, 0.43, -18.78, 7.85, -12.90, 9.88, -6.86, -21.83, 4.24, 15.88, -25.24, 10.95, -5.03, 5.43, 0.78, -20.12, 32.48, 15.41, -29.33, 9.52, -3.62, 3.34, 1.63, -14.83, 37.27, 12.91, -27.61, 6.35, -2.74, 1.28, 1.62, -7.04, 36.86, 8.31, -21.94, 2.58, -3.65, 0.07, 0.38, -0.39, -1.04]
];

/*
data:
0: hello
1: goodbye
2. please
3. thank you
4. yes
5. no
6. i love you
7. im sorry
8. where
9. correct
10. drink
11.eat
*/


/////////////////////////////////////////////////////////////////////
(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('videoElement');
    /////////////////////////////////////////////////////////////////
    if (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) {
              navigator.mediaDevices.getUserMedia({ video: true,
                    audio:false })
                .then(function (stream) {
                  video.srcObject = stream;
                })
                .catch(function (err) {
                  console.log("Something went wrong!");
                });
            }
    ///////////////////////////////////////////////////////////////
    video.addEventListener('play',function()
                          {
        draw(this, context,640,480);
    },false);
    ///////////////////////////////////////////////////////////////
    async function draw(video,context, width, height){
        context.drawImage(video,0,0,width,height);
        const model = await handpose.load();
        const predictions = await model.estimateHands(video);
        //console.log(predictions);
        document.getElementById("Waiting").style.display="none";
        ///////////////////////////////////////////////////////////
        if (predictions.length > 0){
           for (let i = 0; i < predictions.length; i++) {
            drawHand(predictions,context);
            var probability = predictions[i].handInViewConfidence;
            var prob = (probability*100).toPrecision(5).toString();
            var text = "Confidence:"+prob+"%";
            context.font = "16pt Comic Sans MS";
            context.fillStyle = "#FF0000";
            //context.fillText(text,425,20);
        }

            //////////////////////////////////////////////////////
           }
           
        setTimeout(draw,250,video,context,width,height);
        /////////////////////////////////////////////////////////
    }
})();
 
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };
  
  // Infinity Gauntlet Style
  const style = {
    0: { color: "yellow", size: 10 },1: { color: "gold", size: 6 },2: { color: "green", size: 10 },3: { color: "gold", size: 6 },4: { color: "gold", size: 6 },
    5: { color: "purple", size: 10 },6: { color: "gold", size: 6 },7: { color: "gold", size: 6 },8: { color: "gold", size: 6 },9: { color: "blue", size: 10 },
    10: { color: "gold", size: 6 },11: { color: "gold", size: 6 },12: { color: "gold", size: 6 },13: { color: "red", size: 10 },14: { color: "gold", size: 6 },
    15: { color: "gold", size: 6 },16: { color: "gold", size: 6 },17: { color: "orange", size: 10 },18: { color: "gold", size: 6 },
    19: { color: "gold", size: 6 },20: { color: "gold", size: 6 },
  };
/*
0:base palm
1:thumb below base joint
2:thumb base joint
3:thumb joint 1
4:thumb joint 2
5:index base joint
6:index joint 1
7:index joint 2
8:index joint 3
9:middle base joint
10:middle joint 1
11:middle joint 2
12:middle joint 3
13:4th base joint
14:4th joint 1
15:4th joint 2
16:4th joint 3
17:pinky base joint
18:pinky joint 1
19:pinky joint 2
20.pinky joint 3
*/
var dat=[];
var n=0;
var word="";
const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0) {
      // Loop through each prediction
      predictions.forEach((prediction) => {
        // Grab landmarks
        const landmarks = prediction.landmarks;
  
        // Loop through fingers
        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          //  Loop through pairs of joints
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            // Get pairs of joints
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];
  
            // Draw path
            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "plum";
            ctx.lineWidth = 4;
            //ctx.stroke();
          }
        }
        
        var pred=[];
        for(let i=0;i<landmarks.length-1;i++){
          var d=[(landmarks[i+1][0]-landmarks[i][0]),(landmarks[i+1][1]-landmarks[i][1])];
          
          pred.push(d);
          
          
        }
        var bestDif=10000;
        var bestIndex=0;
        for(let i=0;i<data.length;i++){
          var totalDif=0;
          for(let k=0;k<pred.length*2;k+=2){
            //console.log(k);
            totalDif+=Math.abs(pred[k/2][0]-data[i][k]);
            totalDif+=Math.abs(pred[k/2][1]-data[i][k+1]);
          }
          if(totalDif<bestDif){
            bestDif=totalDif;
            bestIndex=i;
          }
        }
        let synth = window.speechSynthesis;
        var newWord="";
        
        if(bestIndex==0){
          newWord="Hello";
        }else if(bestIndex==1){
          newWord="Goodbye";
        }else if(bestIndex==2){
          newWord="Please";
        }else if(bestIndex==3){
          newWord="Thank you";
        }else if(bestIndex==4){
          newWord="Yes";
        }else if(bestIndex==5){
          newWord="No";
        }else if(bestIndex==6){
          newWord="I love you";
        }else if(bestIndex==7){
          newWord="Sorry";
        }else if(bestIndex==8){
          newWord="Where";
        }else if(bestIndex==9){
          newWord="Correct";
        }else if(bestIndex==10){
          newWord="Drink";
        }else if(bestIndex==11){
          newWord="Eat";
        }
        if(newWord!=word){
          word=newWord;
         
          const utterThis = new SpeechSynthesisUtterance(word);
          
          synth.speak(utterThis);
        }
        
        
        /*ADDING NEW WORDS
        
        for(let i=0;i<landmarks.length-1;i++){
          var d=[(landmarks[i+1][0]-landmarks[i][0]),(landmarks[i+1][1]-landmarks[i][1])];
          if(dat.length<21){
            dat.push(d);
          }else{
            dat[i][0]+=d[0];
            dat[i][1]+=d[1];
          }
          
        }
        n++;
        var datareal="";
        for(let i=0;i<dat.length;i++){
          datareal+=(dat[i][0]/n).toFixed(2)+", ";
          datareal+=(dat[i][1]/n).toFixed(2)+", ";
        }
        console.log(datareal);
        
        ADDING NEW WORDS*/
        // Loop through landmarks and draw em
        for (let i = 0; i < landmarks.length; i++) {
          // Get x point
          const x = landmarks[i][0];
          // Get y point
          const y = landmarks[i][1];
          //console.log(i+": "+x+" "+y);
          // Start drawing
          ctx.beginPath();
          ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
          // Set line color
          ctx.fillStyle = style[i]["color"];
          //ctx.fill();
          
        }
      });
    }
  };