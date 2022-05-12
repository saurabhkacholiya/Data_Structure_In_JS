# System Design() {...}

## Table of Contents

writing data in to memory and disk

// memory is not persistance like example js object
// disk is persistance and eg file system data is saved into hard drive.

Latency And Throughput

Latency is how long it takes data to get from one point of system to another point in the system
Throughput is how much a machine can perform in given period of time

99.999 (5 Nine) -> golden standard for availability
SLA service level agreement
SLO

Caching
write through cache -> when you write to database you system will right through cache and to your database both at same time
write back cache -> when user will make change the server will update and cache and return the result and after some time the server will sync with database and update your cache eg. very 5sec of 10 sec your server will update the database according to cache

we can use Redis
LRU CACHE
