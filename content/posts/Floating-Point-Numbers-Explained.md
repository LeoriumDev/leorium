---
title: 'Floating Point Numbers Explained'
date: '2025-10-03T14:03:36+08:00'
draft: true
tags: ["Fixed-point", "Floating-point", "IEEE-754"]
author: "Leorium"
---

> ⚠️ This post is a work in progress. More sections will be added soon. Stay tuned!

## Introduction
Almost every programming course introduces floating-point numbers in the first few lectures. However, only a handful actually explain how floating-point _really_ works. In this article, we'll go beyond the surface — diving deep into the details of fixed-point numbers, floating-point representation, the [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) standard, special numbers, rounding errors, and more. By the end, you’ll not just **_use_** floating-point numbers, but truly **_understand_** them.

## Number Representation

### Why Bits?

Anyone with some programming experience likely knows that computers are made up of 1s and 0s — called **bits**. But some might not be able to figure out why would we use bits. In this section, I will explain the reasons behind the scenes.

The most obvious reason is simplicity: From a hardware perspective, it is extremely convenient to design computers this way. It's much easier to distinguish between two distinct voltage levels (for example, 0 V and +5 V) than between ten different levels like what we are used to. Therefore, by using just two voltage states, we reduce design complexity and increase reliability. 

Here is an example. Let’s imagine we tried to encode decimal digits (0-9) in voltage form — say, 0 V for 0, 0.5 V for 1, 1.0 V for 2, and so on up to 4.5 V for 9. In reality, differentiating between such precise voltages is difficult because signals can get distorted during transmission. Thus, we should preserve some space for tolerance.

You might wonder: “If small voltage differences are unreliable, why not just expand the range, say from 0 V to 9 V?” \
That’s a good question — but higher voltage means higher **power consumption**. Transmitting and switching larger voltages require more energy, making the computer far less efficient and more power-hungry.

So, using bits (just two voltage states) is both simpler and more energy-efficient. And now you know why computers are made up of bits, but what the heck is a _bit_?

### What is a Bit?

A bit is short for **b**inary dig**it**. \
It can represent two states: 1 or 0, true or false, on or off, and so on.

A single bit by itself isn’t very useful — but when you combine multiple bits, you can represent a wide range of values. That’s exactly what engineers did back in the 1970s and 1980s when building digital systems.

We already know that a bit can represent two things, so what about 2 bits — 4, right? Since each bit can represent two different things, 2 times 2 is four.

You might see a pattern here: each additional bit doubles the number of possible combinations. \
For example, one bit gives 2 combinations, two bits give 4, three bits give 8, four bits give 16, and so on. \
In general, we can extend this pattern to $N$ bits:

$$
2 \times 2 \times 2 \times \cdots = 2^N
$$

So if you have $N$ bits, you can represent $2^N$ different values.

This seems cool, but is it related to decimal or base-10 system?

### Binary System
Starting from grade school, we learn to work with decimal numbers, for example 1645.72, which belongs to the decimal system.

In decimal system, we can think each digit of the number, say 1645.72, represents a different place value based on powers of 10. It might sound complicated. But this is actually baked into our real life. Take the number 1645 (without the fractional parts), you would read it as "one thousand six hundred forty-five". See what's inside! "thousand" stands for 1000, which is $10^3$, and "hundred" stands for 100, which can be represented by $10^2$, and the "-ty" or "teen" stands for 10, which is verbosely $10^1$. We got one left: five. Can you guess its place? — $10^0$, right? Since $5 \times 10^0 = 5 \times 1 = 5$.

So, those words literally describe the positional values. Therefore, we can express 1645 as:

$$
1645 = 1 \times 10^3 + 6 \times 10^2 + 4 \times 10^1 + 5 \times 10^0
$$

The factor of each place is what we would normally see or write, 1645.

Then, how do we decompose 1645.72? \
In elementary school, we were taught that a decimal number consists of a whole number part, a decimal point, and a fractional part. In this case, it's 0.72. We can write it as $72 \over 100$, and rewrite it as ${7 \over 10} + {2 \over 100}$, did you see where we are going? We can further rewrite it as $7 \times 10^{-1} + 2 \times 10^{-2}$, and boom! See how we can relate this to the whole number parts!

The decimal number 1645.72 can be express as:

$$
1645.72 = 1 \times 10^3 + 6 \times 10^2 + 4 \times 10^1 + 5 \times 10^0 + 7 \times 10^{-1} + 2 \times 10^{-2}
$$

And there you go! You just learn the basics to master binary numbers (which we will talk shortly).

Btw, remember how 5 + 5 = 10? It is a trivial arithmetic but what you did there is called **carrying**. \
In decimal (base-10) arithmetic, you carry over when the sum reaches 10.

Binary system works the same way — just in base 2 instead of base 10. In other words, a binary system (base 2) consists of **only** two values — 1 and 0. Each place of the bits represents a power of 2 instead of a power of 10. Therefore, we carry to the next digit when the sum reaches 2.

In computers, when you group bits together, you get a **bit string**, which is how numbers, characters, emojis, etc. are represented under the binary system. \
For example, with 4 bits, you can represent 16 different numbers — from 0 to 15.

But why 0 to 15 and not 1 to 16? That's because binary counting starts at zero. \
To demonstrate this, the smallest 4-bit combination is 0000, which corresponds to 0.

$$
0000_2 = 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 0 \times 2^1 = 0_{10}
$$

{{< center >}}
(The subscript 2 and 10 represents the base of the number)
{{< /center >}} \
Hence, with 16 total combinations, the highest number you can represent is 16 - 1 = 15. Since we need to reserve one for zero. 

Btw, each combination (e.g. 0110) here is commonly called as a **Binary Number**.

Now, you know a little bit about binary system. Next, we're going to cover binary arithmetic, aka. how mathematical operations ob binary numbers.

### Binary Arithmetic

## Integers and Fix-point Numbers

### Unsigned and Signed Integers
### Fractional Representation
### Fixed-Point Representation
### Limitations of Fixed-Point

## Floating-point Numbers
### Why floating-point?

## IEEE-754 Standard
### Floating-point Representation
### Online Floating-point Visualizer
### Normalized vs. Denormalized
### Special Values (Inf, NaN, ±0)
### Cancellation, Guard Digits
## Rounding and Precision
### Rounding modes
### Rounding errors in arithmetic
### Ulps, Relative Error, Rounding Error, Significance Error
### special floating-point values and edge-case expressions

## Errors and Limitations
### Errors in Summation
### Error Propagation
### Exception Handling
### Overflow, Underflow, and Subnormal loss
### Associativity problems
### Cumulative errors in loops
### Comparing floating-point numbers safely

## Floating-point Arithmetic

## FPU
### Why Linux Don't use float?
### Fused Multiply-Add
### Streaming SIMD Extensions (SSE)

### Performance

## Floating-point Variants
### tf32
### bf16

## Reinvent The Wheel: Crafting a <math.h> library

## Fun History of Floating-point Numbers
### IEEE-754 origins, William Kahan, Intel 8087
### Real-world bugs caused by FP errors

## Conclusion
Speed and range come at the cost of precision.

Floating-Point Mastery: The Definitive Guide from Binary Basics to Numerical Expertise

### Article 1: The Absolute Basics: Why Computers Speak in Bits and Binary
- Start with hardware fundamentals: voltage levels, why binary (0/1) is reliable and efficient over decimal or multi-state systems, power consumption issues.
- Define bits, bytes, and how N bits create 2^N combinations; simple examples with 1-8 bits.
- Introduce binary as base-2: place values with powers of 2, converting decimals to binary (integers and basics of fractions).
- Cover binary counting, bit strings, and why zero is included (0 to 2^N - 1 range).
- C tie-in: Use bit manipulation in C (e.g., unsigned char for 8 bits, bitwise ops like & | ^) to demonstrate combinations.

### Article 2: Binary Arithmetic: Adding, Subtracting, and Beyond for Beginners
- Step-by-step binary addition with carrying (e.g., 101 + 11), subtraction using borrowing.
- Multiplication and division in binary, with examples and relation to decimal operations.
- Overflow basics in fixed-width binary; introduce concepts like shifting for powers of 2.
- Simple exercises: convert and compute small numbers to build intuition.
- C examples: Implement binary addition using loops and arrays in C, show integer overflow behavior with int types.

