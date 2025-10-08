---
title: 'How Computers Understand Numbers'
date: '2025-10-07T15:42:41+08:00'
draft: false
series: ["Bit by Bit"]
tags: ["Bit-By-Bit"]
description: "This article introduces Binary Number System from the ground up."
---

{{< center >}}
`⚠️ This article is a work in progress. More sections will be added soon. Stay tuned!`
{{< /center >}}

## Introduction
Anyone with some programming experience probably knows that computers operate using 1s and 0s — known as **bits**. But not everyone understands *why* we use bits in the first place. In this article, we’ll explore the reasoning behind this design choice and uncover how computers represent information at the most fundamental level.

## From Analog to Digital
Information can be represented in two fundamental forms: **analog** or **digital**.
> **Analog** ([Merriam-Webster](https://www.merriam-webster.com/dictionary/analog)): of, relating to, or being a mechanism or device in which information is represented by continuously variable physical quantities

> **Digital** ([Cambridge Dictionary](https://dictionary.cambridge.org/us/dictionary/english/digital)): recording or storing information as a series of the numbers 1 and 0, to show that a signal is present or absent.

The real world is analog — continuous, infinitely detailed, and unbroken.  
For example, there are infinitely many real numbers between 7.129 and 7.130:
$$
7.1294, 7.129449, 7.1294502, 7.1294609, \cdots
$$
However, computers are built from **finite** hardware systems. Memory chips, processors, and storage devices can only hold a limited number of bits. Therefore, the challenge is to represent *enough* of the real world to satisfy our computational needs and our senses — sight, sound, and touch — within these physical limits.

### Why Digitize?
Most sensors in the real world — microphones, thermometers, cameras — naturally produce **analog signals**.  
However, computers cannot process analog information directly. To prcoess these signals, we must **digitize** them — converting continuous analog inputs into discrete digital values.

> **Side Note** \
> This is where the **Analog-to-Digital Converter (ADC)** comes in.  
> An ADC samples an analog signal at regular intervals and quantizes each measurement into a digital value. Once converted, the data can be stored, processed, or transmitted by a computer.
> [{{< img src="/images/analog-signal-to-digital-signal.png" alt="Analog Signal to Digital Signal" width="600" class="rounded-xl" >}}](http://eitc.org/research-opportunities/new-media-and-new-digital-economy/computer-vision-immersive-technology-and-digital-content/image-processing-research-and-applications/analog-and-digital-signals)

In short:
- The **natural world** is analog and continuous.  
- **Computers** are digital and finite.  
- **Digitization** bridges the gap, allowing computers to make sense of the real world.

## Information Age
We're currently living in the **Information Age** ([wikipedia](https://en.wikipedia.org/wiki/Information_Age)). During this era, humanity has created countless digital systems — from computers and smartphones to TVs, cameras, and scientific calculators.

### Signal
Computers transmit information through signals, where discrete pieces of data are represented by physical quantities. Back in the day, there were several ways to transmit data — using relays or vacuum tubes — and all of them relied on electrical signals such as voltage and current. In 1947, a groundbreaking device was invented — the **transistor** — which pioneered and defined the modern semiconductor era. It offered low power consumption, high reliability, and long lifespan, making relays and vacuum tubes obsolete.

A transistor is a three-terminal semiconductor device. When enough current is applied to the base (B) terminal, current flows from the collector (C) to the emitter (E). From the emitter’s perspective, no current flow represents a 0, while current flow (nonzero voltage) represents a 1.

[{{< img src="/images/transistor.png" alt="transistor" width="600" class="rounded-xl" >}}](https://www.allaboutelectronics.org/bjt-bipolar-junction-transistor/)

Nowadays, most digital systems use two discrete values (binary) because it’s easy to implement using transistors that switch between two voltage levels. The two discrete values can be interpreted as:
- digits 0 and 1 (aka. binary digit, or bit)
- Low (L) and High (H) (voltage levels)
- False (F) and True (T) (boolean values)
- On and Off (switches)

### Signal distortion
During transmission, signals may become distorted (voltage levels can change), but with binary design, fault tolerance is built in. The following figure demonstrates the working range of a TTL (Transistor-Transistor Logic) gate:

[{{< img src="/images/Logic-Signal-Voltage-Levels.png" alt="Voltage levels" width="600" class="rounded-xl" >}}](https://www.allaboutcircuits.com/textbook/digital/chpt-3/logic-signal-voltage-levels/)

Its wide operating range is ideal for real-world applications, where electrical noise can interfere with digital devices. However, this comes with a tradeoff: digitization sacrifices some accuracy for greater reliability and easier transmission. \
The picture below depicts this tradeoff. As long as a distorted digital signal is still inside the working range, it can recover its original input. In comparison, analog signals are more difficult to recover.
[{{< img src="/images/signal-noise.png" alt="signal noise" width="600" class="rounded-xl" >}}](https://www.xlrsecurity.com/blog/analog-vs-ip-cameras-which-one-should-i-buy/)

Now you know why computer designers chose binary system over decimal system or other systems.

In short:
- Modern digital systems operate on the binary system (only two digits, 1s and 0s), and was implemented using transistors.
- Distinguishing 2 voltage levels is easier and has less distortion than 10 levels for real-world electrical devices.
- Digital signals are easier to recover than analog signals at the cost of accuracy.

## Binary Number System

### Number vs. Numeral

