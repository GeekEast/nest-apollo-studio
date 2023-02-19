

## Nest.js + Apollo Studio

There are three projects inside this repo. One is the **federation gateway**, which is served at port `http://localhost:3001/graphql` the other two are the **graphql node services**, that are served at port `http://localhost:6001/graphql` and `http://localhost:6002/graphql`
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2023-02-19-11-08-07.png alt="no image found"></p>


### Fetch Schema from Schema Registry in Federation Gateway (recommended)
- register account in [Apollo Studio](https://studio.apollographql.com/login)
- go to `Dashboard` tab and create graph
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2023-02-20-01-38-54.png alt="no image found"></p>

- name your graph and select `supergraph`
<p align="center"><img style="display: block; width: 200px; margin: 0 auto;" src=img/2023-02-20-01-42-09.png alt="no image found"></p>

- update `schema:publish` cmd in `package.json` and `APOLLO_KEY` in `.env.local` in posts and users services 
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2023-02-20-01-54-27.png alt="no image found"></p>

- checkout branch
```sh
git checkout schema-registry
```
- publish schemas
```sh
cd nest-post-service && npm install && npm run schema:publish
cd nest-user-service && npm install && npm run schema:publish
```
- click the operation tab in left side and update `APOLLO_KEY` AND `APOLLO_GRAPH_REF` in each `.env.local` file
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2023-02-20-01-58-36.png alt="no image found"></p>

- start 3 services
```sh
cd nest-federation-gateway && npm install && npm start
cd nest-post-service && npm install && npm start
cd nest-user-service && npm install && npm start
```


### Build Federated Schema via Service URl in Federation Gateway
- checkout branch
```sh
git checkout build-federated-schema
```
- you have to start the posts and users service at first
```sh
cd nest-post-service && npm install && npm start
cd nest-user-service && npm install && npm start
```
- then start the federation gateway service
```sh
cd nest-federation-gateway && npm install && npm start
```

### Comparison Between Registry and BuildFederationSchema
| Feature                                                                                                                        | Schema Registry | Build Federated Schema |
| ------------------------------------------------------------------------------------------------------------------------------ | :-------------: | ---------------------- |
| remove deployment dependency between gateway and graphql services                                                              |        ✅        |                        |
| federated schema will be updated in realtime if sub graph get updated (no need to redeploy gateway to update federated schema) |        ✅        |                        |



### Service Url List

| service | url                           |
| ------- | ----------------------------- |
| gateway | http://localhost:3001/graphql |
| users   | http://localhost:6001/graphql |
| posts   | http://localhost:6002/graphql |


