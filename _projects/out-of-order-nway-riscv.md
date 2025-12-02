---
layout: page
title: Out-of-Order N-Way Superscalar RISC-V Processor
description: High-performance out-of-order N-way superscalar RISC-V core
img: assets/img/out-of-order-nway.jpg
importance: 2
category: VLSI
related_publications: false
---

This project implements an out-of-order, N-way superscalar, R10K style RISC-V CPU. It includes features such as early branch resolution, load/store queue with store->load forwarding, associative victim caches, G-share branch prediction, and instruction prefetching.

This project was developed in SystemVerilog, simulated with VCS, and synthesized with Synopsys Design Compiler.

This project was completed as the final project for EECS 470: Computer Architecture at the University of Michigan in Winter 2025.

{% include figure.liquid path="assets/img/out-of-order-nway.jpg" title="Out-of-order core overview" class="img-fluid rounded" %}
