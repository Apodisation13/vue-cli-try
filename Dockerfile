FROM node:16-alpine as build-stage

# устанавливаем простой HTTP-сервер для статики
# RUN npm install -g http-server

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

RUN echo "секретик ${DOMAIN_NAME}"
RUN echo "VUE_APP_API_URL=${DOMAIN_NAME}" > .env.production
RUN echo "VUE_APP_TRY1=try1envprod" >> .env.production
RUN echo "I AM HERE AND I SEE THIS!!!"

# собираем приложение для production с минификацией
RUN npm run build

EXPOSE 8080
# CMD [ "http-server", "dist" ]
#CMD [ "npm", "run", "serve" ]


# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /var/www
CMD ["nginx", "-g", "daemon off;"]
