FROM node:20-alpine AS react-build

ARG PORT=80

WORKDIR /app

COPY . .

RUN npm install --omit=dev
RUN npm run build

FROM node:20-alpine AS react

RUN apk update
RUN apk add nginx
RUN adduser -D -g 'www' www
RUN mkdir /www
RUN chown -R www:www /var/lib/nginx
RUN chown -R www:www /www

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY --from=react-build /app/lib .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]