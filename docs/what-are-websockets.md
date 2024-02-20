# What is a network protocol and which network protocol does websockets use?

Websockets uses HTTP (Hyper Text Transfer Protocol) as a network protocol, and is in itself a protocol with its own rules and constraints.

Network protocols are the rules that govern the transmission of data from clients to servers. This may be for communication of data from clients to servers, protecting the security of this information transfer or load-balancing as managing the constant stream of data requests and responses that travel through the network layer.


## What are the key protocols in the network layer?

A quick round up of some key protocols (not an exhaustive list) is useful in providing a context around how websockets operates using the HTTP protocol. 

__Transport Connection Protocol/ Internet Protocol (TCP/IP)__

It is important to understnad the main TCP/IP  protocol which is the Transport Connection Protocol which is a subset of the Internet Protocol. 

TCP/IP exists in the network layer connecting clients (you the user and all your devices via your IP addresses in the application layer) to servers that hold all the valuable data you are looking for via the TCP - the transmission connection protocol, in the network layer of the application.

Servers securely host the data that, you the client, require in a complex network of systems in what is known as the service layer.

The transport layer connects you and your request for data to the service layer through a variety of protocols or rules and regulations that govern the transport layer.

TCP is not the only way to transport digital data. It is, however, one of the most commonly used network protocols. There are thousands of protocols in the network layer, which deal with routing, authentication, load-balancing and testing the security of the systems. For example, TCS, which is Transport Connection Security is a subset of TCP.

__Hypertext Transfer Protocol (HTTP)__

HTTP refers to the standards, rules or protocols for Application Protocol Interface (API) calls. The secure encrypted way that data is transfered, is referred to as HTTPS (Hyper Text Transfer Protocol - Secure).

This protocol is completed in the encryptation layer of the network layer using the SSL (Secure Sockets Layer) during the transportation of the data in the TLS (Transport Layer Security).

HTTP and HTTPS set the rules by which API calls exchange data with a request-response cycle. An API-call follows the HTTP/HTTPS rules to make a round-trip or a call for data. APIs transfers data via the service/network and application layers. HTTP/HTTPs only operate in the network layer.

Two methods SOAP & REST are used to transfer data using XML or HTML, CSS and JavaScript. SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer, they refer to type of data being sent via the networks in the transport layer of the web.

