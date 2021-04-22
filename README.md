# `We.TV`

`We.TV` is a social media app for TV fans. Find your favourite show on our app and start sharing content. If a show exists, we’ve got a page for it! Join the community by adding the show to your favourites so you can add, like, and share with fellow fans today.

## Getting Started

This is a self-contained app, with backend and frontend running simultaneously on two servers.

### Install Dependencies

You will need to run `npm i` in the main file as well as the `backend` and `client` servers in order to install the required dependencies

### Populate Database

Create an .env file in the `backend` folder by copying the provided .env.example

In PSQL, create a database called `final_project` with a user `labber`.
```
CREATE ROLE labber WITH LOGIN password 'labber';
CREATE DATABASE final_project OWNER labber;
```

 Then run `npm run db:reset` in the `backend` folder to populate the database.

### Run Servers

Thereafter, run the development backend server in the `backend` folder with `npm run dev`.

In another terminal window, run `npm start` to run the frontend (client) server.



## Dependencies

[axios](https://www.npmjs.com/package/axios) 

[Cloudinary](https://cloudinary.com/)

[cors](https://www.npmjs.com/package/cors)

[Material-UI](https://material-ui.com/)

[material-ui-image](https://www.npmjs.com/package/material-ui-image)

[socket.io](https://socket.io/)

## Planning Documents

ERD: https://dbdiagram.io/d/606f8dffecb54e10c33f6909
Inception Document: https://github.com/JasmeetRangar/final-project/blob/master/client/public/Final%20Project%20We.TV.pdf