Clone o projeto
```
git clone https://github.com/LuizaNakahira/EC48C.git
```

Entre na pasta
```
cd EC48C
```

Instale as dependências
```bash
npm install

# ou

yarn
```

Execute o projeto

```bash
emulator -avd <nome do dispositivo> -no-snapshot

# para descobrir o nome dos dispositivos disponíveis
emulator -list-avds 

npx react-native start
```

Para compilar (Android)
```
npx react-native run-android
```