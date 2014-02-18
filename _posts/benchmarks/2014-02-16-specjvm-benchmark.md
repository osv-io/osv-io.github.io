---
layout: nav
title: Spec JVM Benchmarks Feb 16, 2014
category: specjvm
show_heading: yes
permalink: spec-jvm-benchmark-2014-02-16
nav: learn
---

* Test Date: ***Feb 16, 2014***  
* OSv version: 0.05, commit a21e78cd382dc656d288a9de69ba3237ffc45003
* Linux version: Fedora release 20 (Heisenbug), 3.12.8-300.fc20.x86_64
* HW: 4x Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz

### Results

Test |  Fedora  |  OSv  |  Ratio
-----|----------|-------|--------
compiler.compiler |  	386	|	370	|	0.96
compiler.sunflow |	149	|	139	|	0.93
compress | 	104	|	107	|	1.03
crypto.aes | 	56	|	56.7	|	1.01
crypto.rsa | 	279	|	290	|	1.04
crypto.signverify | 	277	|	280	|	1.01
derby | 	176	|	181	|	1.03
mpegaudio | 	98.7	|	100	|	1.01
fft.large | 	31.5	|	36.8	|	1.17
lu.large | 	12	|	12	|	1.00
sor.large | 	27.1	|	27.5	|	1.01
sparse.large | 	28.1	|	29	|	1.03
fft.small | 	114	|	140	|	1.23
lu.small | 	249	|	219	|	0.88
sor.small | 	121	|	122	|	1.01
sparse.small | 	160	|	157	|	0.98
monte-carlo | 	150	|	159	|	1.06
serial | 	108	|	108	|	1.00
sunflow | 	55.8	|	53.8	|	0.96
xml.transform | 	245	|	249	|	1.02
xml.validation | 	468	|	477	|	1.02
{:.benchmarkTable}

### Analysts
Although OSv shines a IO intensive workload, it out performed Fedora in most tests.
