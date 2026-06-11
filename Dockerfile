FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY main.js /usr/share/nginx/html/main.js
COPY images/ /usr/share/nginx/html/images/
COPY works/ /usr/share/nginx/html/works/
