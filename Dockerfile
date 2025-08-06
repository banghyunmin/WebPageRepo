# 베이스 이미지
FROM node:20-bookworm

# 앱 디렉토리 생성
WORKDIR /app

# package.json 복사
COPY package.json ./

# 의존성 설치
RUN npm install

# 나머지 앱 소스 복사
COPY . .

# 개발 서버 실행
CMD ["npm", "start"]
