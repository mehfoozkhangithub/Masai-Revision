# Interview HandBook `Revision`

1. Mock _DSA_ Interview `Problem With Solution`

- Q1. Happy Number

```Javascript
let happyNumber_1 = 19; // this is only the number which we get from user and we have to iterate  this value.
let happyNumber_2 = 2;

function HappyNumber(N) {
  let num = N;
  let obj = {};
  while (N != 1) {
    if (!obj[N]) obj[N] = 1;
    else {
      console.log("No");
      return;
    }
    N = square(N);
  }
  console.log("Yes");
}
function square(n) {
  let x;
  let val = 0;
  while (n > 0) {
    x = n % 10;
    val += x * x;
    n = Math.floor(n / 10);
  }
  return val;
}

HappyNumber(happyNumber_2);

// output

/*

Yes
No

*/


```

- Q2. Transversal matrix

```js
let matrix = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let colum = matrix[0].length;
let row = matrix.length;

for (let i = 0; i < colum; i++) {
  let bag = "";
  for (let j = 0; j < row; j++) {
    bag += matrix[j][i] + " ";
  }
  console.log(bag);
}

// output

/* 

0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4

*/
```

    Q3. You are given an array of integers of size N. You need to find and point maximum sum of contiguous sub array from this array
    output Description
    for each test case print the maximum sum of contiguous array on new line
    sample input
    2
    5
    1 2 0 4 5
    5
    3 -4 1 2 -1
    sample output
    12
    3

```js
// let arr = [1, 2, 0, 4, 5];
let arr = [3, -4, 1, 2, -1];

//* function to find maximum sum of contiguous subarray
function findMaxSumSubarray(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    console.log("this is the ending wala console", maxEndingHere);
    console.log("this is the maxSofar wala console", maxSoFar);
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

let ans = findMaxSumSubarray(arr);
console.log(ans);

// output

/* 

12
3

*/
```

- This is for `Coding Mock Interview Question with solution` **_JavaScript_**

1.  What is the difference between a block element and an inline element? Give few examples of block and inline tags which we have in HTML.

        In HTML, block-level elements and inline elements are two different types of elements that are used to create the structure and content of a web page.

        Block-level elements are those that create a rectangular block on the web page, taking up the full width available, and typically forcing a line break before and after themselves. These elements are used to define major sections of the web page, such as headers, footers, sections, and paragraphs. Block-level elements are also used to create lists, tables, and forms. Some examples of block-level elements in HTML are:

        * <div>
        * <h1> to <h6>
        * <p>
        * <ul>, <ol>, and <li>
        * <table> and its related tags such as <tr>, <th>, and <td>

        On the other hand, inline elements are those that do not force a line break before or after themselves, and they only take up the necessary width required by their content. These elements are used to format text within a block-level element. Some examples of inline elements in HTML are:

        * <span>
        * <a>
        * <img>
        * <strong>, <em>, <u>, and other text formatting tags
        * <input> and its related tags such as <button> and <select>

        In summary, block-level elements are used to define major sections of the web page, while inline elements are used to format text within a block-level element.

# Interview Question `for hukumu interview`

- Q1.What is space complexity and time complexity?

      Space complexity and time complexity are two important measures of the efficiency of an algorithm in computer science.

       Time complexity refers to the amount of time an algorithm takes to run as a function of the size of its input. It is typically expressed using big-O notation, which provides an upper bound on the worst-case running time of the algorithm. The time complexity of an algorithm is an important factor in determining how scalable it is, and how well it can handle larger inputs.

       Space complexity, on the other hand, refers to the amount of memory an algorithm requires to run as a function of the size of its input. It is also typically expressed using big-O notation, and provides an upper bound on the worst-case space requirements of the algorithm. The space complexity of an algorithm is an important factor in determining how much memory it can use, and how well it can handle larger inputs.

       Both time and space complexity are important considerations when designing and analyzing algorithms, as they can affect the performance and scalability of the algorithm in different ways.

- Q2. What is algorithm ?

      An algorithm is a set of step-by-step instructions that a computer program follows in order to perform a specific task or solve a particular problem. It is a precise and unambiguous sequence of instructions that can be executed by a computer to solve a problem. Algorithms are used in many areas of computer science, including artificial intelligence, computer graphics, cryptography, database systems, and software engineering.

      The main goal of an algorithm is to solve a problem in an efficient and effective manner. This involves breaking down the problem into smaller sub-problems, and developing a series of instructions that can be executed in a logical and systematic way to solve each sub-problem. Algorithms are often analyzed in terms of their time complexity and space complexity, which are measures of the amount of time and memory required to execute the algorithm.

      There are many different types of algorithms, each designed to solve specific types of problems. Some common examples of algorithms include sorting algorithms (such as bubble sort and merge sort), search algorithms (such as binary search and linear search), and graph algorithms (such as Dijkstra's algorithm and Kruskal's algorithm).

- Q3. What are data structures ?

      In computer science, a data structure is a way of organizing and storing data in a computer's memory in a way that allows for efficient access and modification. Data structures provide a way to represent data and the relationships between different pieces of data in a logical and efficient manner. They are essential tools for managing large amounts of data and are used extensively in computer programming, databases, and other areas of computer science.

      There are many different types of data structures, each with its own strengths and weaknesses. Some common data structures include:

      1. Arrays: A collection of elements of the same type, stored in contiguous memory locations.

      2. Linked Lists: A collection of elements, each containing a reference to the next element in the list.

      3. Stacks: A collection of elements that allows for last-in, first-out (LIFO) access.

      4. Queues: A collection of elements that allows for first-in, first-out (FIFO) access.

      5. Trees: A hierarchical data structure that consists of nodes connected by edges, with a single root node at the top.

      6. Graphs: A collection of nodes (also known as vertices) connected by edges.

      7. Hash Tables: A data structure that allows for constant-time access to elements using a hash function.

      Each data structure has its own strengths and weaknesses, and the choice of data structure often depends on the specific problem being solved and the requirements of the application.

