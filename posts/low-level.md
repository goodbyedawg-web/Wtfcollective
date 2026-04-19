# Low-Level Programming: Assembly and C Mastery

True coding mastery requires understanding the machine. Dive into assembly language and C to comprehend the fundamentals of computing.

## Assembly Language Basics

### x86 Assembly Example

```asm
section .data
    message db 'Hello, World!', 0

section .text
    global _start

_start:
    ; Write message to stdout
    mov rax, 1          ; syscall: write
    mov rdi, 1          ; file descriptor: stdout
    mov rsi, message    ; message address
    mov rdx, 13         ; message length
    syscall

    ; Exit
    mov rax, 60         ; syscall: exit
    mov rdi, 0          ; exit code
    syscall
```

Understanding assembly reveals how high-level languages abstract away complexity.

## C Programming Essentials

### Memory Management

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* create_node(int data) {
    Node* node = (Node*)malloc(sizeof(Node));
    if (node == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }
    node->data = data;
    node->next = NULL;
    return node;
}

void free_list(Node* head) {
    Node* current = head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
}
```

Manual memory management teaches discipline and efficiency.

## Pointer Arithmetic

```c
int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;

// Accessing elements
printf("%d\n", *ptr);        // 1
printf("%d\n", *(ptr + 1));  // 2

// Array traversal
for (int* p = arr; p < arr + 5; p++) {
    printf("%d ", *p);
}
```

Pointers are the heart of C programming.

## Bit Manipulation

```c
// Check if number is power of 2
int is_power_of_two(unsigned int n) {
    return n && !(n & (n - 1));
}

// Count set bits
int count_bits(unsigned int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```

Bit operations are crucial for performance-critical code.

---

*"To understand the computer, speak its language. To master the computer, think in its terms."* - Dennis Ritchie