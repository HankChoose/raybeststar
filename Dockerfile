FROM nginx:alpine

# 清空默认网站文件111
RUN rm -rf /usr/share/nginx/html/*

# 复制前端构建产物
COPY dist/ /usr/share/nginx/html/

# 复制 nginx 配置文件（覆盖默认）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