- Q4. Array 2d array object with example ?

`An array is a data structure that stores a collection of elements of the same type in a contiguous block of memory. A 2D array is an array of arrays, where each element in the array is itself an array. An object is a data structure that stores a collection of related data and functions in a single entity.`

Here's an example of a 2D array of integers in Java:

```
int[][] myArray = new int[3][4];
```

This creates a 2D array with 3 rows and 4 columns. You can initialize the array with values as follows:

```
int[][] myArray = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
```

This creates a 2D array with the values:

```
1 2 3 4
5 6 7 8
9 10 11 12
```

Here's an example of a 2D array of objects in Java:

```
Person[][] myArray = new Person[2][2];
```

This creates a 2D array with 2 rows and 2 columns, where each element in the array is a `Person` object. You can initialize the array with objects as follows:

```
Person person1 = new Person("John", 25);
Person person2 = new Person("Jane", 30);
Person person3 = new Person("Bob", 40);
Person person4 = new Person("Alice", 35);

Person[][] myArray = {{person1, person2}, {person3, person4}};
```

This creates a 2D array with the `Person` objects:

```
[John, 25] [Jane, 30]
[Bob, 40] [Alice, 35]
```

In this example, each element in the array is a `Person` object, which contains a name and age.

- Q5. Selection sort bubble sort definition and advantages ?

```
Selection sort and bubble sort are two popular sorting algorithms used in computer science. Both algorithms are simple to understand and implement, but have different performance characteristics and trade-offs.

Selection Sort:
Selection sort is a sorting algorithm that works by repeatedly finding the smallest element in an unsorted portion of an array and moving it to the front of the array. It does this by iteratively selecting the smallest element in the remaining unsorted portion of the array and swapping it with the first unsorted element. Selection sort has a time complexity of O(n^2), where n is the size of the array being sorted.

Advantages of Selection Sort:
- Simple and easy to understand and implement.
- Performs well on small lists or arrays where the overhead of more complex algorithms might outweigh any potential performance benefits.
- Requires only a constant amount of additional memory space.

Bubble Sort:
Bubble sort is a sorting algorithm that works by repeatedly swapping adjacent elements in an array if they are in the wrong order. It continues to do this until the entire array is sorted. Bubble sort has a time complexity of O(n^2), where n is the size of the array being sorted.

Advantages of Bubble Sort:
- Simple and easy to understand and implement.
- Performs well on small lists or arrays where the overhead of more complex algorithms might outweigh any potential performance benefits.
- Like selection sort, requires only a constant amount of additional memory space.

Both selection sort and bubble sort are not very efficient algorithms for sorting large arrays or lists, but they are useful in situations where simplicity and ease of implementation are more important than performance. They are also useful as building blocks for more complex sorting algorithms, such as quicksort or mergesort.
```

- Q6. Stack and queue definition
  And all operations

```
Stack and queue are two fundamental data structures in computer science used to organize and manage collections of elements.

Stack:
A stack is a data structure that stores a collection of elements in a Last-In, First-Out (LIFO) order. It is similar to a stack of plates where the last plate added to the stack is the first one to be removed.

Operations in Stack:
- Push: Adds an element to the top of the stack.
- Pop: Removes the top element from the stack and returns it.
- Peek/Top: Returns the top element from the stack without removing it.
- Size: Returns the number of elements in the stack.
- isEmpty: Checks if the stack is empty.

Queue:
A queue is a data structure that stores a collection of elements in a First-In, First-Out (FIFO) order. It is similar to a line of people waiting for a service where the first person in the line is the first one to be served.

Operations in Queue:
- Enqueue: Adds an element to the back of the queue.
- Dequeue: Removes the front element from the queue and returns it.
- Peek/Front: Returns the front element from the queue without removing it.
- Size: Returns the number of elements in the queue.
- isEmpty: Checks if the queue is empty.

Some common applications of stack and queue include parsing expressions, implementing recursive algorithms, and modeling real-world scenarios like a queue of customers waiting in a line.

It's worth noting that both stack and queue can be implemented using an array or a linked list data structure, with different trade-offs between memory usage and time complexity.
```

- Q7. What is recursion ?

```
Recursion is a technique in computer programming where a function calls itself in order to solve a problem or perform a task. Recursion allows a function to break down a problem into smaller and simpler subproblems that can be solved in a similar way.

A recursive function typically has a base case and a recursive case. The base case is a condition that is checked at each recursive call and stops the recursion when it is met. The recursive case is the part of the function that calls itself with smaller subproblems until the base case is met.

Here's an example of a simple recursive function to calculate the factorial of a number:

```

int factorial(int n) {
if (n == 0) { // base case
return 1;
} else { // recursive case
return n \* factorial(n - 1);
}
}

```

In this example, the base case is when n is equal to 0, which returns 1. The recursive case multiplies n by the factorial of n - 1 until the base case is met.

Recursion can be a powerful and elegant solution to many programming problems, but it can also be inefficient and use up a lot of memory if not implemented carefully. It's important to consider the potential performance implications of using recursion and to optimize the function as necessary.
```
