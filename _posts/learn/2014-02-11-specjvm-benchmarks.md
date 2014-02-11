---
layout: nav
title: Spec JVM Benchmarks
category: benchmarks
show_heading: yes
nav: learn
---

This document summarizes a few benchmarks which compare the performance of applications under an OS<sup>V</sup> guest to their performance under a Linux guest. Our intent is to demonstrate that OS<sup>V</sup>’s design not only holds great promise as the future OS for virtual machines, at this early stage OS<sup>V</sup> already runs various important workloads, and its performance matches, if not outperforms, Linux.

<!--more-->

## Summary of the results

To measure OS<sup>V</sup> performance on computation- and memory-oriented applications (which are not IO-intensive), we used the SPECjvm2008 benchmark. Our measurements (see details in the next section) indicate that OS<sup>V</sup> not only competes well with Linux’s Java performance, OS<sup>V</sup> outperforms Linux on average. We *didn't* expect to outperform on a cpu intesive workload. Such a young OS like ours shouldn't have beaten a mature one. We should shine *much* more on IO intesive workload such as NoSQL, or low latency ones. Note that we barely run optimizations at all..

To measure OS<sup>V</sup> performance on network-intensive applications, we used two applications. The first was Memcached, the familiar in-memory key-value store, set up to receive requests from the memaslap benchmark and reply via UDP. We ran memcached on a single-cpu guest. We did not modify memcached in any way (besides a necessary but straightforward recompilation for OS<sup>V</sup>), and yet the OS<sup>V</sup> guest significantly outperformed the Linux guest - serving 40% more requests per second (again, see the full details in the next section).



## The technical details



All benchmarks described here were run on a quad-core (with additional four hyperthreads) Intel Haswell i7-4770 host with 16GB of memory. The host ran 64-bit Linux 3.10.5 with the Fedora 19 distribution and the KVM hypervisor (as included in Linux 3.10.5) and Qemu 1.4.2.

In all benchmarks, the OS<sup>V</sup> guest was OS<sup>V</sup> as released on September 2013; The Linux guest was 64-bit Linux 3.9.9 with the Fedora 18 distribution. Both Linux and OS<sup>V</sup> guests were given 3GB of memory, and both ran the same version of Java (OpenJDK’s Java 1.7.0_25 as compiled in Fedora).
SPECjvm2008

The “SPECjvm2008” benchmark, version 1.01, is a free Java benchmark from http://www.spec.org/jvm2008/.  It aims to measure Java’s performance on a system, by running over 20 different computation- and memory-oriented (but not IO-oriented) applications, doing tasks like compilation, encryption, compression, numerical calculations, ray tracing, and more.



We ran all of SPECjvm2008’s sub-benchmarks except the “start.*” ones which measure process startup performance (as OS<sup>V</sup> does not support processes). We configured the benchmark to use two benchmark threads, and gave it a virtual machine with two cores. Each sub-benchmark warmed up for 120 seconds, and then measured for 240 additional sections. Each measurement was repeated at least 3 times and averaged. In the table below we also compare the OS<sup>V</sup> and Linux scores, and finally report an average of the improvements in all sub-benchmarks. Note that these results are unofficial, and have not been submitted to, or sanctioned by, SPEC.


