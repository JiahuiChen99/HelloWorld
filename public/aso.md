#### **💻 Linux Kernel Modules (1st Project)**
> Knowledge of `C programming` language is a must since it's the only supported for kernel programming. Support for Kernel development with Rust is still in its early stages.

The first project is intended for the students to gain knowledge and learn the differences between the **Kernel context**, and the **User context**.
Creation of 2 Linux Kernel Modules.
The first one acts as character device where the client can interact with the kernel space.
Reading from the character device this will reply with a default message.

The second module is a USB module. Students will have to solder a small PCB with 4 push buttons and 2 LEDs.
For this part of the project, the buttons will only increment . Further functionalities will be developed and added for the 2nd project

![ASOPCB](HelloWorld/ASOPCB.jpg)

![GPIO Intefacing](HelloWorld/GPIO_interfacing.jpg)

![Schematic](HelloWorld/schematic.png)

##### **Material**
- 1x PCB / Protoboard
- 4x buttons
- 6x resistors ( 220Ω ~ 1kΩ )
- 8x Male pin header
- 8x cables

#### **👩‍💻Web server to manage server**

##### Functionalities
- **Login**: Only users registered in the system can access the platform
- **Processes Management**: Control system's processes
- **Monitoring**: CPU, memory, disk information and Logging
- **Boot & Reboot**
- **Logging**: Every action performed by the user must be logged
- **User management**
- **Packet Filtering**: Apply policies with IPtables
- **Cron jobs Management**
- **Music**: To make it funnier, the device will also act as a jukebox and will play music 
    > The same custom PCB buttons mentioned in the first project are used as a functional media control buttons.
    - Play/Pause
    - Previous/Next
    - Playlist
    - Shuffle
    - Replay
