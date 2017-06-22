var webrtc_capable = true;
var rtc_peer_connection = null;//rttpeer connection
var rtc_session_description = null;//browser specific of rtc session description constructor 
var get_user_media = null;
var connect_stream_to_src =null;
var stun_server = "stun.l.google.com:19302";//public stun server > 