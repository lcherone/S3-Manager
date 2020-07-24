# S3 Manager

**WIP:** An open-source, multi-server, client-side S3 manager.

TL;DR.. You can use it here: https://lcherone.github.io/S3-Manager

![Screenshot](https://i.imgur.com/dF2MWAa.png)

### Features

Host(s) and state data is securely encrypted (AES) using a password set by you when initially loading the app. Subsequant visits or page reloads will require you to login to unlock.

**Entered host details are not sent anywhere and are only used to make a direct S3 signed connection to the host.**

Much of the S3 functionality is provided by the awesome MinIO client library, this project is mostly a UI built around the lib using Bootstrap, VueJS.

#### Hosts

 - Securely manage multiple hosts, with simple add, edit, delete, import and export
 - Direct connection to the servers using MinIO client library

#### Buckets

 - List, create and navigate buckets
 - Enumerated bucket totals and disk space
 - Download complete buckets as a single zip file

#### Objects

 - List, upload, edit and delete objects
