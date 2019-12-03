# 基础镜像
FROM node:10.16-alpine as builder

# 拷贝静态资源文件
COPY . /app/

# 工作目录
WORKDIR /app

# 运行命令
#RUN npm install
RUN yarn config set registry https://nexus.utcook.com/repository/npm-repo/ \
  && yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass \
  && yarn install
RUN yarn build:prod

# 使用nginx作为web服务
FROM nginx:1.17.5-alpine

# 维护人
LABEL maintainer="yangguangqing@ut.cn"

# 工作目录
WORKDIR /usr/share/nginx/html

# 拷贝编译结果文件
COPY --from=builder /app/dist .

# 拷贝nginx配置文件
COPY nginx_default.conf /etc/nginx/conf.d/default.conf
