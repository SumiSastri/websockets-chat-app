# Helmet set up on Express for server-side security


Helmet is a great package that automatically adds 12 HTTP security headers to your application 

The basic set-up gives you by default

```JavaScript

app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

```
Experiments with this package show that the chat app stops functioning due to the enhanced security measures

- [Helmet Docs](helmetjs.github.io)

