# Emails Input

<p>A reusable beautifully designed component that allows you to enter and paste emails, receive a list of all entered emails, and also subscribe to it's changes.</p>
<a href="https://kordy.github.io/dist/" target="_blank">Demo</a>

<h2>Usage</h2>
<p>Add emailInput script and css to the page, create EmailInput object, pass rootElement and possible options.</p>

**EmailsInput([rootElement], [options])**

```html
<head>
  ...
  <link href="https://kordy.github.io/dist/emailInput.css" rel="stylesheet">
  ...
</head>
<body>
  <div id="emailInputNode"></div>
  ...
  <script src="https://kordy.github.io/dist/emailInput.js"></script>
  <script>
    const emailsInputNode = document.querySelector('#emailInputNode');
    const emailsInput = EmailsInput(emailsInputNode, {
      initialEmails: ['user@domain.com', 'another_user@domain.com']
    });
  </script>
  ...
</body>
```
<h2>Options</h2>

**initialEmails**
<p>initial input value. Accepts string array.</p>

```js
  {
    initialEmails: ['test@email.com', 'test2@email.com']
  }
```

<h2>Public API</h2>

**subscribe([callback])**
<p>Subscribing for all input changes. Accepts function, which will be called, on each change, emails list will be passed to this function as an argument.</p>

```js
  const emailsInput = new EmailsInput(emailsInputNode);
  emailsInput.subscribe(function(emails) {
    alert(emails);
  })  
```
**unSubscribe([callback])**
<p>Unsubscribing from input changes. The same callback as in the subscription should be passed.</p>

```js
  const emailsInput = new EmailsInput(emailsInputNode);
  const cb = function(emails) {
    alert(emails);
  };
  emailsInput.subscribe(cb);
  ...
  emailsInput.unSubscribe(cb);
```

**getAllEmails()**
<p>Returns all entered emails.</p>

```js
  const emailsInput = new EmailsInput(emailsInputNode, {
    initialEmails: ['user@domain.com', 'another_user@domain.com']
  });
  emailsInput.getAllEmails(); // ['user@domain.com', 'another_user@domain.com']
```
**replaceEmails([emails])**
<p>Replace all entered emails with new emails array.</p>

```js
  const emailsInput = new EmailsInput(emailsInputNode, {
    initialEmails: ['user@domain.com', 'another_user@domain.com']
  });
  emailsInput.getAllEmails(); // ['user@domain.com', 'another_user@domain.com']
  emailsInput.replaceEmails(['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com']);
  emailsInput.getAllEmails(); // ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com'] 
```
