# [Understanding HTTP Streaming: A Real-World Implementation (Medium)](https://medium.com/@abhishekdubey3107/understanding-http-streaming-a-real-world-implementation-526fbddb5cc7)
HTTP Streaming: data sent in chunks over HTTP connection, benefits:
- reduced memory usage
- better user experience
- efficient handling of large **datasets**
- real-time data transmission
# [HTTP Streaming: The Game-Changer That's Leaving Traditional HTTP in the Dust  (dev)](https://dev.to/kenxuho/http-streaming-the-game-changer-thats-leaving-traditional-http-in-the-dust-cp2)
Traditional HTTP is rigid pattern. Whereas streaming presents a continuous pipeline. 

Benefits:
- time to first byte (TTFB) much faster
- memory usage greatly reduced
- much more efficient use of bandwidth
## Areas where streaming dominates
1. live data dashbaords
2. **large file processing** - time to value increased greatly
3. ai power apps
# MDN Documentation
## [HTTP range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Range_requests?utm_source=chatgpt.com)
A `Range` request asks the server to send parts of a resource back to a client. Useful for streaming. 
## Checking if a server supports partial requests
If server includes `Acept-Ranges` header wiht any value besides `None` then it does support them. 

can check with `curl -I [url to file]`. if it has something like `accept-ranges: bytes` then it can be streamed as bytes! 

This does also mean that ranges can be requested to (such as for a partial stream of the resource). 
## [Range Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Range?utm_source=chatgpt.com)
The `Range` request header indicates the part of the resource the server should return. Server is able to send back partial requests of resources, and if not enabled will ignore the `Range` header and send back the whole request. Ignoring the `Range` is the same as `Accept-Ranges: none` and therefore streaming is not possible from that server. `Range` uses bytes, zero indexed for the range. 
Check if server supports `Range`:
`curl -v --http1.1 -I [url to file]` and if possible see:
`Accept-Ranges: bytes`. 

