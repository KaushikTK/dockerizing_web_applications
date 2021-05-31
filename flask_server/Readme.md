# FLASK SERVER

To build the image:
`docker build --tag flask_server .`
('flask_server' will be the name of the image)

To run the image as a container:
`docker run -p 3000:3000 flask_server`
(The -p flag redirects a public port to a private port inside the container)

To create requirements.txt file:
`pip freeze > requirements.txt`
