# Asmodeus - Does your site is alive ?

## Start
```docker-compose up```

## Technologies
- Grafana (http://localhost:3000) => admin admin
  - Custom Dashboard for K6
  - Attached database from InfluxDB
- InfluxDB (http://localhost:8086)
- K6 (http://localhost:6565)

## For developing
```docker images -a```

```docker system prune```

```docker system prune -a```

```docker stop $(docker ps -a -q)```

```docker rmi -f $(docker images -a -q)```


```docker ps```

```docker exec -it <container name> /bin/bash```

## Note
change datasource in k6-dashboard.json