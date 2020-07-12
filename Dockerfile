 #Stage 1
 
 FROM node:latest as node

 WORKDIR /app

 COPY . .

 RUN npm install

 RUN npm run build --prod





 #Stage 2 only extract the runable


 FROM nginx:alpine

 COPY --from=node /app/dist/Raspberry /usr/share/nginx/html