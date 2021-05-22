# EXPRESS SERVER

To build the image:
`docker build --tag node_server .`
('node_server' will be the name of the image)

To run the image as a container:
`docker run -p 5000:5000 node_server`
(The -p flag redirects a public port to a private port inside the container)