SOAP uses XML (Extensive Markup Language) or `.xml` files to transport data. REST, uses JavaScript Object Notation or `.json` file` to transport data.

__File Transfer Protocol (FTP)__ 

The File Transfer Protocol is a client-server protocol that was introduced in the 1970s. In this protocol a user needs to log into the FTP server and devices must have FTP software built in. Using FTP you can upload, download, delete, rename, move and copy files on a server.

This provides control and precision in the data exchange process as specific files can be accessed and modified.

Further reading [Tech Target Blog](https://www.techtarget.com/searchnetworking/definition/File-Transfer-Protocol-FTP)

FTP is not encrypted and therefore vulnerable to security threats where confidential data can be hijacked and misused by malicious actors.

__Secure Socket Shell (SSH) Protocol__

SSH, also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network.
For a complete definition of SSH read [Tech Target's article](https://www.techtarget.com/searchsecurity/definition/Secure-Shell).

SSH-2, the current version of SSH protocols, was adopted as a Standards Track specification by the Internet Engineering Task Force (IETF) in 2006, the protocol identifies users with SSH keys. SSH keys are a way to identify trusted computers, without involving passwords.

## What are specific email communication protocols in TCP/IP?

SMTP, POP, and IMAP are Internet standard protocol used for email communication. Each protocol serves a different purpose in the email delivery and retrieval process. They are part of the TCP/ IP suite of protocols.

__Post Office Protocol (POP)__

The Post Office Protocol, or POP, defines only simple commands for email retrieval. It predates IMAP,
and both are used for for email retrieval. IMAP enables synchronization between devices and online access. With POP, messages are stored and managed locally on one computer or device. Therefore, POP is more straightforward to implement and typically more reliable and stable.

The current version is POP3, which improves email retrieval and error handling.

Further reading 
- [What is POP](https://lifewire.com/what-is-pop-post-office-protocol-1171121)
- [Everything you need to know about POP](https://alore.io/blog/pop-protocol)

__Internet Message Access Protocol (IMAP)__

IMAP, or Internet Message Access Protocol, are the rules that govern your access to your email account from authorisation and validation that you are the user, matching passwords to stored data on email access.

IMAP has higher security settings and is best used when you are checking emails from multiple devices.

[Microsoft support has a comparision between IMAP and POP on this link]https://support.microsoft.com/en-au/office/what-are-imap-and-pop-ca2c5799-49f9-4079-aefe-ddca85d5b1c9

__Simple Mail Transfer Protocol (SMTP) and Extended STMP (ESTMP)__

STMP, or Simple Mail Transfer Protocol, is another e-mail delivery set of rules. Servers run a programme called MTA, or Mail Transfer Agent which is a checking service that matches the domain of the receiver's email address and the DNS (Domain Name System) and in the process discovers the users IP (Internet Protocol) address. 

By matching these multiple data-points, verification of the user and subsequent authorisation is granted to access a mailbox.

The MSA, Mail Submission Agent, which receives emails and MDA, Mail Delivery Agent that recieves emails from the MTA, then stores in the receipeints mailbox after the MTA matches and verifies the user with the user credentials stored.

Extended Simple Mail Transfer Protocol (ESMTP) is a version of the protocol that expands upon its original capabilities, enabling the sending of email attachments, the use of TLS, and other capabilities. Almost all email clients and email services use ESMTP, not basic SMTP.

- Further reading
- [Cloudflare](https://www.cloudflare.com/en-gb/learning/email-security/what-is-smtp/)
- [Everything you want to know about STMP](https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp)

## Where do websockets figure in the network layer?

There are so many protocols, the section above, is just an initial flavour of the key protocols in the network layer.

Websockets, uses the HTTP protocol and is a sub-process with its own set of rules within the transport layer, and a subset of the HTTP protocol.

## What is a network handshake?

Due to the complexity of the network layer and how may different checkpoints data has to  pass through before it moves from one destination to another, the TCP, performs a series of "network handshakes" or digital agreements between two parties that are transferring your data between them before it reaches the server.

Then similar network handshakes between servers to return data to you.

[So again, did I just lose you ... what is TCP?](https://www.fortinet.com/resources/cyberglossary/tcp-ip). You can either follow this link for more tech details or to summarise, TCP transmits digital data in the form of digital packets between your request as the client to the server via a series of agreements, or "network handshakes" to ensure safe delivery of data to you after you have made the request for some form of data that is stored on a server.

This may sound complicated, logistics is complicated. However, it is not very different to how a postal service transmits packets. 

Yes, this is happening less every day, but postal and courier services continue to deliver packets...Big ones, small ones, ones that require signatures, ones that can be left on doorsteps. Packets that are valuable therefore may have insurance and gurantees attached to them and ones that can only be collected at a location where further identification and authorisation allows the release of the packet. 

Packets, sadly, also get lost.

These various ways of distributing physical packets, is not dissimilar to the digital dissemination of digital data packets, including the ones that get lost. The digital distribution system is a digital logistics system. So, think of TCP as digital delivery protocol that does its very best to guarantee the delivery a data packet to the requester of the data. If the packet of data gets lost, TCP sends a tracer to find the lost packet and deliver it to the user.

##  The HTTP protocol and websockets handshake

Client sends server a request, server responds to the client. While this may look bi-directional as the communication is between client and server, it is uni-directional as only one communication is possible in one direction. The uni-directional communication is resolved by a response or rejected with an error that is handled by a JavaScript function. Until then it remains in a pending state, neither resolved or rjected.

Websockets are supported by all major browsers and is a bi-directional form of communication in the network layer that uses the HTTP protocol.

But in the pending state "network handshake" occurs.

Base64 encoding is commonly used when there is a need to transmit binary data over media that do not correctly handle binary data


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