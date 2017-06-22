// /*
// webrtc
// mediaStream->rtcpeerconnection->rtcdatachannel
// */
// var myRtcPeerConnection, myRemotePeerConnection;
// var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
// var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;

// //navigator
// navigator.getWebcam  = (
// navigator.getUserMedia ||
// navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
// );
// navigator.getWebcam({
//   video: true,
//   audio:false
// },//success callback
// getWebcam,
// //error callback
// function(err){
//   console.error(err)
// });
// //getWebcam
// function getWebcam(stream){
//   video1.src = window.URL.createObjectURL(stream);
//   //play
//   video1.play();
//   //display attributes of the mediaStream
//   var video_track_display = stream.getVideoTracks()[0];
//   var result = document.getElementById("result");
//   result.innerHTML = "Stream ID: "+ stream.id+"<br>";
//   result.innerHTML+="Track readyState: "+ video_track_display.readyState+"<br>";
//   result.innerHTML +="Track ID:"+video_track_display.id+"<br>";
//   result.innerHTML +="Kind: "+ video_track_display.kind+"<br>";
//   //create peer connection
//   createPeerConnection(stream);


// }

// //createPeerConnectionStream
// function createPeerConnectionStream(stream){
//   //create local peer connection
//   myRtcPeerConnection = new PeerConnection(null);
//   console.log('Local peer connection object created');
//   //create remote peer connection
//   myRemotePeerConnection = new PeerConnection(null);
//   console.log('Created remote peer connection object');
//   //listen for ICE candidate on each
//   myRemotePeerConnection.onicecandidate = getMyIceCandidate;
//   myRemotePeerConnection.onicecandidate = getMyIceCandidata;
//   //handle streams on each peer
//   myRtcPeerConnection.addStream(stream);
//   console.log('Local stream added to myRtcPeerConnection');
//   myRemotePeerConnection.onaddstream = getRemoteStream;
//   //create local peer connection offer
//   myRemotePeerConnection.createOffer(getLocalDescription);
//   console.log('SDP offer on myRtcPeerConnection is created! :) ');


// };

// //getMyIceCandidata
// function getMyIceCandidata(e){
//   if(e.candidate){
//     //send the local ice candidate to the remote peer
//     myRemotePeerConnection.addIceCandidate(new RTCIceCandidate(e.candidate));
//     confirm.log('sent my ICE candidate to myRemotePeerConnection');
//   }

// }
// //when remote ICE candidate is received by me....
// function getRemoteIceCandidate(e){
//   if(e.candidate){
//     //add the remote ice candidate to my local peer connnection
//     myRtcPeerConnection.addIceCandidate(new RTCIceCandidate(e.candidate));
//     console.log('Added remote ICE candidates to myRtcPeerConnection');
//   }
// }
// //create SDP offer
// function getLocalDescription(des){
//   myRtcPeerConnection.setLocalDescription(des);
//   console.log('Offer from myRtcPeerConnection is created');
//   myRemotePeerConnection.setRemoteDescription(des);
//   myRemotePeerConnection.createAnswer(getRemoteDescription);

// }
// //when remote SDP arrives
// function getRemoteDescription(des){
//   myRemotePeerConnection.setLocalDescription(des);
//   console.log('Got answer from remotePeerConnection');
//   myRtcPeerConnection.setRemoteDescription(des);
// }

// //getRemoteStream.. show the remote video
// function getRemoteStream(e){
//   video2.src = URL.createObjectURL(e.stream);
//   //play video2
//   video2.play();
//   console.log('Got remote stream back');

// }



















