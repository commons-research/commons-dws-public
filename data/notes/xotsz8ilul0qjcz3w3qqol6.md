# [Battery packs: Let's talk about crates, baby](https://smallcultfollowing.com/babysteps/blog/2026/07/15/battery-packs/)
## Terms
- **Battery packs**: curated list of rust crates organized around a theme/goal, e.g. making a [CLI Tool](https://crates.io/crates/cli-battery-pack)
## Intro
Battery packs try to address the need for default choices for a new project/new developer in rust. 
if you install `cargo-bp` can run:
```bash
cargo bp list
```
and see battery packs. Then can add battery packs to project like:
```bash
cargo bp add cli
```
## Let's talk about you and me
key idea is that anyone can publish  a battery pack. syntax is `{name}-battery-pack`. So people building stuff like what you wanna build become the ones recommending the battery packs to use
## Creating a battery pack
creating is easy: 
`cargo bp new battery-pack`
and then just follow the prompts. Then you publish to crates.io to get it out there. 
## Giving it some structure
Can group dependencies/features into categories. 
──────────────────────────────────────────────────────────────────
 ▼ Concurrency Framework (pick at most one)
 > ○ ✦ embassy [embassy-executor, embassy-sync, embassy-time]
   ○ ✦ rtic [cortex-m, rtic]    RTIC — interrupt-driven real-time

 ▼ Display & Graphics (pick any number)
   [ ] ✦ display-ssd1306 [embedded-graphics, ssd1306]    SSD1306
   [ ] ✦ display-st7789 [embedded-graphics, st7789]    ST7789 col

 ▼ Popular Drivers (pick any number)
   [ ] ✦ display-ssd1306 [embedded-graphics, ssd1306]    SSD1306
   [ ] ✦ display-st7789 [embedded-graphics, st7789]    ST7789 col
   [ ] ✦ sensor-bme280 [bme280]    BME280 temperature/humidity/pr
   [ ] ✦ sensor-lis3dh [lis3dh]    LIS3DH 3-axis accelerometer (I
   [ ] ✦ usb-device [usb-device, usbd-serial]    USB device stack

 ▼ Hardware Abstraction Layer (pick at most one)
   ○ ✦ atsamd [atsamd-hal, cortex-m-rt, critical-section-impl, co
   ○ ✦ esp32 [embedded-hal, esp-hal]    ESP32 (Xtensa, WiFi + BT,
   ○ ✦ esp32c3 [embedded-hal, esp-hal]    ESP32-C3 (RISC-V, WiFi
   ○ ✦ esp32s3 [embedded-hal, esp-hal]    ESP32-S3 (Xtensa, WiFi
   ○ ✦ nrf52832 [cortex-m-rt, critical-section-impl, cortex-m, em
   ○ ✦ nrf52840 [cortex-m-rt, critical-section-impl, cortex-m, em
   ○ ✦ nrf9160 [cortex-m-rt, critical-section-impl, cortex-m, emb
   ○ ✦ rp2040 [cortex-m-rt, critical-section-impl, cortex-m, embe
   ○ ✦ stm32f0 [cortex-m-rt, critical-section-impl, cortex-m, emb
 embedded-battery-pack v0.1.0  ↑↓/jk Navigate | Space Toggle | ←/→
##  Let's talk about all the good things...
this could absolutely become commercially supported by bigger actors and grow into a robust go to tool
### Supporting maintainers
If things become a battery pack member and that battery pack is a default for many projects then it helps justify supporting a maintainer financially for big players. 
### Fostering interoperability
it could influence the interop discussion and drive interoperability through battery packs guiding default means of doing things. 
## ... and the bad things that could be
anyone can publish them. could have bad actors. 
### Avoiding stagnation
battery packs are designed to be able to evolve. 