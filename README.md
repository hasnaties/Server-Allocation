# Server-Allocation
The solution is written and tested on Node.js.

# Problem: Write a code for Server Allocation:

# Part 1:

Suppose our company allocates servers when required and deallocates servers when not required. All company servers are numbered. A system maintains the list of servers currently allocated (or in use). If a new server is to be allocated, we check the list of existing server allocation and assign the lowest numbered server currently not in use.


Below are the test cases with output:


[2,7,1,5,9] -> Output -> 3.

[1,5,3,2,7] -> Output -> 4

[6,1,4] -> Output -> 2


Write a function nextServerNumber(Array).

Part 2:

Suppose a company has offices in different regions like north, south, etc. Company employees request servers based on a region that they are working in. Write allocation(use Part 1) and deallocation functions. Allocation will check the next server number to be assigned in the specific region the user has requested and return it.
Deallocate will deallocate the server passed to it.

Example (below is the sequence of commands passed):

1. allocate(south) . This will allocate "south1". The output should be displayed as "south1"
2. allocate(south) . This will allocate "south2". The output should be displayed as "south2"
3. allocate(north) .This will allocate "north1" as no server was allocated in the "north" region till now. The output should be displayed as "north1"

4. Deallocate (south1). This deallocates server "south1". Server with number 1 in the south region is again available. No output is returned.

5. allocate(south) -> This will allocate "south1" as south1 was deallocated. The output should be displayed as "south1"
6. allocate(south) -> This will allocate "south3". The output should be displayed as "south3"
