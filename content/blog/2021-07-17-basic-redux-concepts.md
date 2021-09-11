---
model: post
title: Basic Redux Concepts
description: >-
    Redux is a small Javascript library created by Facebook that serves to control the state of an application.
author: JStamps
pathPrefix: blog
slug: basic-redux-concepts
image: ../images/redux-basic-concepts.png
date: '2021-07-17T09:56:23-05:00'
published: true
tags:
   - ReactJS
   - Redux
   - Basics
---

Redux is a small Javascript library created by Facebook that is used to control the status of an application.
Esta basada en la arquitectura
[Flux](https://facebook.github.io/flux/) from Facebook.
Redux is commonly used with [React](https://es.wikipedia.org/wiki/React), but can also be used with [Angular](https://es.wikipedia.org/wiki/Angular_(framework)).

### The three principles of React

#### Sole source of truth
The **status** of your entire application is stored in a single **store**.
#### Read-only state
The **only way** to modify the state is by issuing an **action**, an object describing what happened.
  This is done through the function `dispatch()`.
#### Changes are made with pure functions
  To specify how the state tree is transformed by actions, pure **reducers** are used.
  Reducers are pure functions that take the old state and an action, and return a new state.

### Main concepts

#### Actions

The action is the information that we send to the store, they are sent through the `dispatch` function of the store.
According to this information the reducers will change the state of our application.

Basically it is an object that contains a (`type`) and the **data**, for example:

```javascript
let myAction = {
   // The action, a unique identifier (usually a descriptive string)
   type: 'ADD_USER',

   // Then the data we want to send.
   user: {
      name: 'JK Rowling',
      age: 52,
      ...
   },
   typeUser: 'PREMIUM',
   ...
}
```

Finally, we send through `dispatch` (action):

```javascript
store.dipatch(myAction)
```

#### Action creators

The **action creators** are functions that serve to create actions, they help us to structure and write less code.

Following the example above, we will create a function to add users.

```javascript
function addUser(name, age, typeUser, ...) {
   return {
      type: 'ADD_USER',
      user: {
         name,
         age
         ...
      },
      typeUser
   }
}
```

Then using this function we can add users.

```javascript
store.dispatch(addUser('JK Rowling', 52, 'PREMIUM'))
store.dispatch(addUser('Harry Potter', 12, 'PREMIUM'))
store.dispatch(addUser('Draco Malfoy', 12, 'BASIC'))
```

In this way we save ourselves from writing a lot of extra code, and our code is ultimately more structured.

#### Reducer

A reducer is a pure function which is responsible for transforming the current state to a new state.
The prototype of the function is as follows:

```javascript
function myReducer(state, action) {
   ...
   // Here the status is modified according to the (action) that we receive
   ...
   return newState
}
```

#### Store

The **Store** where all the data of our application is stored and has the following responsibilities:

* Contains the (`state`) of the application, the **state** is the `this.state` of a React component, here all the application data will be uniquely stored.
* Allows access to state via `getState()`.
* Allows status to be updated via `dispatch(action)`.
* Register listeners via `subscribe(listener)`.
* Handles unregistration of **listeners** via return from the `subscribe(listener)` function.

To create a **Store**, we need the `createStore` function of redux and we need at least one `reducer` to be passed as a parameter.

```javascript
import { createStore } from 'redux'
...
let store = createStore(reducers, initialState)
```

As we see, `createStore` receives 2 parameters:

* **reducers**: The reducer(s) to be called when you want to update the state.
* **initialState** _(optional)_: The initial state for the state.

### Conclusion

It is very simple to start using Redux in our application, here are some useful links that will help you enter the world of Redux more in depth.

* https://redux.js.org/ (Official Documentation)
* [Advanced Redux Course](https://www.youtube.com/watch?v=poQXNp9ItL4)
