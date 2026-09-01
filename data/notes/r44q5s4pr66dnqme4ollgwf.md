# [Fast UDP I-O for Firefox in Rust](https://max-inden.de/post/fast-udp-io-in-firefox/)
Firefox's UDP i/o api's are dated. Could this be updated?

they built a replacement for Firefox, to replace its QUIC implementation. They used `quinn-udp` for quic. This sped things up by quite a bit. 

Before UDP datagrams were being sent one at a time. This scales poorly. So newer systems offer multi-message system call families. 