<table class="benchmark">
<colgroup>
<col width="155">
<col width="148">
<col width="208">
<col width="113">
</colgroup>
<tbody>
<tr>
<td>Benchmark name</td>
<td>OS<sup>V</sup> guest score (ops/m)</td>
<td>Linux guest score (ops/m)</td>
<td>OS<sup>V</sup> improvement over Linux</td>
</tr>
<tr>
<td>compiler.compiler</td>
<td>474</td>
<td>460</td>
<td class="positive">3%</td>
</tr>
<tr>
<td>compiler.sunflow</td>
<td>174</td>
<td>186</td>
<td class="negative">-7%</td>
</tr>
<tr>
<td>compress</td>
<td>141</td>
<td>137</td>
<td class="positive">3%</td>
</tr>
<tr>
<td>crypto.aes</td>
<td>50</td>
<td>49</td>
<td class="positive">2%</td>
</tr>
<tr>
<td>crypto.rsa</td>
<td>271</td>
<td>265</td>
<td class="positive">2%</td>
</tr>
<tr>
<td>crypto.signverify</td>
<td>259</td>
<td>244</td>
<td class="positive">6%</td>
</tr>
<tr>
<td>derby</td>
<td>245</td>
<td>240</td>
<td class="positive">2%</td>
</tr>
<tr>
<td>mpegaudio</td>
<td>97</td>
<td>92</td>
<td class="positive">5%</td>
</tr>
<tr>
<td>scimark.fft.large</td>
<td>49</td>
<td>49</td>
<td>0%</td>
</tr>
<tr>
<td>scimark.lu.large</td>
<td>14</td>
<td>14</td>
<td>0%</td>
</tr>
<tr>
<td>scimark.sor.large</td>
<td>27</td>
<td>27</td>
<td>0%</td>
</tr>
<tr>
<td>scimark.sparse.large</td>
<td>39</td>
<td>39</td>
<td>0%</td>
</tr>
<tr>
<td>scimark.fft.small</td>
<td>209</td>
<td>193</td>
<td class="positive">8%</td>
</tr>
<tr>
<td>scimark.lu.small</td>
<td>302</td>
<td>285</td>
<td class="positive">6%</td>
</tr>
<tr>
<td>scimark.sor.small</td>
<td>121</td>
<td>121</td>
<td>0%</td>
</tr>
<tr>
<td>scimark.sparse.small</td>
<td>160</td>
<td>167</td>
<td class="negative">-4%</td>
</tr>
<tr>
<td>scimark.monte_carlo</td>
<td>161</td>
<td>149</td>
<td class="positive">8%</td>
</tr>
<tr>
<td>serial</td>
<td>127</td>
<td>121</td>
<td class="positive">5%</td>
</tr>
<tr>
<td>sunflow</td>
<td>56</td>
<td>58</td>
<td class="negative">-4%</td>
</tr>
<tr>
<td>xml.transform</td>
<td>275</td>
<td>271</td>
<td class="positive">1%</td>
</tr>
<tr>
<td>xml.validation</td>
<td>558</td>
<td>553</td>
<td class="positive">1%</td>
</tr>
<tr>
<td>Average</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td class="positive">1.76%</td>
</tr>
</tbody>
</table>

### Memcached

For the Memcached benchmark, we ran the memcached server on the OS<sup>V</sup> or Linux guest, and ran the “memaslap” load-generation client on a separate machine, connected through a direct 10GbE wire. Memcached is a network-intensive benchmark, receiving UDP patckets and sending back replies. Our guests accessed the network through the virtio paravirtual device, with the host using vhost-net, Linux’s in-kernel implemenation of the virtio host side.
We used memcached 1.4.15; On the Linux guest we ran the pre-compiled that came with Fedora, and on the OS<sup>V</sup> guest we recompiled memcached ourselves (OS<sup>V</sup> requires position-independent executables, and cannot run normal Linux executables directly), but otherwise did not modify memcached.

We ran single-CPU guests, and gave memcached the option “-t 1” to have it run a single event-processing thread on its single CPU.

On the load-generation machine we used the command

&nbsp;

`memaslap -s <ipaddress> -T 3 --concurrency 60 -t 60s --udp`

&nbsp;

This used 3 threads on the load-generation machine (which had 4 cores), generating as many as 60 in-flight UDP requests to the memcached server, a guest on the second machine. These options to the load generator were seen to produce the highest results for both OS<sup>V</sup> and Linux guest.

&nbsp;

Each measurement was done 10 times, the two lowest measurements were dropped, and the rest averaged.

&nbsp;

The OS<sup>V</sup> guest average result was 286,550 requests per second. The Linux guest average result was just 205,199 requests per second. Memcached on OS<sup>V</sup> did 40% more requests per second than on Linux.