---
layout: page
title: KNN Accelerator
description: Bit-serial K-Nearest Neighbors accelerator
img: assets/img/KNN.png
importance: 3
category: VLSI
related_publications: false
---

This project extends the BitNN KNN algorithm by adding more aggressive thresholding and allowing approximations of the KNN set. The accelerator takes advantage that in LIDAR point clouds, nearby query points are likely to have similar KNN sets, and query points likely have similar Kth distances. Using these observations, the accelerator can prune reference points based on a running mean threshold of Kth distances. This allows for significant pruning of memory accesses.

This project was developed in SystemVerilog, simulated with VCS, and synthesized with Synopsys Design Compiler.

This project was completed as the final project for EECS 573: Microarchitecture at the University of Michigan in Fall 2025.

{% include figure.liquid path="assets/img/KNN.png" title="KNN Accelerator" class="img-fluid rounded" %}
