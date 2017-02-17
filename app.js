/*
webrtc
mediaStream->rtcpeerconnection->rtcdatachannel
*/
var myRtcPeerConnection, myRemotePeerConnection;
var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;

//navigator
navigator.getWebcam  = (
navigator.getUserMedia ||
navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
);
navigator.getWebcam({
  video: true,
  audio:false
},//success callback
getWebcam,
//error callback
function(err){
  console.error(err)
});
//getWebcam
function getWebcam(stream){
  video1.src = window.URL.createObjectURL(stream);
  //play
  video1.play();
  //display attributes of the mediaStream
  var video_track_display = stream.getVideoTracks()[0];
  var result = document.getElementById("result");
  result.innerHTML = "Stream ID: "+ stream.id+"<br>";
  result.innerHTML+="Track readyState: "+ video_track_display.readyState+"<br>";
  result.innerHTML +="Track ID:"+video_track_display.id+"<br>";
  result.innerHTML +="Kind: "+ video_track_display.kind+"<br>";
  //create peer connection
  createPeerConnection(stream);


}

//createPeerConnectionStream
function createPeerConnectionStream(stream){
  //create local peer connection










}
