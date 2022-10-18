#contracting-frontend
FROM 466920982015.dkr.ecr.us-east-2.amazonaws.com/devops:nodev14.15.1
ENV APPDIR='/opt/app'
WORKDIR /opt/app
COPY . /opt/app/
RUN npm install
ARG BUILDCMD="npm run build"
RUN ${BUILDCMD}
CMD ["supervisord"]