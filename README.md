# Virtual Pad

Play remotely from your mobile.

[Youtube demo](https://www.youtube.com/watch?v=xePYvEX66po)

(NOTE: Mobile and PC/Mac/Linux computer must share same wifi conneciton)  
(NOTE: This project is under development and in a very early stage, it means it can change along the time)

![Pad 3](/docs/images/5.jpg)

## Requirements

- Node `v16` installed on the machine.
- Clone the project.

## Installation

1. Clone the repository

```
  git clone https://github.com/josesaranda/virtual-pad
```

2. Go inside folder.
```
  cd virtual-pad
```
3. See documentation for your OS (macos, linux, windows)

Please ensure you have the required dependencies before installing:

### Installation Windows

windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)

```shell
  npm install --global --production windows-build-tools
  npm install
  npm start
```

### Installation Mac

Xcode Command Line Tools is needed.

```shell
  xcode-select --install
  npm install
  npm start
```

### Installation Linux

```
  sudo apt-get install libxtst-dev
  npm install
  npm start
```

## Usage

After you run `npm start`, a QR code will appear that can be scanned with your mobile camera.

![QR Code](/docs/images/qr_code.jpg)

This will automatically open a browser with the app on your mobile device.  
You can also save the app to your mobile device's home screen.

### Usage (optional)

Add this website to your home screen.

![Step 1](/docs/images/1.jpg)

![Step 3](/docs/images/2.jpg)

## Pad Modes

![Step 3](/docs/images/3.jpg)
![Step 4](/docs/images/4.jpg)
![Step 5](/docs/images/5.jpg)

## Contributing

Anyone is welcome to contribute to this project, just create a PR.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
