---
layout: nav
title: Netperf Benchmarks Feb 13, 2014
category: netperf
show_heading: yes
permalink: netperf-benchmark-2014-02-13
nav: learn
---

* Test Date: ***Feb 13, 2014***  
* OSv version: 0.05, commit 3cb967b4f497a6008b7f66f4c655a6d513f24655
* Linux version: Fedora release 20 (Heisenbug), 3.12.5-302.fc20.x86_64  
* HW: two identical servers, one for the test (guest) OS, one to send/receive traffic 
* Each server: 8 x Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz, 16GB RAM

### Results

Test | TCP STREAM | TCP MAERTS | UDP STREAM | UDP Tx | TCP RR | UDP RR
-----|------------|------------|------------|--------|--------|-------
     | Mbps       | Mbps       | Mbps       | Mbps   | Tps    | Tps
OOTB Linux - 1cpu	|	37,478	|	31,134	|	1,216	|	4,678	|	46,642	|	46,642
OOTB Linux - 4cpu	|	32,624	|	31,084	|	961	|	4,680	|	44,809	|	44,809
Linux Firewall disabled - 1cpu	|	37,253	|	31,527	|	1,401	|	4,700	|	46,338	|	46,338
Linux Firewall disabled - 4cpu	|	33,234	|	35,587	|	3,883	|	4,700	|	49,723	|	49,723
OSv - 1cpu	|	40,505	|	36,499	|	5,529	|	4,803	|	80,089	|	80,089
OSv - 4cpu	|	27,940	|	33,607	|	3,383	|	4,788	|	68,928	|	68,928
{:.benchmarkTable}

### Relative results 

Test | TCP STREAM | TCP MAERTS | UDP STREAM | UDP Tx | TCP RR | UDP RR
-----|------------|------------|------------|--------|--------|-------
OOTB Linux - 1cpu	|	1.00	|	1.00	|	1.00	|	1.00	|	1.00	|	1.00
OOTB Linux - 4cpu	|	0.87	|	1.00	|	0.79	|	1.00	|	0.96	|	0.96
Linux Firewall disabled - 1cpu	|	0.99	|	1.01	|	1.15	|	1.00	|	0.99	|	0.99
Linux Firewall disabled - 4cpu	|	0.89	|	1.14	|	3.19	|	1.00	|	1.07	|	1.07
OSv - 1cpu	|	1.08	|	1.17	|	4.55	|	1.03	|	1.72	|	1.72
OSv - 4cpu	|	0.75	|	1.08	|	2.78	|	1.02	|	1.48	|	1.48
{:.benchmarkTable}

*using Out Of The Box Linux - 1cpu as 1.00*
