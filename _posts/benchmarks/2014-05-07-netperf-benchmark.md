---
layout: nav
title: Netperf Benchmarks May 7, 2014
category: netperf
show_heading: yes
permalink: netperf-benchmark-2014-05-07
nav: learn
---

* Test Date: ***May 7, 2014***  
* OSv version: 0.08, commit f0cd44336ad0f8d8  
* Linux version: Fedora release 20 (Heisenbug), 3.12.5-302.fc20.x86_64  
* HW: two identical servers, one for the test (guest) OS, one to send/receive traffic 
* Each server: 8 x Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz, 16GB RAM

### Results

Test	| iperf 1s	|	iperf 4s | iperf 16s	| netperf STREAM|netperf MAERTS|netperf TCP RR	|netperf UDP RR
--------|---------------|----------------|--------------|---------------|--------------|----------------|-------------
	|	Gbps	|	Gbps	|	Gbps	|	Mbps	|	Mbps	|	T/s	|	
	|		|		|		|		|		|		|	
Linux Firewall disabled -  1vcpu	|	53.00	|	31.90	|	35.30	|	44,546	|	33,833	|	45,976	|	45,467
OSv 1vcpu	|	55.30	|	47.90	|	44.60	|	55,466	|	37,261	|	74,862	|	80,533
**OSv relative results**	|	**104%**	|	**150%**	|	**126%**	|	**125%**	|	**110%**	|	**163%**	|	**177%**
	|		|		|		|		|		|		|	
Linux Firewall disabled -  4vcpu	|	41.6	|	43.4	|	39.2	|	40,149	|	35,128	|	45,092	|	44,700
OSv 4vcpu	|	52.2	|	43.2	|	36.6	|	49,611	|	36,255	|	68,032	|	72,461
OSv relative results	|	**125%**	|**99%**	|**93%**	|	**123%**	|	**103%**	|	**151%**	|	**162%**
{:.benchmarkTable}
