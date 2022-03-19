# Express API For Uploading & Downloading Files

A very simple express api which uses multer to upload files locally. Files can be downloaded as well by providing their path.

## Dependencies

- Express
- Morgan
- Helmet
- Multer

## API Usage

Run following commands to install the dependencies and to fire up the api on port 5001.

```
    npm start i\
    npm start
```

### Upload files

- To uploads files you can visit the route /upload/multiple
- fileName should be **_files_**
- It returns a message and the list of uploaded files

### Download files

- Visit the route /download?name=**_path_of_uploaded_file_**
- The file will be downloaded
