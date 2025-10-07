---
title: 'How Computers Understand Numbers'
date: '2025-10-07T15:42:41+08:00'
draft: true
series: ["Bit by Bit"]
tags: ["Bit-By-Bit"]
description: "This article introduces Binary Number System from the ground up."
---

## Introduction
Anyone with some programming experience probably knows that computers operate using 1s and 0s — called **bits**. But not everyone understands *why* we use bits in the first place. In this article, we’ll explore the reasoning behind this design choice and uncover how computers represent information at the most fundamental level.

### From Analog to Digital
Information can be represented in two forms: **analog** or **digital**.
We live in an **analog** world — continuous and fluid — but computers live in a **digital** one.

Before we move on, let’s make sure we understand what these two terms mean:
> **Analog** ([Merriam-Webster](https://www.merriam-webster.com/dictionary/analog)): of, relating to, or being a mechanism or device in which information is represented by continuously variable physical quantities

> **Digital** ([Cambridge Dictionary](https://dictionary.cambridge.org/us/dictionary/english/digital)): recording or storing information as a series of the numbers 1 and 0, to show that a signal is present or absent.

The real world is analog — continuous, infinitely detailed, and unbroken.  
For example, there are infinitely many real numbers between 5.494 and 5.495:
> 7.1294, 7.129449, 7.1294502, 7.1294609, …

But computers are built from **finite** hardware systems. Memory chips, processors, and storage devices can only hold a limited number of bits. Therefore, the challenge is to represent *enough* of the real world to satisfy our computational needs and our senses — sight, sound, and touch — within these physical limits.

### Why Digitize?
Most sensors in the real world — microphones, thermometers, cameras — naturally produce **analog signals**.  
However, computers cannot process analog information directly. To work with it, we must **digitize** it — that is, convert continuous analog signals into discrete digital values.

This is where the **Analog-to-Digital Converter (ADC)** comes in.  
An ADC measures an analog signal at regular intervals and assigns each measurement a digital value. Once converted, the data can be stored, processed, or transmitted by a computer.

In short:
- The **natural world** is analog and continuous.  
- **Computers** are digital and finite.  
- **Digitization** bridges the gap, allowing computers to make sense of the real world.