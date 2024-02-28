# CadastroEmail-fullStack

## Intruções

Clone o projeto:

```bash
git clone git@github.com:mottak/CadastroEmail-fullStack.git
```

### Para rodar o back-end:

Ae não tiver o mysql instalado na máquina, você pode udar o docker-compose que se encontra na raíz do backend. Basta navegar até a pasta backend:

```bash
cd backend
```

E Rodar o comando:

```bash
docker-compose up -d
```

Configure as variaveis de ambiente a partir do arquivo *.env.example*, mude o nome do arquivo para *.env*. Altere a porta que deseja rodar o backend na variavel *PORT* e na variável *DATABASE_URL* altere o usuário, a senha e a porta que deseja rodar o banco de dados.

Para subir o servidor basta rodar o comando:
```bach
npm run dev
```


### Para rodar o front-end:

Navegue até a pasta frontend:

```bash
cd frontend
```

E rode o comando:

```bash
ng server
```
