# Asmodeus - Does your site is alive ?


## For developing
docker images -a
docker system prune
docker system prune -a
docker stop $(docker ps -a -q)
docker rmi -f $(docker images -a -q)

docker ps
docker exec -it <container name> /bin/bash

## Note
change datasource in k6-dashboard.json