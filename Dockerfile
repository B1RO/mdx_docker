FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
EXPOSE 3000

