# Use a imagem Node como base
FROM node:18-alpine

# Crie e defina o diretório de trabalho
WORKDIR /app

COPY public ./public

COPY src ./src

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Construa o aplicativo React para produção
RUN npm run build

# Exponha a porta 80 (ou a porta que você usa na sua aplicação React)
EXPOSE 80

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]