### Article 3: Representing Integers: Unsigned, Signed, and Their Trade-offs
- Unsigned integers: straightforward positive representation, max range for N bits.
- Signed integers: one's complement vs. two's complement (focus on two's for modern systems), sign bit, negative numbers.
- Examples: 8-bit representations, arithmetic with signed numbers, overflow detection.
- Common pitfalls: mixing signed/unsigned in code, integer promotion in languages like C.
- C specifics: Use <stdint.h> for uint8_t/int8_t, demonstrate two's complement negation (~x + 1), and undefined behavior on signed overflow.

### Article 4: Handling Fractions: Binary Fractions and Fixed-Point Numbers
- Binary fractions: converting decimals (e.g., 0.625 = 0.101_2), repeating fractions like 0.1 in binary.
- Fixed-point representation: Q formats (e.g., Q15.16), scaling factors, addition/subtraction/multiplication.
- Advantages: precision for financial apps, no rounding surprises; limitations: fixed range, manual scaling.
- Code examples: implementing fixed-point in Python or C for simple calculations.
- C focus: Implement Q-format arithmetic using integers (e.g., int32_t for Q16.16), show macros for scaling, and embedded use cases like DSP.

### Article 5: Why Fixed-Point Isn't Enough: Introducing Floating-Point Numbers
- Limitations of fixed-point: poor for very large/small numbers, scientific notation analogy.
- High-level floating-point: sign, exponent, mantissa; dynamic range benefits.
- Historical context: pre-IEEE chaos in representations.
- Simple examples: representing 1.23e4 in basic float format.
- C intro: Basic float/double declarations, printf formatting for floats (%f, %e).

### Article 6: IEEE 754 Essentials: Single and Double Precision Breakdown
- Core structure: 32-bit float (1 sign, 8 exp, 23 mantissa), 64-bit double (1/11/52).
- Biasing exponents, hidden leading bit in normalization.
- Converting numbers: step-by-step encoding/decoding (e.g., 3.14 in binary float).
- Tools: recommend online visualizers; basic code to unpack floats in Python (struct module).
- C examples: Use <stdint.h> and unions to bit-hack floats (e.g., union { float f; uint32_t i; } to extract bits), print hex representation with printf("%x").
- Kahan integration: Discuss Kahan's role as primary architect of IEEE 754-1985, with quotes from his 1981 paper "Why Do We Need a Floating-Point Standard?"

### Article 7: Normalization and Denormalization in IEEE 754
- Normalized form: leading 1 implied, max precision.
- Denormalized (subnormals): for gradual underflow, representing tiny numbers near zero.
- Trade-offs: reduced precision in subnormals, flush-to-zero modes.
- Examples: encoding smallest positive float, why denormals prevent abrupt underflow.
- C tie-in: Use fpclassify() from <math.h> to detect subnormals (FP_SUBNORMAL), demonstrate with DBL_MIN and smaller values.
- Kahan integration: Cover Kahan's advocacy for denormals in IEEE 754 design to handle gradual underflow gracefully.

### Article 8: Special Values in IEEE 754: Infinity, NaN, and Signed Zero
- Infinities: +∞/-∞ from overflow or division by zero.
- NaN: quiet vs. signaling, propagation in operations, payloads for debugging.
- Signed zeros: +0/-0, behaviors in comparisons and operations (e.g., 1/+0 = +∞, 1/-0 = -∞).
- Edge cases: 0/0 = NaN, sqrt(-1) = NaN; code demos in C++ or Java.
- C cool stuff: Generate specials like double inf = 1.0/0.0; double neg_inf = -1.0/0.0; double nan = 0.0/0.0; use isinf(), isnan(), signbit() from <math.h>; show printf behaviors (e.g., "-inf" for neg_inf).
- Kahan integration: Explore Kahan's paper on positive and negative zero, explaining their mathematical and computational necessity.

### Article 9: Rounding Modes and Precision: The Heart of Floating-Point Accuracy
- IEEE rounding modes: nearest-even (default), toward zero/positive/negative.
- Precision concepts: machine epsilon, ulps (units in last place), relative/absolute error.
- Guard, round, sticky bits: how hardware rounds during operations.
- Examples: why 0.1 can't be exact in binary, rounding in addition.
- C examples: Use fesetround() from <fenv.h> to change modes (e.g., FE_TONEAREST, FE_TOWARDZERO), demonstrate rounding differences in loops.
- Kahan integration: Discuss Kahan's fun facts on why nearest-even rounding was chosen, from his interviews and papers.

### Article 10: Common Pitfalls: Rounding Errors and Catastrophic Cancellation
- Rounding in arithmetic: accumulation in sums, why 0.1 + 0.2 != 0.3.
- Cancellation: subtracting close numbers loses significant digits.
- Associativity failures: (a + b) + c != a + (b + c) due to rounding.
- Mitigation: sorting sums, using higher precision temporarily.
- C focus: Code to show 0.1 + 0.2 with printf("%.20f"), implement Kahan summation in C for accurate loops.
- Kahan integration: Deep dive into Kahan's summation algorithm, with proofs and C implementations; reference his paper "How Futile are Mindless Assessments of Roundoff in Floating-Point Computation."

### Article 11: Overflow, Underflow, and Exceptions in Floating-Point
- Overflow: to ±∞, signaling options.
- Underflow: to subnormals or zero, loss of precision.
- Exception handling: IEEE flags (inexact, division by zero, invalid), masked vs. trapped.
- Code: checking flags in C (fenv.h), Python's decimal for comparison.
- C specifics: Use fegetexceptflag() and feraiseexcept() to handle flags, demonstrate overflow with huge values like DBL_MAX * 2.
- Kahan integration: Cover Kahan's designs for exception handling in IEEE 754, from his Turing Award lecture and related papers.

### Article 12: Error Propagation and Cumulative Errors: Loops and Long Computations
- How errors build in iterative algorithms (e.g., numerical integration).
- Compensated summation (Kahan algorithm) for accurate sums.
- Significance error: tracking lost digits in chains of operations.
- Case studies: unstable algorithms like quadratic formula naive vs. stable form.
- C examples: Implement Simpson's rule integration with error analysis, use long double for higher precision.
- Kahan integration: Expand on Kahan's work in error minimization, referencing his manuscript "Rational Arithmetic in Floating-Point" (1986).

### Article 13: Safe Floating-Point Practices: Comparisons and Best Coding Tips
- Avoiding exact equality: use epsilon or relative tolerances (e.g., fabs(a - b) < eps * max(fabs(a), fabs(b))).
- Testing: unit tests for FP code, considering platform differences.
- Language specifics: Python's float vs. Decimal, C's float/double/long double.
- Debugging: printing full precision, using hex floats.
- C cool tips: Use nextafter() from <math.h> for ulps-based comparisons, hex floats in scanf/printf (e.g., "%a").
- Kahan integration: Include Kahan's advice on education for FP issues, from his advocacy papers.

### Article 14: Floating-Point Arithmetic: Step-by-Step Under the Hood
- Addition: alignment, addition, normalization, rounding.
- Multiplication/division: mantissa ops, exponent add/subtract.
- Square roots and transcendentals: approximation methods (e.g., Newton-Raphson).
- Fused multiply-add (FMA): exact a*b + c, benefits in dot products.
- C examples: Use fma() from <math.h> for FMA, implement manual addition with bit manipulation.
- Kahan integration: Discuss Kahan's contributions to transcendental functions, from his HP calculator papers like "Personal Calculator Has Key to Solve Any Equation f(x) = 0" (1979) and "Handheld Calculator Evaluates Integrals" (1980).

### Article 15: Hardware Acceleration: The Floating-Point Unit (FPU) and SIMD
- FPU history: coprocessors like Intel 8087.
- Modern FPUs: pipelining, denormal handling performance hits.
- SIMD extensions: SSE/AVX for vectorized floats (e.g., 4 doubles at once).
- Performance tips: alignment, avoiding denormals (DAZ/FTZ flags).
- C focus: Use intrinsics like _mm_add_pd from <immintrin.h> for SSE/AVX, benchmark loops with denormals.
- Kahan integration: Cover Kahan's work on Intel 8087 and early FPUs, from interviews.

### Article 16: Why Linux (and Others) Prefer Doubles: Precision vs. Performance Trade-offs
- Float vs. double: when single precision suffices (graphics, ML inference).
- OS/language defaults: Linux kernel avoids floats for precision in calculations.
- Benchmarking: speed differences, cache effects.
- Exotic: half-precision (fp16) in hardware.
- C examples: Compile with -march=native for FPU opts, use __float128 for quadruple precision (GCC extension).
- Kahan integration: Reference Kahan's critiques of language implementations, like in "Matlab's Loss is Nobody's Gain" (2004).

### Article 17: Modern Floating-Point Variants: bf16, tf32, and Beyond
- bfloat16 (bf16): wide exponent for ML range, reduced mantissa.
- TensorFloat-32 (tf32): NVIDIA's internal format for faster training.
- Other formats: fp8 for ultra-low precision AI, posit/unum alternatives to IEEE.
- Use cases: deep learning (reduced memory, speed), trade-offs in accuracy.
- C tie-in: Use GCC's __bf16 type, demonstrate conversions and ops.
- Kahan integration: Contrast with Kahan's IEEE 754 revisions (2008/2019), including decimal FP.

### Article 18: Implementing Your Own Floating-Point Library: Reinventing <math.h>
- Bit-level ops: extracting sign/exp/mantissa in C.
- Basic add/multiply: handling normalization, rounding, specials.
- Advanced: implement sin/cos using Taylor series with error bounds.
- Challenges: ensuring IEEE compliance, testing against hardware.
- C focus: Full implementation in C, use frexp()/ldexp() for reference, handle NaN payloads.
- Kahan integration: Incorporate Kahan's "Paranoia" program as a testing tool; implement and run it in C to verify custom library.

### Article 19: The Fascinating History of Floating-Point: From Origins to Modern Standards
- Pre-IEEE: vendor-specific formats, portability issues.
- IEEE 754 birth (1985): William Kahan's Turing Award work, committee debates.
- Evolutions: 2008/2019 revisions (decimal FP, minNum/maxNum).
- Fun facts: why nearest-even rounding, Kahan's "paranoia" test program.
- C connection: How C89 standardized float/double, evolution in C11 with <fenv.h> updates.
- Kahan integration: Expanded coverage of Kahan's leadership in IEEE 754, including video insights from his talks (e.g., YouTube on creating the standard); reference his 1985 Byte Magazine on Paranoia.

### Article 20: Real-World Floating-Point Disasters: Bugs That Shook the World
- Pentium FDIV bug (1994): flawed division table, Intel's $475M recall.
- Ariane 5 explosion (1996): integer overflow in FP conversion.
- Patriot missile failure (1991): time accumulation error.
- Modern: Excel FP quirks, ML model drifts from precision loss.
- C examples: Reproduce Patriot bug in C code with time loops.
- Kahan integration: Discuss Kahan's analyses of such bugs, from his papers and interviews.

### Article 21: Advanced Topics: Decimal Floating-Point and Arbitrary Precision
- IEEE 754 decimal: base-10 for finance (no 0.1 issues), formats like decimal64.
- Libraries: Python Decimal, Java BigDecimal, GMP/mpfr for arbitrary precision.
- When to use: exact decimals in money, high-precision simulations.
- Performance costs: slower than binary FP.
- C specifics: Use mpfr library for arbitrary FP, demonstrate decimal in C with _Decimal64 (GCC).
- Kahan integration: Cover Kahan's "Decimal versus Binary Floating-Point Arithmetic" (1986 manuscript).

### Article 22: Floating-Point in Specialized Domains: Graphics, ML, and Scientific Computing
- Graphics: FP in shaders, z-buffers, texture filtering errors.
- Machine learning: quantization, mixed precision training (fp16 + fp32 accum).
- Scientific: chaos in simulations (butterfly effect from rounding), reproducible FP.
- Hard: interval arithmetic for bounding errors, rigorous numerics.
- C focus: OpenGL FP in C, CUDA for ML mixed precision.
- Kahan integration: Reference Kahan's work on norm-preserving dilations (Davis-Kahan-Weinberger theorem, 1982) for scientific error bounds.

### Article 23: Really Hard Stuff: Formal Verification and Exotic Floating-Point
- Verifying FP code: tools like Frama-C, why FP makes proofs tricky (non-associativity).
- Exotic architectures: FP in GPUs (warps, reduced precision), quantum computing (no native FP yet).
- Advanced errors: absorption, sterile operations, exact dot products.
- Research: stochastic rounding, adaptive precision algorithms.
- C examples: Use Frama-C annotations for FP contracts, GPU intrinsics.
- Kahan integration: Discuss Kahan's theoretical contributions, like dilation theorem applications in verification.

### Article 24: Mastering Floating-Point: Comprehensive Wrap-Up and Resources
- Recap progression: from bits to verification.
- Best practices for devs: choose precision wisely, document assumptions.
- Resources: books (Goldberg's "What Every Programmer Should Know"), IEEE specs, online simulators.
- Challenges: implement a mini-FPU, analyze a FP bug in open-source code.
- C emphasis: Portability tips (e.g., avoid long double assumptions), compile flags like -frounding-math.
- Kahan integration: Add extensive bibliography of Kahan's works as core resources, including Netlib compilation.

### Article 25: Cool Floating-Point Tricks in C: Infinities, NaNs, and Environment Control
- Generate and handle specials: -1.0/0.0 for -inf, NAN macro, copysign() for signed zeros.
- Environment tweaks: fesetenv() for modes, feholdexcept() for non-stop exceptions.
- Bit hacks: unions for mantissa payloads in signaling NaNs, frexp() for decomposition.
- Fun demos: Infinite loops with inf, NaN propagation in arrays, performance with -ffast-math flag.
- Kahan integration: Tricks inspired by Kahan's critiques, e.g., handling signed zeros as per his paper.

### Article 26: Floating-Point Optimization in C: Performance Hacks for Seasoned Devs
- Compiler flags: -O3, -ffinite-math-only, -fassociative-math risks/rewards.
- Inline assembly for FPU instructions (e.g., fld, fmul on x87).
- Vectorization: manual SSE with _mm_ intrinsics, auto-vectorization tips.
- Benchmarks: timing denormal flushes, FMA usage in matrix multiplies.
- Hard: Strict aliasing with floats, undefined behavior in FP reordering.
- Kahan integration: Warnings from Kahan on optimization pitfalls, from "How Futile are Mindless Assessments..."

### Article 27: C Floating-Point Bit Hacks: Clever Manipulations and Optimizations
- Union-based type punning: safely accessing bit patterns of floats/doubles without undefined behavior (use memcpy for portability).
- Fast inverse square root: the famous Quake III hack (0x5f3759df magic number), how it works with Newton's method approximation.
- Setting custom NaN payloads: injecting debug info into quiet/signaling NaNs for error tracking.
- Bit-level tricks: flipping sign bit (XOR with 0x80000000), extracting exponent/mantissa manually, approximating log/exp with bit shifts.
- C examples: Implement fast math functions like absf via bit mask, compare with standard fabs(); discuss aliasing rules and -fstrict-aliasing.
- Kahan integration: Bit hacks for logarithms, inspired by Kahan's "A Logarithm Too Clever by Half."

### Article 28: Assembly and Floating-Point Instructions: x87, SSE, and AVX Deep Dive
- x87 FPU basics: stack-based ops (fld, fadd, fstp), legacy floating-point on x86, handling extended precision (80-bit).
- SSE instructions: scalar (addss, mulss) and packed (addps, mulps) for floats, intrinsics in C (_mm_add_ss).
- AVX/AVX2/AVX-512: wider vectors (256/512-bit), fused ops (vfmadd), masked operations for conditionals.
- Inline assembly in C: using __asm__ for custom FP sequences, clobber lists, AT&T vs. Intel syntax.
- Advanced: Pipeline stalls from denormals, branchless FP with cmppd/maskmov, performance counters with perf; examples in matrix inversion or FFT.
- Kahan integration: Assembly insights from Kahan's work on HP calculators and early FPUs.

### Article 29: Interval Arithmetic and Error Bounding: Rigorous Floating-Point Computations
- Basics of interval arithmetic: representing ranges [low, high] to bound errors, operations that preserve bounds.
- Implementing in C: custom structs for intervals, handling directed rounding (fesetround for up/down).
- Applications: verified numerics in safety-critical systems (e.g., aviation), solving equations with guaranteed accuracy.
- Hard topics: affine arithmetic extensions, Taylor models for higher-order error control.
- C examples: Use MPFI library or roll-your-own for interval sin(x), compare with naive FP.
- Kahan integration: Link to Kahan's dilation theorem for error bounds in operators.

### Article 30: Reproducible Floating-Point: Cross-Platform Consistency Challenges
- Sources of non-reproducibility: FPU modes, compiler optimizations, hardware differences (x87 vs. SSE).
- Techniques: strict IEEE compliance flags (-frounding-math, -msse2), using software FP libraries.
- In C: Enforce rounding with <fenv.h>, seed-based stochastic rounding, tools like Verificarlo for error injection.
- Expert: Parallel FP issues in MPI/OpenMP, bit-identical reductions.
- Kahan integration: Draw from Kahan's critiques in "How Java's Floating-Point Hurts Everyone Everywhere" (1998) and similar language-specific papers.

### Article 31: Floating-Point in Embedded Systems: Constraints and Workarounds
- Soft-float vs. hard-float: ARM/embedded without FPU, using fixed-point alternatives.
- Power/precision trade-offs: half-precision on microcontrollers, avoiding denormals for speed.
- C specifics: Compiler options like -mfloat-abi=soft, implementing FP ops in assembly for bare-metal.
- Case studies: FP in IoT sensors, real-time control systems with error tolerance.
- Kahan integration: Reference Kahan's HP calculator work for embedded precision.

### Article 32: Stochastic and Alternative Rounding: Beyond IEEE Defaults
- Stochastic rounding: random tie-breaking for reduced bias in ML/training.
- Implementing in C: custom round functions with rand(), compare error accumulation.
- Alternatives: faithful rounding, jam rounding; research on error-minimizing modes.
- Expert: Applications in low-precision AI, simulations with controlled noise.
- Kahan integration: Contrast with Kahan's standard rounding advocacy.

### Article 33: Posits and Unums: Next-Gen Alternatives to IEEE 754
- Posit format: dynamic bit allocation for better range/precision, no subnormals.
- Unum types (I/II/III): variable precision, exact error tracking.
- Comparisons: advantages over floats in accuracy/efficiency, drawbacks in hardware support.
- C implementations: Libraries like Universal for posits, emulate operations.
- Kahan integration: Discuss Kahan's views on alternatives, from interviews.

### Article 34: Quantum and Emerging Computing: Floating-Point in Non-Classical Systems
- FP in quantum: approximating reals on qubits, error-corrected FP ops.
- Neuromorphic/analog computing: imprecise FP analogs for energy efficiency.
- Future: hybrid quantum-classical FP for simulations.
- C tie-ins: Simulating quantum FP with libraries like QuTiP (but focus on concepts).
- Kahan integration: Speculate on how Kahan's error principles apply to quantum numerics.

### Article 35: Becoming a Floating-Point Expert: Capstone Projects and Career Advice
- Projects: build a software FPU emulator in C/assembly, verify a numerical library.
- Career paths: numerics in finance, HPC, AI; certifications like IEEE involvement.
- Resources: advanced papers (Kahan's works), conferences (ARITH), online challenges.
- Final recap: from binary bits to quantum, emphasizing testing and skepticism.
- Kahan integration: Capstone on emulating Kahan's Paranoia in modern contexts.

### Article 36: Kahan's "A Logarithm Too Clever by Half": The Table-Maker's Dilemma
- Explain the dilemma: cost of correctly rounding transcendentals.
- Breakdown of the paper: logarithmic computation issues.
- C implementations: Test logarithmic hacks, compare accuracy.
- Applications: Improving math libraries for exact rounding.

### Article 37: Lessons from Kahan's "How Java's Floating-Point Hurts Everyone Everywhere"
- Critique of Java's FP: strict vs. lenient modes, impacts on devs.
- Key examples: portability issues, error propagation.
- C comparisons: How C avoids or replicates these pitfalls.
- Modern relevance: FP in JVM languages today.

### Article 38: Analyzing Kahan's "Matlab's Loss is Nobody's Gain"
- Issues with Matlab FP: matrix ops, epsilon handling.
- Paper breakdown: multiplication errors, alternatives.
- C equivalents: Implement matrix multiplies, benchmark precision.
- Broader lessons: Language design for numerics.

### Article 39: Insights from Kahan's Interviews: Career and FP Wisdom
- Summarize key interviews (e.g., 2016 SIAM, IEEE 754 creation).
- Themes: Standard development, bug advocacy.
- C tie-ins: Applying interview advice to C code.
- Fun facts: Kahan as "curmudgeon" in FP debates.

### Article 40: Kahan's HP Calculator Contributions: Precision in Pocket Devices
- Papers: "Personal Calculator Has Key to Solve Any Equation" (1979), "Handheld Calculator Evaluates Integrals" (1980).
- Enhancements to HP-35/HP Voyager: transcendental accuracy.
- C emulations: Simulate calculator FP in embedded C.
- Legacy: Influence on modern mobile computing.

### Article 41: The Davis-Kahan-Weinberger Dilation Theorem: Theoretical Foundations
- Theorem details: norm-preserving dilations in Hilbert spaces.
- Applications: error bounds in numerics, operator theory.
- C examples: Numerical implementations for matrices.
- Connection to FP: Stability in floating-point ops.

### Article 42: Mastering Kahan's Paranoia: The Ultimate FP Benchmark
- History and purpose: Testing FP bugs in the 1980s.
- Implement in C: Full code walkthrough, running on modern systems.
- Interpret results: Common failures, fixes.
- Extensions: Adapting for new formats like bf16.

### Article 43: Exploring Kahan's Bibliography: Rare Manuscripts and Papers
- Cover lesser-known works: "Decimal vs. Binary FP" (1986), others from Netlib bib.
- Themes: Rational arithmetic, roundoff assessments.
- C projects: Code experiments based on each paper.
- Comprehensive review: How they shaped FP standards.

### Article 44: Kahan's Critiques of Modern Systems: From Java to AI
- Aggregate papers: Java, Matlab, general FP hurts.
- AI implications: Low-precision issues in ML.
- C defenses: Building robust FP in C against these critiques.
- Future: Kahan's influence on next-gen standards.

### Article 45: Conclusion: Balancing Speed, Range, and Precision in the Floating-Point World
- Recap the journey: from hardware bits to advanced theories, Kahan's enduring legacy, and practical mastery.
- Key takeaways: Speed and range come at the cost of precision, but with awareness and tools like IEEE 754, we mitigate risks.
- Final thoughts: Encourage readers to apply knowledge in code, contribute to numerics, and stay skeptical of FP assumptions.
- Resources roundup: Full Kahan bibliography, further reading, and community forums.
- Inspirational close: Quote from Kahan on the "art of floating-point arithmetic."

### Article 46: Beyond Binary: Exploring Ternary and Balanced Ternary Systems in C
- Discuss why computers use binary but explore ternary (base-3) as an alternative, including Donald Knuth's praise for balanced ternary (-1, 0, +1).
- Cover radix economy for efficiency comparison (e.g., base e ~2.718 is optimal, but base 3 is close).
- Advantages: natural negative representation without sign bit, efficient negation (flip + and -).
- Examples: Convert decimals to balanced ternary, represent fractions like 0.2 and 0.8.
- C implementations: Simulate balanced ternary arithmetic, compare negation efficiency with binary (e.g., two's complement vs. flip in ternary).
- Applications: Historical machines like Setun, modern ideas in LLMs (1-bit models).

### Article 47: Number Systems as Abelian Groups: Algebraic Properties in Representations
- Explain Abelian groups: closure, associativity, identity (0), inverses, commutativity.
- Show how integer addition forms an Abelian group, but natural numbers do not (no inverses).
- Discuss floating-point addition: not associative due to rounding, exceptions for Inf/NaN.
- Examples: (3.14 + 1e10) - 1e10 = 0 vs. 3.14 + (1e10 - 1e10) = 3.14; compiler optimizations breaking associativity.
- C demos: Show non-associativity in floats, like (1e20 * 1e20) * 1e-20 vs. 1e20 * (1e20 * 1e-20).
- Tie to representations: Signed vs. unsigned integers, overflow implications.

### Article 48: Integer Overflow Disasters: Real-World Cases and Prevention in C
- Famous cases: Boeing 787 power shutdown (248 days overflow), Ariane 5 crash (64-bit to 16-bit conversion), Patriot missile failure, Pentium FDIV, Year 2038, YouTube Gangnam Style, Diablo III auction house, etc.
- Cover CVE entries, bugs in OpenSSH, OpenSSL, Bitcoin, SSH CRC32, etc.
- C examples: Reproduce overflows like FreeBSD KSIZE copy_from_kernel (negative maxlen), XDR copy_elements (ele_cnt/ele_size overflow).
- Prevention: Use safe functions (e.g., checked_add in libs), detect with __builtin_add_overflow, handle in embedded/real-time systems.
- Discuss progress bars, Therac-25, Super Mario lives as overflow examples.

### Article 49: Binary Representations and Conversions: Hands-On with C
- Decimal to binary: Integers (iterative divide by 2), fractions (multiply by 2, handle repeating like 0.1).
- Finite vs. infinite representations (powers of 2 in denominator).
- C code: Implement conversions, show 13510 = 100001112, 0.687510 = 0.10112.
- Pitfalls: Inexact decimals (0.8 as repeating), rounding in conversions.
- Fun: Count to 1000 on two hands (binary finger counting).

### Article 50: Advanced Bitwise Operations and Hacks in C
- Boolean algebra history: Leibniz, Boole, Shannon.
- Hacks: Lowercase/uppercase toggle without branches ('a' | ' '), XOR swap for memory efficiency.
- Average without overflow: (x & y) + ((x ^ y) >> 1).
- Detect null chars: DETECT macro for strlen optimization.
- Leading zeros (clz): De Bruijn, GCC __builtin_clz, binary search/byte-shift implementations.
- Bit reversal without loops: Swap masks for 32-bit.
- C code: Implement adders, log2 via clz, ffs (first set bit).

### Article 51: Cryptographic Applications of Bit Operations in C
- Caesar cipher: Modular shifts on letters.
- XOR for encryption: Black/white image pixels, uniform distribution proof (X XOR Y uniform if X is).
- Truth tables for n=2 XOR uniformity.
- C demos: Encrypt images with AND/OR/XOR, show noise effect; convert random distributions to uniform via XOR.

### Article 52: Precision vs. Accuracy in Floating-Point: Myths and Realities
- Define precision (digits) vs. accuracy (closeness to truth): Examples with pi approximations.
- C code: floor(2.999999) = 2, floor(2.9999999) = 3 due to storage.
- Issues: Input inexactness (irrational numbers), storage limits (mantissa/exponent), base conversions (0.1 repeating).
- Overflow/underflow: Descriptions, floating-point exceptions.
- Cross-platform: x87 vs. SSE2 differences, compiler flags like -mfpmath=sse2.

### Article 53: Floating-Point Challenges in Hardware and Software Ecosystems
- CPU variations: x87 (80-bit) vs. SSE2 (IEEE compliant), Arm VFP/NEON inconsistencies.
- GPU: NVIDIA CUDA compliance evolution, OpenCL built-ins.
- DSP: Fixed-point quantization for no-FPU hardware (e.g., Hexagon HVX).
- Remedies: Lookup tables, frame-based parameters for consistency.
- C focus: sse2neon for porting, libmath differences.

### Article 54: The Floating-Point Journey: Density, Representation, and Early Hardware
- Uneven density: Precision decreases with magnitude (logarithmic spacing).
- Binary fractions: 0.15 inexact, 0.1 as 0.1000000015.
- Historical: Z1 (1938, first FP hardware), ENIAC (1946), Intel 8087 (1980, triggered IEEE).
- Pentium FDIV bug: Verification with divisions.
- Soviet Setun (1958, ternary machine).

### Article 55: IEEE 754 Deep Dive: Formats, Rounding, and Exceptions in Practice
- Binary32/64 breakdowns, biased exponents.
- Rounding modes table (+11.5/+12.5 examples).
- Denormals: Gradual underflow vs. abrupt (DEC vs. Intel debate).
- Specials: Inf, NaN (quiet/signaling), signed zero.
- Exceptions: Invalid, div-zero, overflow/underflow, inexact; traps in C.
- C code: Manual NaN creation via unions, acos domain errors.

### Article 56: Catastrophic Cancellation and Conditioning Problems in FP
- Examples: Subtracting close numbers (a - b promotion of garbage).
- Carrots planting: Cumulative errors in loops, Kahan vs. naive sum.
- Bad conditioning: Small input changes cause big outputs (e.g., rounding dots).
- Vector angles: Normalization leading to >1 dot product.
- C code: Dot/normalize/angle functions, show errors.

### Article 57: Remedies for FP Pitfalls: Higher Precision, Fixed-Point, and Rationals
- Higher precision: Selective use (long double), memory trade-offs.
- Fixed-point: Integer scaling (e.g., 0.01 feet units), fix carrots example.
- Rationals: Fractions in libraries (GMP), Clojure examples.
- Arbitrary precision: BigDecimal, MPFR in C.
- Adapt algorithms: Alternate quadratic formula.

### Article 58: Determinism and Synchronization in Floating-Point Systems
- Non-determinism sources: Hardware/OS/compiler differences, multithreading.
- Game examples: Anarchy Online (fixed-point rewrite), Cossacks sync issues.
- Compiler variances: Intel vs. GCC matrix outputs.
- Remedies: Strict modes, software FP.

### Article 59: IEEE 754-2008 and Beyond: Evolutions and New Formats
- Upgrades: Half/quad precision, fused multiply-add, transcendentals.
- BFloat16: Wide exponent for AI, smaller multipliers vs. FP32/16.
- C code: Simulate BF16 conversions, compare dynamic range/precision.

### Article 60: Floating-Point Traps and Considerations in C Programming
- Input/storage inexactness: Irrational/decimals, memory limits, base conversions.
- Overflow/underflow: Exponent range issues, exceptions.
- Math laws failure: Associativity in FP.
- Cross-device: PC/phone/CPU/GPU/DSP differences, quantization.
- C focus: Verify with lookup tables, handle x87/SSE inconsistencies.

### Article 61: Survey Design for Assessing Developer FP Knowledge
- Outline anonymous survey structure: Background, core quiz (T/F on FP properties), optimization quiz, suspicion quiz.
- Requirements: Anonymity, low time (under 30 min), approximate practice, avoid prompting/anchoring, factor identification.
- Testing: Pilot on 20 participants, revisions for clarity.
- C tie-in: Use survey-inspired code snippets for quizzes in C syntax.

### Article 62: Background Factors in FP Understanding Surveys
- Capture self-reported info: Position (Ph.D. student, faculty, engineer), area (CS, EE, sciences), formal/informal training.
- Development experience: Role (developer vs. manager), languages used (Python, C, Matlab common), codebase sizes (up to >1M lines).
- FP extent: Intrinsic/incidental in codebases, numeric correctness focus.
- Analysis: Larger codebases correlate with better understanding, but not strongly.

### Article 63: Core FP Quiz: Testing Developer Grasp of Basics
- Questions on commutativity, associativity, distributivity, ordering, identity, negative zero, square positivity, overflow behavior.
- Results: Developers score 8.5/15 (slightly above chance 7.5), high confidence despite errors.
- Misunderstandings: Associativity (69% correct but not stellar), overflow as modular (half confuse with integers), exception signaling.
- C examples: Reproduce quiz snippets, show non-associativity.

### Article 64: Optimization Quiz: Developer Awareness of Non-Standard Behavior
- Questions on fused multiply-add (MADD), flush-to-zero (FTZ/DAZ), optimization levels (-O2 vs. -O3), -ffast-math.
- Results: Mostly "Don't Know" (over 2/3), <10% know standard-compliant levels.
- Implications: Wariness of optimizations, potential avoidance or misuse.
- C focus: Demonstrate flags like -ffast-math changing results.

### Article 65: Factor Analysis: What Influences FP Understanding?
- Strongest: Codebase size (larger = better, up to 11/15 for 1M+ lines).
- Area: EE/CS/CE better (11/15), physical sciences/engineering at chance.
- Role: Software engineers slightly better than supporters.
- Training: Formal has small effect (1-2/15 gain), informal minimal beyond basics.
- No strong factor: Arbitrary precision experience ambiguous.

### Article 66: Suspicion Levels: Developer Wariness of Exceptions
- Quiz: Likert scale (1-5) on suspicion for overflow, underflow, precision loss, invalid (NaN), denormal.
- Results: High for invalid/overflow, lower for underflow/denorm/precision; 1/3 not maximally suspicious of NaN.
- Student comparison: Similar, less suspicious of underflow/denorm (fresh training).
- C demos: Simulate exceptions, check flags to build suspicion tools.

### Article 67: Conclusions from Developer FP Surveys: Observations and Actions
- Overconfidence in basics, wariness in optimizations; hidden numeric issues likely.
- Actions: Raise awareness (like undefined behavior in C), develop effective training, tools for suspicious code (e.g., runtime monitors).
- Blend precision boundaries (FP to arbitrary), assess optimization use.
- C focus: Build paranoia-like benchmarks for modern codebases.

### Article 68: Introduction to Goldberg's FP Essentials
- Overview: Tutorial for systems builders on FP implications, background on representation/rounding.
- Myths: FP as esoteric; ubiquity in languages/hardware.
- Structure: Rounding error, IEEE standard, systems aspects, details.

### Article 69: Rounding Error in Goldberg: Formats and Measures
- FP formats: Base β, precision p, significand, exponents.
- Relative error/ulps: Definitions, machine epsilon, wobble factor (β).
- Examples: 1/2 ulp error varying by β, contaminated digits log_β n.
- C code: Compute ulps, relative errors for operations.

### Article 70: Guard Digits and Cancellation in Goldberg
- Guard digits: Reduce subtraction errors (Theorem 1/2: relative error <2ε with guard).
- Cancellation: Catastrophic (rounding-exposed) vs. benign (exact quantities).
- Examples: Quadratic formula rewrite, triangle area formula.
- Proofs: Theorems on relative errors in subtractions.

### Article 71: Exactly Rounded Operations per Goldberg
- Definition: Compute exactly then round (vs. guard only).
- Applications: Multiple precision, double-rounding issues.
- Theorems: Dekker splitting for exact products/sums.
- C implementations: Simulate exact rounding for multiplies.

### Article 72: IEEE Standard Overview in Goldberg
- Scope: Formats, operations (add/sub/mult/div/sqrt/remainder/compare), conversions, exceptions.
- Motivations: Portability, precise semantics for proofs.
- History: Kahan's influence, guard digits importance.

### Article 73: IEEE Formats and Operations Detailed
- Binary formats: Single/double/extended, biased exponents, hidden bit.
- Precision: Digits10 for decimals (6 for single, 15 for double).
- Operations: Exactly rounded basic ops, square root/remainder.
- C code: Bit layouts, conversions.

### Article 74: Special Quantities: NaNs and Infinities Explained
- NaNs: For undefined (0/0, sqrt(-1)), propagation, quiet vs. signaling.
- Infinities: Overflow/division by zero, continuation (e.g., x/(x^2+1) at inf).
- Signed zero: Preserves identities like 1/(1/x)=x.
- Examples: Zero finder continuing past domain errors.

### Article 75: Exceptions and Handling in IEEE
- Types: Invalid, div-zero, overflow/underflow, inexact.
- Defaults: Deliver results (NaN/inf), set flags.
- Traps: Handlers for custom results.
- C: Use fenv.h for flags/modes.

### Article 76: Systems Aspects: Instruction Sets and Optimizations
- Instructions: Double-from-single multiply useful (quadratic, iterative improvement).
- Examples: Linear systems solving with double accum.
- Optimizers: Preserve parentheses, avoid algebra on FP (associativity fails).

### Article 77: Languages and Compilers: FP Semantics
- Ambiguities: Subexpression precision, parentheses honoring, constants.
- Rules: Evaluate in highest operand precision, avoid double-rounding.
- Examples: BASIC 3.0/7.0 inequality due to optimization.

### Article 78: Exception Handling in Systems
- Traps vs. presubstitution (Kahan proposal).
- Pipelining issues: Identify trapping op in parallel exec.
- C: Save/restore flags, avoid overwrites in parallels.

### Article 79: Details: Advanced Rounding Error Analysis
- Theorems: Relative errors in ops, multiple ops bounds.
- Examples: x^2 - y^2 vs. (x+y)(x-y), proofs.
- C code: Demonstrate errors, mitigations.

### Article 80: Binary-to-Decimal Conversion Details
- Digits needed: 9 for single, 17 for double to round-trip.
- Proof: Spacing ensures unique rounding.
- Flags: Use inexact for double-rounding avoidance.
- C: Implement conversions, show failures with 8 digits.

### Article 81: Errors in Summation: Kahan Formula Proof
- Naive sum error: O(nε) relative.
- Kahan: O(ε) relative + O(nε^2) absolute.
- Proof: Coefficients analysis, induction.
- C: Implement naive vs. Kahan, large n tests.

### Article 82: Summary of Goldberg's Key Lessons
- FP quantifiable, not black magic.
- IEEE enables proofs, portability.
- Guard digits, exact rounding crucial.
- Systems: Support for precision, exceptions.

### Article 83: Integrating Surveys and Classics: Developer Misconceptions Revisited
- Combine Dinda survey with Goldberg: Low quiz scores align with rounding pitfalls.
- Overconfidence in basics, ignorance in opts mirrors need for education.
- C focus: Build survey quizzes as code tests.

### Article 84: FP in Modern Contexts: AI and Low-Precision
- Survey AI implications: Low-precision errors in ML (from Kahan critiques).
- Goldberg on precision trade-offs.
- C: Mixed-precision examples in torch/networkx.

### Article 85: Proving FP Algorithms: From Theorems to Code
- Use Goldberg proofs (e.g., guard digits) in C verifications.
- Survey factors: Training effects on proof understanding.
- Examples: Quadratic, summation proofs implemented.

### Article 86: Historical Context: From Z1 to IEEE Debates
- Goldberg history: Z1, 8087, Kahan interview.
- Survey recruitment: Academia/labs/industry parallels historical adoption.

### Article 87: Exception Suspicion: Aligning Survey with Goldberg
- Survey: Low suspicion for inexact/underflow.
- Goldberg: Inexact common, but signals useful.
- C: Custom handlers for suspicion logging.

### Article 88: Optimization Risks: Survey Data Meets Goldberg Systems
- Survey: Low opt knowledge.
- Goldberg: Opts violating algebra (associativity).
- C: Flags demos breaking semantics.

### Article 89: Guard Digits Proofs and Implementations
- Goldberg Theorem 1/2: Relative error bounds.
- C: Simulate add/sub with/without guards.

### Article 90: Cancellation Examples Expanded
- Goldberg: Quadratic, triangle area.
- Survey tie: Misunderstandings lead to cancellations.
- C: Rewrite formulas, error measurements.

### Article 91: Special Values in Depth: NaNs and Infinities
- Goldberg: Uses in continuations (zero finder).
- Survey: Suspicion of invalid/overflow.
- C: Generate/test specials.

### Article 92: Rounding Modes: Theory and Practice
- Goldberg: Modes table, tie-to-even.
- Survey: Associativity failures from rounding.
- C: fesetround demos.

### Article 93: Binary-Decimal Conversions: Proofs and Pitfalls
- Goldberg: Digits for round-trip.
- C: Implement, show 8 vs. 9 digits failures.

### Article 94: Summation Errors: Detailed Analysis
- Goldberg: Naive vs. compensated.
- Proof: Kahan formula bounds.
- C: Large sums benchmarks.

### Article 95: Systems Implications: From Goldberg to Modern Hardware
- Instruction sets: Double-from-single mult.
- Compilers: Avoid bad opts.
- C: Inline asm for custom precision.

### Article 96: Languages: Ambiguities and Fixes
- Goldberg: Parentheses, subexpr eval.
- Survey: Background factors on lang experience.
- C: Type promotions, constants issues.

### Article 97: Exception Handling Strategies
- Goldberg: Traps, flags.
- Survey: Low suspicion implies poor handling.
- C: fenv.h examples.

### Article 98: FP Arithmetic as Quantifiable: Goldberg's Legacy
- Dispel myths: Rigorous reasoning possible.
- Tie to survey: Need better education.

### Article 99: Comprehensive FP Bibliography and Resources
- Goldberg summary, Kahan bib.
- Survey resources: Netlib, ARITH conf.
- C projects: Paranoia adaptations.

### Article 100: Ultimate FP Mastery: Integrating Surveys, Classics, and Practice
- Recap 100 articles: Bits to surveys/theory.
- Actions: Training, tools, awareness.
- C capstone: Full FP lib with survey quizzes, Goldberg proofs.
Floating-Point Mastery: The Definitive Guide from Binary Basics to Numerical Expertise

### Article 1: The Absolute Basics: Why Computers Speak in Bits and Binary
- **Level**: Beginner
- Start with hardware fundamentals: voltage levels, why binary (0/1) is reliable and efficient over decimal or multi-state systems, power consumption issues.
- Define bits, bytes, and how N bits create 2^N combinations; simple examples with 1-8 bits.
- Introduce binary as base-2: place values with powers of 2, converting decimals to binary (integers and basics of fractions).
- Cover binary counting, bit strings, and why zero is included (0 to 2^N - 1 range).
- C tie-in: Use bit manipulation in C (e.g., unsigned char for 8 bits, bitwise ops like & | ^) to demonstrate combinations.

### Article 2: Beyond Binary: Exploring Ternary and Balanced Ternary Systems in C
- **Level**: Beginner
- Discuss why computers use binary but explore ternary (base-3) as an alternative, including Donald Knuth's praise for balanced ternary (-1, 0, +1).
- Cover radix economy for efficiency comparison (e.g., base e ~2.718 is optimal, but base 3 is close).
- Advantages: natural negative representation without sign bit, efficient negation (flip + and -).
- Examples: Convert decimals to balanced ternary, represent fractions like 0.2 and 0.8.
- C implementations: Simulate balanced ternary arithmetic, compare negation efficiency with binary (e.g., two's complement vs. flip in ternary).
- Applications: Historical machines like Setun, modern ideas in LLMs (1-bit models).

### Article 3: Number Systems as Abelian Groups: Algebraic Properties in Representations
- **Level**: Intermediate
- Explain Abelian groups: closure, associativity, identity (0), inverses, commutativity.
- Show how integer addition forms an Abelian group, but natural numbers do not (no inverses).
- Discuss floating-point addition: not associative due to rounding, exceptions for Inf/NaN.
- Examples: (3.14 + 1e10) - 1e10 = 0 vs. 3.14 + (1e10 - 1e10) = 3.14; compiler optimizations breaking associativity.
- C demos: Show non-associativity in floats, like (1e20 * 1e20) * 1e-20 vs. 1e20 * (1e20 * 1e-20).
- Tie to representations: Signed vs. unsigned integers, overflow implications.

### Article 4: Binary Arithmetic: Adding, Subtracting, and Beyond for Beginners
- **Level**: Beginner
- Step-by-step binary addition with carrying (e.g., 101 + 11), subtraction using borrowing.
- Multiplication and division in binary, with examples and relation to decimal operations.
- Overflow basics in fixed-width binary; introduce concepts like shifting for powers of 2.
- Simple exercises: convert and compute small numbers to build intuition.
- C examples: Implement binary addition using loops and arrays in C, show integer overflow behavior with int types.

### Article 5: Binary Representations and Conversions: Hands-On with C
- **Level**: Beginner
- Decimal to binary: Integers (iterative divide by 2), fractions (multiply by 2, handle repeating like 0.1).
- Finite vs. infinite representations (powers of 2 in denominator).
- C code: Implement conversions, show 13510 = 100001112, 0.687510 = 0.10112.
- Pitfalls: Inexact decimals (0.8 as repeating), rounding in conversions.
- Fun: Count to 1000 on two hands (binary finger counting).

### Article 6: Advanced Bitwise Operations and Hacks in C
- **Level**: Intermediate
- Boolean algebra history: Leibniz, Boole, Shannon.
- Hacks: Lowercase/uppercase toggle without branches ('a' | ' '), XOR swap for memory efficiency.
- Average without overflow: (x & y) + ((x ^ y) >> 1).
- Detect null chars: DETECT macro for strlen optimization.
- Leading zeros (clz): De Bruijn, GCC __builtin_clz, binary search/byte-shift implementations.
- Bit reversal without loops: Swap masks for 32-bit.
- C code: Implement adders, log2 via clz, ffs (first set bit).

### Article 7: Cryptographic Applications of Bit Operations in C
- **Level**: Intermediate
- Caesar cipher: Modular shifts on letters.
- XOR for encryption: Black/white image pixels, uniform distribution proof (X XOR Y uniform if X is).
- Truth tables for n=2 XOR uniformity.
- C demos: Encrypt images with AND/OR/XOR, show noise effect; convert random distributions to uniform via XOR.

### Article 8: Representing Integers: Unsigned, Signed, and Their Trade-offs
- **Level**: Beginner
- Unsigned integers: straightforward positive representation, max range for N bits.
- Signed integers: one's complement vs. two's complement (focus on two's for modern systems), sign bit, negative numbers.
- Examples: 8-bit representations, arithmetic with signed numbers, overflow detection.
- Common pitfalls: mixing signed/unsigned in code, integer promotion in languages like C.
- C specifics: Use <stdint.h> for uint8_t/int8_t, demonstrate two's complement negation (~x + 1), and undefined behavior on signed overflow.

### Article 9: Integer Overflow Disasters: Real-World Cases and Prevention in C
- **Level**: Intermediate
- Famous cases: Boeing 787 power shutdown (248 days overflow), Ariane 5 crash (64-bit to 16-bit conversion), Patriot missile failure, Pentium FDIV, Year 2038, YouTube Gangnam Style, Diablo III auction house, etc.
- Cover CVE entries, bugs in OpenSSH, OpenSSL, Bitcoin, SSH CRC32, etc.
- C examples: Reproduce overflows like FreeBSD KSIZE copy_from_kernel (negative maxlen), XDR copy_elements (ele_cnt/ele_size overflow).
- Prevention: Use safe functions (e.g., checked_add in libs), detect with __builtin_add_overflow, handle in embedded/real-time systems.
- Discuss progress bars, Therac-25, Super Mario lives as overflow examples.

### Article 10: Handling Fractions: Binary Fractions and Fixed-Point Numbers
- **Level**: Beginner
- Binary fractions: converting decimals (e.g., 0.625 = 0.101_2), repeating fractions like 0.1 in binary.
- Fixed-point representation: Q formats (e.g., Q15.16), scaling factors, addition/subtraction/multiplication.
- Advantages: precision for financial apps, no rounding surprises; limitations: fixed range, manual scaling.
- Code examples: implementing fixed-point in Python or C for simple calculations.
- C focus: Implement Q-format arithmetic using integers (e.g., int32_t for Q16.16), show macros for scaling, and embedded use cases like DSP.

### Article 11: Why Fixed-Point Isn't Enough: Introducing Floating-Point Numbers
- **Level**: Beginner
- Limitations of fixed-point: poor for very large/small numbers, scientific notation analogy.
- High-level floating-point: sign, exponent, mantissa; dynamic range benefits.
- Historical context: pre-IEEE chaos in representations.
- Simple examples: representing 1.23e4 in basic float format.
- C intro: Basic float/double declarations, printf formatting for floats (%f, %e).

### Article 12: The Fascinating History of Floating-Point: From Origins to Modern Standards
- **Level**: Beginner
- Pre-IEEE: vendor-specific formats, portability issues.
- IEEE 754 birth (1985): William Kahan's Turing Award work, committee debates.
- Evolutions: 2008/2019 revisions (decimal FP, minNum/maxNum).
- Fun facts: why nearest-even rounding, Kahan's "paranoia" test program.
- C connection: How C89 standardized float/double, evolution in C11 with <fenv.h> updates.
- Kahan integration: Expanded coverage of Kahan's leadership in IEEE 754, including video insights from his talks (e.g., YouTube on creating the standard); reference his 1985 Byte Magazine on Paranoia.

### Article 13: The Floating-Point Journey: Density, Representation, and Early Hardware
- **Level**: Intermediate
- Uneven density: Precision decreases with magnitude (logarithmic spacing).
- Binary fractions: 0.15 inexact, 0.1 as 0.1000000015.
- Historical: Z1 (1938, first FP hardware), ENIAC (1946), Intel 8087 (1980, triggered IEEE).
- Pentium FDIV bug: Verification with divisions.
- Soviet Setun (1958, ternary machine).

### Article 14: IEEE 754 Essentials: Single and Double Precision Breakdown
- **Level**: Intermediate
- Core structure: 32-bit float (1 sign, 8 exp, 23 mantissa), 64-bit double (1/11/52).
- Biasing exponents, hidden leading bit in normalization.
- Converting numbers: step-by-step encoding/decoding (e.g., 3.14 in binary float).
- Tools: recommend online visualizers; basic code to unpack floats in Python (struct module).
- C examples: Use <stdint.h> and unions to bit-hack floats (e.g., union { float f; uint32_t i; } to extract bits), print hex representation with printf("%x").
- Kahan integration: Discuss Kahan's role as primary architect of IEEE 754-1985, with quotes from his 1981 paper "Why Do We Need a Floating-Point Standard?"

### Article 15: Normalization and Denormalization in IEEE 754
- **Level**: Intermediate
- Normalized form: leading 1 implied, max precision.
- Denormalized (subnormals): for gradual underflow, representing tiny numbers near zero.
- Trade-offs: reduced precision in subnormals, flush-to-zero modes.
- Examples: encoding smallest positive float, why denormals prevent abrupt underflow.
- C tie-in: Use fpclassify() from <math.h> to detect subnormals (FP_SUBNORMAL), demonstrate with DBL_MIN and smaller values.
- Kahan integration: Cover Kahan's advocacy for denormals in IEEE 754 design to handle gradual underflow gracefully.

### Article 16: Special Values in IEEE 754: Infinity, NaN, and Signed Zero
- **Level**: Intermediate
- Infinities: +∞/-∞ from overflow or division by zero.
- NaN: quiet vs. signaling, propagation in operations, payloads for debugging.
- Signed zeros: +0/-0, behaviors in comparisons and operations (e.g., 1/+0 = +∞, 1/-0 = -∞).
- Edge cases: 0/0 = NaN, sqrt(-1) = NaN; code demos in C++ or Java.
- C cool stuff: Generate specials like double inf = 1.0/0.0; double neg_inf = -1.0/0.0; double nan = 0.0/0.0; use isinf(), isnan(), signbit() from <math.h>; show printf behaviors (e.g., "-inf" for neg_inf).
- Kahan integration: Explore Kahan's paper on positive and negative zero, explaining their mathematical and computational necessity.

### Article 17: IEEE 754 Deep Dive: Formats, Rounding, and Exceptions in Practice
- **Level**: Intermediate
- Binary32/64 breakdowns, biased exponents.
- Rounding modes table (+11.5/+12.5 examples).
- Denormals: Gradual underflow vs. abrupt (DEC vs. Intel debate).
- Specials: Inf, NaN (quiet/signaling), signed zero.
- Exceptions: Invalid, div-zero, overflow/underflow, inexact; traps in C.
- C code: Manual NaN creation via unions, acos domain errors.

### Article 18: Rounding Modes and Precision: The Heart of Floating-Point Accuracy
- **Level**: Intermediate
- IEEE rounding modes: nearest-even (default), toward zero/positive/negative.
- Precision concepts: machine epsilon, ulps (units in last place), relative/absolute error.
- Guard, round, sticky bits: how hardware rounds during operations.
- Examples: why 0.1 can't be exact in binary, rounding in addition.
- C examples: Use fesetround() from <fenv.h> to change modes (e.g., FE_TONEAREST, FE_TOWARDZERO), demonstrate rounding differences in loops.
- Kahan integration: Discuss Kahan's fun facts on why nearest-even rounding was chosen, from his interviews and papers.

### Article 19: Rounding Error in Goldberg: Formats and Measures
- **Level**: Intermediate
- FP formats: Base β, precision p, significand, exponents.
- Relative error/ulps: Definitions, machine epsilon, wobble factor (β).
- Examples: 1/2 ulp error varying by β, contaminated digits log_β n.
- C code: Compute ulps, relative errors for operations.

### Article 20: Guard Digits and Cancellation in Goldberg
- **Level**: Intermediate
- Guard digits: Reduce subtraction errors (Theorem 1/2: relative error <2ε with guard).
- Cancellation: Catastrophic (rounding-exposed) vs. benign (exact quantities).
- Examples: Quadratic formula rewrite, triangle area formula.
- Proofs: Theorems on relative errors in subtractions.

### Article 21: Exactly Rounded Operations per Goldberg
- **Level**: Advanced
- Definition: Compute exactly then round (vs. guard only).
- Applications: Multiple precision, double-rounding issues.
- Theorems: Dekker splitting for exact products/sums.
- C implementations: Simulate exact rounding for multiplies.

### Article 22: Precision vs. Accuracy in Floating-Point: Myths and Realities
- **Level**: Beginner
- Define precision (digits) vs. accuracy (closeness to truth): Examples with pi approximations.
- C code: floor(2.999999) = 2, floor(2.9999999) = 3 due to storage.
- Issues: Input inexactness (irrational numbers), storage limits (mantissa/exponent), base conversions (0.1 repeating).
- Overflow/underflow: Descriptions, floating-point exceptions.
- Cross-platform: x87 vs. SSE2 differences, compiler flags like -mfpmath=sse2.

### Article 23: Common Pitfalls: Rounding Errors and Catastrophic Cancellation
- **Level**: Intermediate
- Rounding in arithmetic: accumulation in sums, why 0.1 + 0.2 != 0.3.
- Cancellation: subtracting close numbers loses significant digits.
- Associativity failures: (a + b) + c != a + (b + c) due to rounding.
- Mitigation: sorting sums, using higher precision temporarily.
- C focus: Code to show 0.1 + 0.2 with printf("%.20f"), implement Kahan summation in C for accurate loops.
- Kahan integration: Deep dive into Kahan's summation algorithm, with proofs and C implementations; reference his paper "How Futile are Mindless Assessments of Roundoff in Floating-Point Computation."

### Article 24: Catastrophic Cancellation and Conditioning Problems in FP
- **Level**: Intermediate
- Examples: Subtracting close numbers (a - b promotion of garbage).
- Carrots planting: Cumulative errors in loops, Kahan vs. naive sum.
- Bad conditioning: Small input changes cause big outputs (e.g., rounding dots).
- Vector angles: Normalization leading to >1 dot product.
- C code: Dot/normalize/angle functions, show errors.

### Article 25: Overflow, Underflow, and Exceptions in Floating-Point
- **Level**: Intermediate
- Overflow: to ±∞, signaling options.
- Underflow: to subnormals or zero, loss of precision.
- Exception handling: IEEE flags (inexact, division by zero, invalid), masked vs. trapped.
- Code: checking flags in C (fenv.h), Python's decimal for comparison.
- C specifics: Use fegetexceptflag() and feraiseexcept() to handle flags, demonstrate overflow with huge values like DBL_MAX * 2.
- Kahan integration: Cover Kahan's designs for exception handling in IEEE 754, from his Turing Award lecture and related papers.

### Article 26: Error Propagation and Cumulative Errors: Loops and Long Computations
- **Level**: Advanced
- How errors build in iterative algorithms (e.g., numerical integration).
- Compensated summation (Kahan algorithm) for accurate sums.
- Significance error: tracking lost digits in chains of operations.
- Case studies: unstable algorithms like quadratic formula naive vs. stable form.
- C examples: Implement Simpson's rule integration with error analysis, use long double for higher precision.
- Kahan integration: Expand on Kahan's work in error minimization, referencing his manuscript "Rational Arithmetic in Floating-Point" (1986).

### Article 27: Errors in Summation: Detailed Analysis
- **Level**: Advanced
- Goldberg: Naive sum error: O(nε) relative.
- Kahan: O(ε) relative + O(nε^2) absolute.
- Proof: Kahan formula bounds.
- C: Large sums benchmarks.

### Article 28: Floating-Point Arithmetic: Step-by-Step Under the Hood
- **Level**: Intermediate
- Addition: alignment, addition, normalization, rounding.
- Multiplication/division: mantissa ops, exponent add/subtract.
- Square roots and transcendentals: approximation methods (e.g., Newton-Raphson).
- Fused multiply-add (FMA): exact a*b + c, benefits in dot products.
- C examples: Use fma() from <math.h> for FMA, implement manual addition with bit manipulation.
- Kahan integration: Discuss Kahan's contributions to transcendental functions, from his HP calculator papers like "Personal Calculator Has Key to Solve Any Equation f(x) = 0" (1979) and "Handheld Calculator Evaluates Integrals" (1980).

### Article 29: Remedies for FP Pitfalls: Higher Precision, Fixed-Point, and Rationals
- **Level**: Intermediate
- Higher precision: Selective use (long double), memory trade-offs.
- Fixed-point: Integer scaling (e.g., 0.01 feet units), fix carrots example.
- Rationals: Fractions in libraries (GMP), Clojure examples.
- Arbitrary precision: BigDecimal, MPFR in C.
- Adapt algorithms: Alternate quadratic formula.

### Article 30: Advanced Topics: Decimal Floating-Point and Arbitrary Precision
- **Level**: Advanced
- IEEE 754 decimal: base-10 for finance (no 0.1 issues), formats like decimal64.
- Libraries: Python Decimal, Java BigDecimal, GMP/mpfr for arbitrary precision.
- When to use: exact decimals in money, high-precision simulations.
- Performance costs: slower than binary FP.
- C specifics: Use mpfr library for arbitrary FP, demonstrate decimal in C with _Decimal64 (GCC).
- Kahan integration: Cover Kahan's "Decimal versus Binary Floating-Point Arithmetic" (1986 manuscript).

### Article 31: Binary-to-Decimal Conversion: Proofs and Pitfalls
- **Level**: Advanced
- Digits needed: 9 for single, 17 for double to round-trip.
- Proof: Spacing ensures unique rounding.
- Flags: Use inexact for double-rounding avoidance.
- C: Implement, show 8 vs. 9 digits failures.

### Article 32: Binary-to-Decimal Conversion Details
- **Level**: Advanced
- Goldberg: Digits for round-trip.
- Proof: Spacing ensures unique rounding.
- Flags: Use inexact for double-rounding avoidance.
- C: Implement conversions, show failures with 8 digits.

### Article 33: Safe Floating-Point Practices: Comparisons and Best Coding Tips
- **Level**: Intermediate
- Avoiding exact equality: use epsilon or relative tolerances (e.g., fabs(a - b) < eps * max(fabs(a), fabs(b))).
- Testing: unit tests for FP code, considering platform differences.
- Language specifics: Python's float vs. Decimal, C's float/double/long double.
- Debugging: printing full precision, using hex floats.
- C cool tips: Use nextafter() from <math.h> for ulps-based comparisons, hex floats in scanf/printf (e.g., "%a").
- Kahan integration: Include Kahan's advice on education for FP issues, from his advocacy papers.

### Article 34: Floating-Point Traps and Considerations in C Programming
- **Level**: Intermediate
- Input/storage inexactness: Irrational/decimals, memory limits, base conversions.
- Overflow/underflow: Exponent range issues, exceptions.
- Math laws failure: Associativity in FP.
- Cross-device: PC/phone/CPU/GPU/DSP differences, quantization.
- C focus: Verify with lookup tables, handle x87/SSE inconsistencies.

### Article 35: Floating-Point Challenges in Hardware and Software Ecosystems
- **Level**: Advanced
- CPU variations: x87 (80-bit) vs. SSE2 (IEEE compliant), Arm VFP/NEON inconsistencies.
- GPU: NVIDIA CUDA compliance evolution, OpenCL built-ins.
- DSP: Fixed-point quantization for no-FPU hardware (e.g., Hexagon HVX).
- Remedies: Lookup tables, frame-based parameters for consistency.
- C focus: sse2neon for porting, libmath differences.

### Article 36: Reproducible Floating-Point: Cross-Platform Consistency Challenges
- **Level**: Advanced
- Sources of non-reproducibility: FPU modes, compiler optimizations, hardware differences (x87 vs. SSE).
- Techniques: strict IEEE compliance flags (-frounding-math, -msse2), using software FP libraries.
- In C: Enforce rounding with <fenv.h>, seed-based stochastic rounding, tools like Verificarlo for error injection.
- Expert: Parallel FP issues in MPI/OpenMP, bit-identical reductions.
- Kahan integration: Draw from Kahan's critiques in "How Java's Floating-Point Hurts Everyone Everywhere" (1998) and similar language-specific papers.

### Article 37: Determinism and Synchronization in Floating-Point Systems
- **Level**: Advanced
- Non-determinism sources: Hardware/OS/compiler differences, multithreading.
- Game examples: Anarchy Online (fixed-point rewrite), Cossacks sync issues.
- Compiler variances: Intel vs. GCC matrix outputs.
- Remedies: Strict modes, software FP.

### Article 38: Hardware Acceleration: The Floating-Point Unit (FPU) and SIMD
- **Level**: Advanced
- FPU history: coprocessors like Intel 8087.
- Modern FPUs: pipelining, denormal handling performance hits.
- SIMD extensions: SSE/AVX for vectorized floats (e.g., 4 doubles at once).
- Performance tips: alignment, avoiding denormals (DAZ/FTZ flags).
- C focus: Use intrinsics like _mm_add_pd from <immintrin.h> for SSE/AVX, benchmark loops with denormals.
- Kahan integration: Cover Kahan's work on Intel 8087 and early FPUs, from interviews.

### Article 39: Assembly and Floating-Point Instructions: x87, SSE, and AVX Deep Dive
- **Level**: Advanced
- x87 FPU basics: stack-based ops (fld, fadd, fstp), legacy floating-point on x86, handling extended precision (80-bit).
- SSE instructions: scalar (addss, mulss) and packed (addps, mulps) for floats, intrinsics in C (_mm_add_ss).
- AVX/AVX2/AVX-512: wider vectors (256/512-bit), fused ops (vfmadd), masked operations for conditionals.
- Inline assembly in C: using __asm__ for custom FP sequences, clobber lists, AT&T vs. Intel syntax.
- Advanced: Pipeline stalls from denormals, branchless FP with cmppd/maskmov, performance counters with perf; examples in matrix inversion or FFT.
- Kahan integration: Assembly insights from Kahan's work on HP calculators and early FPUs.

### Article 40: Floating-Point Optimization in C: Performance Hacks for Seasoned Devs
- **Level**: Advanced
- Compiler flags: -O3, -ffinite-math-only, -fassociative-math risks/rewards.
- Inline assembly for FPU instructions (e.g., fld, fmul on x87).
- Vectorization: manual SSE with _mm_ intrinsics, auto-vectorization tips.
- Benchmarks: timing denormal flushes, FMA usage in matrix multiplies.
- Hard: Strict aliasing with floats, undefined behavior in FP reordering.
- Kahan integration: Warnings from Kahan on optimization pitfalls, from "How Futile are Mindless Assessments..."

### Article 41: C Floating-Point Bit Hacks: Clever Manipulations and Optimizations
- **Level**: Advanced
- Union-based type punning: safely accessing bit patterns of floats/doubles without undefined behavior (use memcpy for portability).
- Fast inverse square root: the famous Quake III hack (0x5f3759df magic number), how it works with Newton's method approximation.
- Setting custom NaN payloads: injecting debug info into quiet/signaling NaNs for error tracking.
- Bit-level tricks: flipping sign bit (XOR with 0x80000000), extracting exponent/mantissa manually, approximating log/exp with bit shifts.
- C examples: Implement fast math functions like absf via bit mask, compare with standard fabs(); discuss aliasing rules and -fstrict-aliasing.
- Kahan integration: Bit hacks for logarithms, inspired by Kahan's "A Logarithm Too Clever by Half."

### Article 42: Cool Floating-Point Tricks in C: Infinities, NaNs, and Environment Control
- **Level**: Intermediate
- Generate and handle specials: -1.0/0.0 for -inf, NAN macro, copysign() for signed zeros.
- Environment tweaks: fesetenv() for modes, feholdexcept() for non-stop exceptions.
- Bit hacks: unions for mantissa payloads in signaling NaNs, frexp() for decomposition.
- Fun demos: Infinite loops with inf, NaN propagation in arrays, performance with -ffast-math flag.
- Kahan integration: Tricks inspired by Kahan's critiques, e.g., handling signed zeros as per his paper.

### Article 43: Implementing Your Own Floating-Point Library: Reinventing <math.h>
- **Level**: Advanced
- Bit-level ops: extracting sign/exp/mantissa in C.
- Basic add/multiply: handling normalization, rounding, specials.
- Advanced: implement sin/cos using Taylor series with error bounds.
- Challenges: ensuring IEEE compliance, testing against hardware.
- C focus: Full implementation in C, use frexp()/ldexp() for reference, handle NaN payloads.
- Kahan integration: Incorporate Kahan's "Paranoia" program as a testing tool; implement and run it in C to verify custom library.

### Article 44: Mastering Kahan's Paranoia: The Ultimate FP Benchmark
- **Level**: Advanced
- History and purpose: Testing FP bugs in the 1980s.
- Implement in C: Full code walkthrough, running on modern systems.
- Interpret results: Common failures, fixes.
- Extensions: Adapting for new formats like bf16.

### Article 45: Floating-Point in Embedded Systems: Constraints and Workarounds
- **Level**: Advanced
- Soft-float vs. hard-float: ARM/embedded without FPU, using fixed-point alternatives.
- Power/precision trade-offs: half-precision on microcontrollers, avoiding denormals for speed.
- C specifics: Compiler options like -mfloat-abi=soft, implementing FP ops in assembly for bare-metal.
- Case studies: FP in IoT sensors, real-time control systems with error tolerance.
- Kahan integration: Reference Kahan's HP calculator work for embedded precision.

### Article 46: Kahan's HP Calculator Contributions: Precision in Pocket Devices
- **Level**: Intermediate
- Papers: "Personal Calculator Has Key to Solve Any Equation" (1979), "Handheld Calculator Evaluates Integrals" (1980).
- Enhancements to HP-35/HP Voyager: transcendental accuracy.
- C emulations: Simulate calculator FP in embedded C.
- Legacy: Influence on modern mobile computing.

### Article 47: Why Linux (and Others) Prefer Doubles: Precision vs. Performance Trade-offs
- **Level**: Intermediate
- Float vs. double: when single precision suffices (graphics, ML inference).
- OS/language defaults: Linux kernel avoids floats for precision in calculations.
- Benchmarking: speed differences, cache effects.
- Exotic: half-precision (fp16) in hardware.
- C examples: Compile with -march=native for FPU opts, use __float128 for quadruple precision (GCC extension).
- Kahan integration: Reference Kahan's critiques of language implementations, like in "Matlab's Loss is Nobody's Gain" (2004).

### Article 48: Modern Floating-Point Variants: bf16, tf32, and Beyond
- **Level**: Advanced
- bfloat16 (bf16): wide exponent for ML range, reduced mantissa.
- TensorFloat-32 (tf32): NVIDIA's internal format for faster training.
- Other formats: fp8 for ultra-low precision AI, posit/unum alternatives to IEEE.
- Use cases: deep learning (reduced memory, speed), trade-offs in accuracy.
- C tie-in: Use GCC's __bf16 type, demonstrate conversions and ops.
- Kahan integration: Contrast with Kahan's IEEE 754 revisions (2008/2019), including decimal FP.

### Article 49: Posits and Unums: Next-Gen Alternatives to IEEE 754
- **Level**: Advanced
- Posit format: dynamic bit allocation for better range/precision, no subnormals.
- Unum types (I/II/III): variable precision, exact error tracking.
- Comparisons: advantages over floats in accuracy/efficiency, drawbacks in hardware support.
- C implementations: Libraries like Universal for posits, emulate operations.
- Kahan integration: Discuss Kahan's views on alternatives, from interviews.

### Article 50: Quantum and Emerging Computing: Floating-Point in Non-Classical Systems
- **Level**: Expert
- FP in quantum: approximating reals on qubits, error-corrected FP ops.
- Neuromorphic/analog computing: imprecise FP analogs for energy efficiency.
- Future: hybrid quantum-classical FP for simulations.
- C tie-ins: Simulating quantum FP with libraries like QuTiP (but focus on concepts).
- Kahan integration: Speculate on how Kahan's error principles apply to quantum numerics.

### Article 51: Floating-Point in Specialized Domains: Graphics, ML, and Scientific Computing
- **Level**: Advanced
- Graphics: FP in shaders, z-buffers, texture filtering errors.
- Machine learning: quantization, mixed precision training (fp16 + fp32 accum).
- Scientific: chaos in simulations (butterfly effect from rounding), reproducible FP.
- Hard: interval arithmetic for bounding errors, rigorous numerics.
- C focus: OpenGL FP in C, CUDA for ML mixed precision.
- Kahan integration: Reference Kahan's work on norm-preserving dilations (Davis-Kahan-Weinberger theorem, 1982) for scientific error bounds.

### Article 52: The Davis-Kahan-Weinberger Dilation Theorem: Theoretical Foundations
- **Level**: Expert
- Theorem details: norm-preserving dilations in Hilbert spaces.
- Applications: error bounds in numerics, operator theory.
- C examples: Numerical implementations for matrices.
- Connection to FP: Stability in floating-point ops.

### Article 53: Interval Arithmetic and Error Bounding: Rigorous Floating-Point Computations
- **Level**: Expert
- Basics of interval arithmetic: representing ranges [low, high] to bound errors, operations that preserve bounds.
- Implementing in C: custom structs for intervals, handling directed rounding (fesetround for up/down).
- Applications: verified numerics in safety-critical systems (e.g., aviation), solving equations with guaranteed accuracy.
- Hard topics: affine arithmetic extensions, Taylor models for higher-order error control.
- C examples: Use MPFI library or roll-your-own for interval sin(x), compare with naive FP.
- Kahan integration: Link to Kahan's dilation theorem for error bounds in operators.

### Article 54: Really Hard Stuff: Formal Verification and Exotic Floating-Point
- **Level**: Expert
- Verifying FP code: tools like Frama-C, why FP makes proofs tricky (non-associativity).
- Exotic architectures: FP in GPUs (warps, reduced precision), quantum computing (no native FP yet).
- Advanced errors: absorption, sterile operations, exact dot products.
- Research: stochastic rounding, adaptive precision algorithms.
- C examples: Use Frama-C annotations for FP contracts, GPU intrinsics.
- Kahan integration: Discuss Kahan's theoretical contributions, like dilation theorem applications in verification.

### Article 55: Stochastic and Alternative Rounding: Beyond IEEE Defaults
- **Level**: Expert
- Stochastic rounding: random tie-breaking for reduced bias in ML/training.
- Implementing in C: custom round functions with rand(), compare error accumulation.
- Alternatives: faithful rounding, jam rounding; research on error-minimizing modes.
- Expert: Applications in low-precision AI, simulations with controlled noise.
- Kahan integration: Contrast with Kahan's standard rounding advocacy.

### Article 56: Kahan's "A Logarithm Too Clever by Half": The Table-Maker's Dilemma
- **Level**: Advanced
- Explain the dilemma: cost of correctly rounding transcendentals.
- Breakdown of the paper: logarithmic computation issues.
- C implementations: Test logarithmic hacks, compare accuracy.
- Applications: Improving math libraries for exact rounding.

### Article 57: Lessons from Kahan's "How Java's Floating-Point Hurts Everyone Everywhere"
- **Level**: Advanced
- Critique of Java's FP: strict vs. lenient modes, impacts on devs.
- Key examples: portability issues, error propagation.
- C comparisons: How C avoids or replicates these pitfalls.
- Modern relevance: FP in JVM languages today.

### Article 58: Analyzing Kahan's "Matlab's Loss is Nobody's Gain"
- **Level**: Advanced
- Issues with Matlab FP: matrix ops, epsilon handling.
- Paper breakdown: multiplication errors, alternatives.
- C equivalents: Implement matrix multiplies, benchmark precision.
- Broader lessons: Language design for numerics.

### Article 59: Kahan's Critiques of Modern Systems: From Java to AI
- **Level**: Advanced
- Aggregate papers: Java, Matlab, general FP hurts.
- AI implications: Low-precision issues in ML.
- C defenses: Building robust FP in C against these critiques.
- Future: Kahan's influence on next-gen standards.

### Article 60: Insights from Kahan's Interviews: Career and FP Wisdom
- **Level**: Intermediate
- Summarize key interviews (e.g., 2016 SIAM, IEEE 754 creation).
- Themes: Standard development, bug advocacy.
- C tie-ins: Applying interview advice to C code.
- Fun facts: Kahan as "curmudgeon" in FP debates.

### Article 61: Exploring Kahan's Bibliography: Rare Manuscripts and Papers
- **Level**: Advanced
- Cover lesser-known works: "Decimal vs. Binary FP" (1986), others from Netlib bib.
- Themes: Rational arithmetic, roundoff assessments.
- C projects: Code experiments based on each paper.
- Comprehensive review: How they shaped FP standards.

### Article 62: Introduction to Goldberg's FP Essentials
- **Level**: Intermediate
- Overview: Tutorial for systems builders on FP implications, background on representation/rounding.
- Myths: FP as esoteric; ubiquity in languages/hardware.
- Structure: Rounding error, IEEE standard, systems aspects, details.

### Article 63: IEEE Standard Overview in Goldberg
- **Level**: Intermediate
- Scope: Formats, operations (add/sub/mult/div/sqrt/remainder/compare), conversions, exceptions.
- Motivations: Portability, precise semantics for proofs.
- History: Kahan's influence, guard digits importance.

### Article 64: IEEE Formats and Operations Detailed
- **Level**: Intermediate
- Binary formats: Single/double/extended, biased exponents, hidden bit.
- Precision: Digits10 for decimals (6 for single, 15 for double).
- Operations: Exactly rounded basic ops, square root/remainder.
- C code: Bit layouts, conversions.

### Article 65: Special Quantities: NaNs and Infinities Explained
- **Level**: Intermediate
- NaNs: For undefined (0/0, sqrt(-1)), propagation, quiet vs. signaling.
- Infinities: Overflow/division by zero, continuation (e.g., x/(x^2+1) at inf).
- Signed zero: Preserves identities like 1/(1/x)=x.
- Examples: Zero finder continuing past domain errors.

### Article 66: Exceptions and Handling in IEEE
- **Level**: Intermediate
- Types: Invalid, div-zero, overflow/underflow, inexact.
- Defaults: Deliver results (NaN/inf), set flags.
- Traps: Handlers for custom results.
- C: Use fenv.h for flags/modes.

### Article 67: Systems Aspects: Instruction Sets and Optimizations
- **Level**: Advanced
- Instructions: Double-from-single multiply useful (quadratic, iterative improvement).
- Examples: Linear systems solving with double accum.
- Optimizers: Preserve parentheses, avoid algebra on FP (associativity fails).

### Article 68: Languages and Compilers: FP Semantics
- **Level**: Advanced
- Ambiguities: Subexpression precision, parentheses honoring, constants.
- Rules: Evaluate in highest operand precision, avoid double-rounding.
- Examples: BASIC 3.0/7.0 inequality due to optimization.

### Article 69: Exception Handling in Systems
- **Level**: Advanced
- Traps vs. presubstitution (Kahan proposal).
- Pipelining issues: Identify trapping op in parallel exec.
- C: Save/restore flags, avoid overwrites in parallels.

### Article 70: Details: Advanced Rounding Error Analysis
- **Level**: Expert
- Theorems: Relative errors in ops, multiple ops bounds.
- Examples: x^2 - y^2 vs. (x+y)(x-y), proofs.
- C code: Demonstrate errors, mitigations.

### Article 71: Binary-to-Decimal Conversions: Proofs and Pitfalls
- **Level**: Advanced
- Digits needed: 9 for single, 17 for double to round-trip.
- Proof: Spacing ensures unique rounding.
- Flags: Use inexact for double-rounding avoidance.
- C: Implement, show 8 vs. 9 digits failures.

### Article 72: Errors in Summation: Kahan Formula Proof
- **Level**: Expert
- Naive sum error: O(nε) relative.
- Kahan: O(ε) relative + O(nε^2) absolute.
- Proof: Coefficients analysis, induction.
- C: Large sums benchmarks.

### Article 73: Summary of Goldberg's Key Lessons
- **Level**: Intermediate
- FP quantifiable, not black magic.
- IEEE enables proofs, portability.
- Guard digits, exact rounding crucial.
- Systems: Support for precision, exceptions.

### Article 74: Real-World Floating-Point Disasters: Bugs That Shook the World
- **Level**: Intermediate
- Pentium FDIV bug (1994): flawed division table, Intel's $475M recall.
- Ariane 5 explosion (1996): integer overflow in FP conversion.
- Patriot missile failure (1991): time accumulation error.
- Modern: Excel FP quirks, ML model drifts from precision loss.
- C examples: Reproduce Patriot bug in C code with time loops.
- Kahan integration: Discuss Kahan's analyses of such bugs, from his papers and interviews.

### Article 75: Survey Design for Assessing Developer FP Knowledge
- **Level**: Intermediate
- Outline anonymous survey structure: Background, core quiz (T/F on FP properties), optimization quiz, suspicion quiz.
- Requirements: Anonymity, low time (under 30 min), approximate practice, avoid prompting/anchoring, factor identification.
- Testing: Pilot on 20 participants, revisions for clarity.
- C tie-in: Use survey-inspired code snippets for quizzes in C syntax.

### Article 76: Background Factors in FP Understanding Surveys
- **Level**: Intermediate
- Capture self-reported info: Position (Ph.D. student, faculty, engineer), area (CS, EE, sciences), formal/informal training.
- Development experience: Role (developer vs. manager), languages used (Python, C, Matlab common), codebase sizes (up to >1M lines).
- FP extent: Intrinsic/incidental in codebases, numeric correctness focus.
- Analysis: Larger codebases correlate with better understanding, but not strongly.

### Article 77: Core FP Quiz: Testing Developer Grasp of Basics
- **Level**: Intermediate
- Questions on commutativity, associativity, distributivity, ordering, identity, negative zero, square positivity, overflow behavior.
- Results: Developers score 8.5/15 (slightly above chance 7.5), high confidence despite errors.
- Misunderstandings: Associativity (69% correct but not stellar), overflow as modular (half confuse with integers), exception signaling.
- C examples: Reproduce quiz snippets, show non-associativity.

### Article 78: Optimization Quiz: Developer Awareness of Non-Standard Behavior
- **Level**: Intermediate
- Questions on fused multiply-add (MADD), flush-to-zero (FTZ/DAZ), optimization levels (-O2 vs. -O3), -ffast-math.
- Results: Mostly "Don't Know" (over 2/3), <10% know standard-compliant levels.
- Implications: Wariness of optimizations, potential avoidance or misuse.
- C focus: Demonstrate flags like -ffast-math changing results.

### Article 79: Factor Analysis: What Influences FP Understanding?
- **Level**: Intermediate
- Strongest: Codebase size (larger = better, up to 11/15 for 1M+ lines).
- Area: EE/CS/CE better (11/15), physical sciences/engineering at chance.
- Role: Software engineers slightly better than supporters.
- Training: Formal has small effect (1-2/15 gain), informal minimal beyond basics.
- No strong factor: Arbitrary precision experience ambiguous.

### Article 80: Suspicion Levels: Developer Wariness of Exceptions
- **Level**: Intermediate
- Quiz: Likert scale (1-5) on suspicion for overflow, underflow, precision loss, invalid (NaN), denormal.
- Results: High for invalid/overflow, lower for underflow/denorm/precision; 1/3 not maximally suspicious of NaN.
- Student comparison: Similar, less suspicious of underflow/denorm (fresh training).
- C demos: Simulate exceptions, check flags to build suspicion tools.

### Article 81: Conclusions from Developer FP Surveys: Observations and Actions
- **Level**: Intermediate
- Overconfidence in basics, wariness in optimizations; hidden numeric issues likely.
- Actions: Raise awareness (like undefined behavior in C), develop effective training, tools for suspicious code (e.g., runtime monitors).
- Blend precision boundaries (FP to arbitrary), assess optimization use.
- C focus: Build paranoia-like benchmarks for modern codebases.

### Article 82: Integrating Surveys and Classics: Developer Misconceptions Revisited
- **Level**: Advanced
- Combine Dinda survey with Goldberg: Low quiz scores align with rounding pitfalls.
- Overconfidence in basics, ignorance in opts mirrors need for education.
- C focus: Build survey quizzes as code tests.

### Article 83: FP in Modern Contexts: AI and Low-Precision
- **Level**: Advanced
- Survey AI implications: Low-precision errors in ML (from Kahan critiques).
- Goldberg on precision trade-offs.
- C: Mixed-precision examples in torch/networkx.

### Article 84: Proving FP Algorithms: From Theorems to Code
- **Level**: Expert
- Use Goldberg proofs (e.g., guard digits) in C verifications.
- Survey factors: Training effects on proof understanding.
- Examples: Quadratic, summation proofs implemented.

### Article 85: Historical Context: From Z1 to IEEE Debates
- **Level**: Intermediate
- Goldberg history: Z1, 8087, Kahan interview.
- Survey recruitment: Academia/labs/industry parallels historical adoption.

### Article 86: Exception Suspicion: Aligning Survey with Goldberg
- **Level**: Intermediate
- Survey: Low suspicion for inexact/underflow.
- Goldberg: Inexact common, but signals useful.
- C: Custom handlers for suspicion logging.

### Article 87: Optimization Risks: Survey Data Meets Goldberg Systems
- **Level**: Advanced
- Survey: Low opt knowledge.
- Goldberg: Opts violating algebra (associativity).
- C: Flags demos breaking semantics.

### Article 88: Guard Digits Proofs and Implementations
- **Level**: Expert
- Goldberg Theorem 1/2: Relative error bounds.
- C: Simulate add/sub with/without guards.

### Article 89: Cancellation Examples Expanded
- **Level**: Advanced
- Goldberg: Quadratic, triangle area.
- Survey tie: Misunderstandings lead to cancellations.
- C: Rewrite formulas, error measurements.

### Article 90: Special Values in Depth: NaNs and Infinities
- **Level**: Intermediate
- Goldberg: Uses in continuations (zero finder).
- Survey: Suspicion of invalid/overflow.
- C: Generate/test specials.

### Article 91: Rounding Modes: Theory and Practice
- **Level**: Intermediate
- Goldberg: Modes table, tie-to-even.
- Survey: Associativity failures from rounding.
- C: fesetround demos.

### Article 92: Binary-Decimal Conversions: Proofs and Pitfalls
- **Level**: Advanced
- Goldberg: Digits for round-trip.
- Proof: Spacing ensures unique rounding.
- Flags: Use inexact for double-rounding avoidance.
- C: Implement conversions, show failures with 8 digits.

### Article 93: Summation Errors: Detailed Analysis
- **Level**: Expert
- Goldberg: Naive vs. compensated.
- Proof: Kahan formula bounds.
- C: Large sums benchmarks.

### Article 94: Systems Implications: From Goldberg to Modern Hardware
- **Level**: Advanced
- Instruction sets: Double-from-single mult.
- Compilers: Avoid bad opts.
- C: Inline asm for custom precision.

### Article 95: Languages: Ambiguities and Fixes
- **Level**: Advanced
- Goldberg: Parentheses, subexpr eval.
- Survey: Background factors on lang experience.
- C: Type promotions, constants issues.

### Article 96: Exception Handling Strategies
- **Level**: Advanced
- Goldberg: Traps, flags.
- Survey: Low suspicion implies poor handling.
- C: fenv.h examples.

### Article 97: FP Arithmetic as Quantifiable: Goldberg's Legacy
- **Level**: Intermediate
- Dispel myths: Rigorous reasoning possible.
- Tie to survey: Need better education.

### Article 98: Comprehensive FP Bibliography and Resources
- **Level**: Beginner
- Goldberg summary, Kahan bib.
- Survey resources: Netlib, ARITH conf.
- C projects: Paranoia adaptations.

### Article 99: Becoming a Floating-Point Expert: Capstone Projects and Career Advice
- **Level**: Advanced
- Projects: build a software FPU emulator in C/assembly, verify a numerical library.
- Career paths: numerics in finance, HPC, AI; certifications like IEEE involvement.
- Resources: advanced papers (Kahan's works), conferences (ARITH), online challenges.
- Final recap: from binary bits to quantum, emphasizing testing and skepticism.
- Kahan integration: Capstone on emulating Kahan's Paranoia in modern contexts.

### Article 100: Conclusion: Balancing Speed, Range, and Precision in the Floating-Point World
- **Level**: Beginner
- Recap the journey: from hardware bits to advanced theories, Kahan's enduring legacy, and practical mastery.
- Key takeaways: Speed and range come at the cost of precision, but with awareness and tools like IEEE 754, we mitigate risks.
- Final thoughts: Encourage readers to apply knowledge in code, contribute to numerics, and stay skeptical of FP assumptions.
- Resources roundup: Full Kahan bibliography, further reading, and community forums.
- Inspirational close: Quote from Kahan on the "art of floating-point arithmetic."

### Article 101: Implementing an IEEE 754 FPU in RISC-V: From Spec to Silicon
- **Level**: Advanced
- Introduction to RISC-V FP extensions: Overview of the F (single-precision), D (double-precision), and Q (quad-precision) extensions in the RISC-V ISA, including instruction formats (e.g., fadd.s, fmul.d) and register file (f0-f31).
- IEEE 754 compliance basics: Ensuring support for normalized/denormalized numbers, hidden bit, biased exponents; handling special values (NaN, Inf, signed zero) with propagation rules.
- Core operations implementation: Step-by-step design for addition/subtraction (alignment, sticky bits, guard/round bits), multiplication (Booth/Wallace trees), division (restoring/non-restoring), and square root (Newton-Raphson or Goldschmidt).
- Rounding modes and precision: Hardware for nearest-even, toward-zero/up/down; multi-precision handling (e.g., single-to-double conversions) with exact rounding proofs from Goldberg.
- Exceptions and traps: Sticky flags for invalid, div-zero, overflow/underflow/inexact; CSR (Control/Status Registers) for mode setting (frm for rounding, fflags for exceptions); trap handler integration with mcause/mepc.
- Pipeline integration: Datapath design (ALU with FP unit), forwarding/bypassing for latency, denormal traps for software handling; power/area trade-offs in ASIC/FPGA.
- Verification and testing: Unit tests with Paranoia (Kahan's benchmark), formal verification (e.g., using Yosys for RTL), corner cases like catastrophic cancellation; simulation in Spike or QEMU.
  - **Expanded Paranoia Testing**: Paranoia is William Kahan's seminal FORTRAN diagnostic program (originally from 1985) designed to rigorously test a floating-point system's adherence to IEEE 754 semantics, including rounding accuracy, denormal handling, exception propagation, and transcendental function precision. It generates a "report card" (A-F grades) for the FP unit, flagging deviations like incorrect rounding ties or underflow flushes. For RISC-V FPU verification: (1) Port Paranoia to C with RISC-V assembly intrinsics (e.g., via GCC's __builtin_riscv_fadd_s for single-precision add), compiling for RV32F/RV64D targets; (2) Run on emulators like Spike (with --fpu flag) or hardware (e.g., SiFive boards), capturing CSR fflags/fflags after each test; (3) Key tests include: ulp-1 accuracy (e.g., 1 + ε == 1 checks), denormal gradual underflow (e.g., smallest positive float additions), NaN propagation (quiet/signaling payloads), and overflow saturation to Inf; (4) Interpret outputs: Expect "A" grades for compliant ops, debug "F" failures (e.g., sticky bit misfires) by tracing RTL waveforms in ModelSim; (5) Extensions: Adapt for RISC-V's optional Q extension or mixed-precision (e.g., test fmv.x.d for double-to-int); integrate into CI pipelines with RISCV-compliance suite for automated regression.
- C/RISC-V assembly tie-in: Inline asm examples for FP ops (e.g., fmv.s.x for float-to-int), benchmarking against host FPU; porting to RV32I/RV64I for embedded.