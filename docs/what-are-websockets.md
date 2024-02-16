# What is the digital transport layer and what exactly is a websocket?

To describe what websockets are or are not, let's take the scenic route. 

Let's talk TCP or the Transmission Connection Protocol.  TCP, not to be confused with the throat lozenge, exists in the network layer connecting clients (you the user and all your devices) to servers that hold all the valuable data you are looking for.

Servers securely host the data that, you the client, require in a complex network of systems in what is known as the service layer.

The transport layer connects you and your request for data to the service layer through a variety of protocols or rules and regulations that govern the transport layer.

TCP is not the only way to transport digital data. It is, however, one of the most commonly used protocols.


## What are the different types of protocols in the network layer?

Sorry, you well may ask why is this relevant to websockets and you are both right and wrong. Without the wider context of web protocols you may not fully appreciate the role of websockets in the transport layer.

Just as a bicycle may deilver food from a restaurant in a last-mile connectivity point to your residence, the physical logistics system made up of land, sea and air delivery systems of physical packets, the role of websockets in this complex digital network requires the full roadmap of options to contextualise where it is in the digital transport layer of data packets.

A quick round up:

__File Transfer Protocol (FTP)__ 

Transfers file from one destination to another depending on the type of packet, just as you may use an aeroplane or a bicycle depending on what type of packet you need to transfer from where and to whom!

Let's look at some of the digital options now.

__Secure Shell (SSH)__

__Internet Message Access Protocol (IMAP)__

__Post Office Protocol (POP)__

__Simple Mail Transfer Protocol (SMTP)__

__Hypertext Transfer Protocol (HTTP)__


## What is a network handshake?

TCP, performs a series of "network handshakes" or digital agreements between two parties that are transferring your data between them before it reaches the server and then similar network handshares between servers to return data to you.

[So again, did I just lose you ... what is TCP?](https://www.fortinet.com/resources/cyberglossary/tcp-ip). You can either follow this link for more tech details or to summarise, TCP transmits digital data in the form of digital packets between your request as the client to the server via a series of agreements, or "network handshakes" to ensure safe delivery of data to you after you have made the request for some form of data that is stored on a server.

This may sound complicated, logistics is complicated. However, it is not very different to how a postal service transmits packets. 


Yes, this is happening less every day, but postal and courier services continue to deliver packets...Big ones, small ones, ones that require signatures, ones that can be left on doorsteps. Packets that are valuable therefore may have insurance and gurantees attached to them and ones that can only be collected at a location where further identification and authorisation allows the release of the packet. 

Packets, sadly, also get lost.

These various ways of distributing physical packets, is not dissimilar to the digital dissemination of digital data packets, including the ones that get lost. The digital distribution system is a digital logistics system. So, think of TCP as digital delivery protocol that does its very best to guarantee the delivery a data packet to the requester of the data. If the packet of data gets lost, TCP sends a tracer to find the lost packet and deliver it to the user.

The HTTP protocol


Client sends server a request, server responds to the client. While this may look bi-directional as the communication is between client and server, it is uni-directional as only one communication is possible in one direction. The uni-directional communication is resolved by a response or rejected with an error that is handled by a JavaScript function. Until then it remains in a pending state, neither resolved or rjected.

Websockets are supported by all major browsers and is a bi-directional form of communication in the network layer that uses the HTTP protocol.

But in the pending state "network handshake" occurs.



Websockets use HTTP requests to send data between clients and servers using the metadata - `upgrade:websocket` in the request header in an API-request.

[More about the upgrade header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) can be found on Mozilla web docs. 

In essence, the HTTP request, depends on the server accepting the upgrade request to this less-secure option. Servers can decline the request with a "forbidden" response. The [403 response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) communicates to the requester that the request has been understood but rejected. This is different from a [401 response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) which is unauthorised.

Authorisation has different protocols where a user's information is matched with what the server information is, a mismatch results in an not-authorised code. This is similar in the real world when someone presents, for example a credit card and the verification code - the pin, or the physical signature - does not match with the expectations of the receiver of this information, a store, a server or an e-transaction.

[More about HTTP Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/)



For this process to happen `new WebSocket(url)`


The client then sends a websocket key to the server to confirm a secure connection for network safety and the connection is switched to the websockets protocol.

An [HTTP response with a 101 header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) is sent to confirm the p

Websockets is an event based library. Using an API to connect to the methods of the library, Websockets tells you when there is an update listening to an event and then what to do, the analogy is that the parents tell the kids they will notify them when they arrive, and unless they do that, they have not arrived.

Everything works by events in socket. There's this event of connection, the call back determines what happens on the connection event. For the moment we are just logging the event to console to check that the call back is working. With the message event the call back is to send a message. So what we'll do is send this data.

Basically, once someone is connected we'll send a message to that person so then we're going to wait for another event. So, there's going to be another event being emitted from the client, in the index.html Whatever data we pass from that other event in the client side file `index.html`, then we'll console log that event.