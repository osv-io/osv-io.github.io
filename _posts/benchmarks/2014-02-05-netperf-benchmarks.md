---
layout: nav
title: Netperf Benchmarks Feb 5, 2014
category: netperf
show_heading: yes
permalink: netperf-benchmark-2014-02-05
nav: learn
---

* Test Date: ***Feb 5, 2014***  
* OSv version: 0.05, commit 6e87ff7d5491590784cd74a2474f8e1b2e8eb2f1  
* Linux version: Fedora release 20 (Heisenbug), 3.12.5-302.fc20.x86_64  
* HW: two identical servers, one for the test (guest) OS, one to send/receive traffic 
* Each server: 8 x Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz, 16GB RAM

### Results

Test | TCP STREAM | TCP MAERTS | UDP STREAM | UDP Tx | TCP RR | UDP RR
-----|------------|------------|------------|--------|--------|-------
     | Mbps       | Mbps       | Mbps       | Mbps   | Tps    | Tps
OOTB Linux - 1cpu 	|	37,469	|	31,297	|	1,156	|	4,690	|	46,734	|	48,380
OOTB Linux - 4cpu	|	34,799	|	30,582	|	830	|	4,707	|	45,440	|	45,440
Linux Firewall disabled - 1cpu	|	36,530	|	30,497	|	879	|	4,745	|	47,888	|	47,888
Linux Firewall disabled - 4cpu	|	34,513	|	35,799	|	3,188	|	4,694	|	47,724	|	47,724
OSv - 1cpu	|	34,884	|	32,931	|	5,815	|	4,804	|	79,789	|	79,789
OSv - 4cpu	|	25,982	|	25,172	|	5,428	|	4,764	|	71,447	|	71,447
{:.benchmarkTable}

### Relative results 

Test | TCP STREAM | TCP MAERTS | UDP STREAM | UDP Tx | TCP RR | UDP RR
-----|------------|------------|------------|--------|--------|-------
OOTB Linux - 1cpu 	|	1.00	|	1.00	|	1.00	|	1.00	|	1.00	|	1.00
OOTB Linux - 4cpu	|	0.93	|	0.98	|	0.72	|	1.00	|	0.97	|	0.94
Linux Firewall disabled - 1cpu	|	0.97	|	0.97	|	0.76	|	1.01	|	1.02	|	0.99
Linux Firewall disabled - 4cpu	|	0.92	|	1.14	|	2.76	|	1.00	|	1.02	|	0.99
OSv - 1cpu	|	0.93	|	1.05	|	5.03	|	1.02	|	1.71	|	1.65
OSv - 4cpu	|	0.69	|	0.80	|	4.70	|	1.02	|	1.53	|	1.48
{:.benchmarkTable}

*using Out Of The Box Linux - 1cpu as 1.00*
