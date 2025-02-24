# Template de Testes Automatizados com CodeceptJS e Appium

Este repositório contém o template de testes automatizados utilizando [CodeceptJS](https://codecept.io/) e [Appium](https://appium.io/) para automação de testes em aplicativos móveis para os projetos do Dot Digital Group.

## 📌 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 22 ou superior)
- [Appium Inspector](https://github.com/appium/appium-inspector)
- [Java Development Kit (JDK)](https://adoptopenjdk.net/) 
- [Android SDK](https://developer.android.com/studio) 
- Emulador Android ou dispositivo físico configurado

### 🔍 Obtendo o caminho de instalação do Java

Para definir corretamente a variável `JAVA_HOME`, descubra onde o Java está instalado em seu sistema:

**MacOS/Linux:**

```sh
/usr/libexec/java_home
```

**Windows (via PowerShell):**

```powershell
(Get-Command java).Path
```

Após obter o caminho, defina a variável de ambiente correspondente conforme descrito na seção de Configuração.

## 📦 Instalação

Clone o repositório e instale as dependências:

```sh
# Clone este repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install
```

## ⚙️ Configuração

### Variáveis de Ambiente

```sh
export JAVA_HOME=[DIRETORIO DE INSTALAÇÃO DO JAVA]
export ANDROID_HOME=[DIRETÓRIO DE INSTALAÇÃO DO SDK DO ANDROID]

PATH=$PATH:$ANDROID_HOME/platform-tools
PATH=$PATH:$ANDROID_HOME/tools
PATH=$PATH:$ANDROID_HOME/tools/bin
PATH=$PATH:$ANDROID_HOME/tools/lib
PATH=$PATH:$JAVA_HOME/bin
```

### Servidor do Appium Doctor

Instale o Appium Doctor para verificar se seu ambiente está correto:

```sh
npm install appium-doctor -D
```

Execute um diagnóstico:

```sh
npx appium-doctor --android
```

### Servidor do Appium

Faça a instalação do Appium server para o seu projeto:

```sh
npm install appium -D
```

Inicie o Appium Server:

```sh
npx appium --base-path=/wd/hub
```

### Configurar o CodeceptJS

Edite o arquivo `codecept.conf.js` para configurar corretamente as capabilities do Appium de acordo com o seu aplicativo e dispositivo.

Exemplo de configuração:

```js
exports.config = {
  helpers: {
    Appium: {
      platform: 'Android',
      device: 'emulator',
      app: '/caminho/para/seu/app.apk',
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2'
      }
    }
  },
  tests: './tests/*.js',
  name: 'testes-automatizados'
};
```

## 🚀 Executando os testes

Para rodar os testes, utilize o comando:

```sh
npx codeceptjs run
```

Caso deseje rodar os testes no modo interativo:

```sh
npx codeceptjs shell
```

Para executar um teste específico:

```sh
npx codeceptjs run --grep "@tag"
```

## 📊 Relatórios (Coming Soon)

Os testes podem ser executados com o repórter Allure. Para instalar e gerar relatórios:

```sh
npm install allure-commandline --save-dev
npx codeceptjs run --plugins allure
npx allure serve output
```

## 🛠️ Debugging

Caso precise depurar os testes, utilize:

```sh
npx codeceptjs run --debug
```

Ou utilize o modo pausa:

```sh
I.say('Verificando o elemento');
pause();
```

## 📄 Estrutura do Projeto

```
📂 seu-repositorio
 ├── 📂 tests          # Arquivos de teste
 ├── 📂 output         # Resultados dos testes
 ├── 📜 codecept.conf.js  # Configuração do CodeceptJS
 ├── 📜 package.json   # Dependências do projeto
 ├── 📜 README.md      # Documentação
```

## 📢 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o branch principal (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📜 Licença

Este repositório é privado e de uso exclusivo para colaboradores da Dot Digital Group. A licença será definida de acordo com as diretrizes internas da empresa.