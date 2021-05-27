# AMP STACK

To build and run, do:
`docker compose up`

* The server is running on port 3000
* phpmyadmin is running on port 9000
* mariadb is running on its default port

Create a database and a table through phpmyadmin. The default credentials are:

1. servername - `database` // this is same as the name of the mariadb container
2. username - `root`
3. password - `tiger`

If you want to add any extension to php, add the command `RUN docker-php-ext-install <extension_name> && docker-php-ext-enable <extension_name>` to server/Dockerfile.

This uses mariadb database. If you want mysql, change the image to mysql in docker-compose file.

All the data in the database is saved to the data folder for persistent storage which gets created automatically if not present.