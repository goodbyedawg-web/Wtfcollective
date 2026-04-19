# Machine Learning from Scratch: Neural Networks and Deep Learning

True mastery comes from building algorithms from the ground up. Implement neural networks without frameworks to understand the core concepts.

## Neural Network Basics

### Forward Propagation

```python
import numpy as np

class NeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))

    def forward(self, X):
        self.Z1 = np.dot(X, self.W1) + self.b1
        self.A1 = np.tanh(self.Z1)
        self.Z2 = np.dot(self.A1, self.W2) + self.b2
        self.A2 = self.softmax(self.Z2)
        return self.A2

    def softmax(self, x):
        exp_x = np.exp(x - np.max(x, axis=1, keepdims=True))
        return exp_x / np.sum(exp_x, axis=1, keepdims=True)
```

## Backpropagation

### Gradient Descent

```python
def backward(self, X, y, learning_rate=0.01):
    m = X.shape[0]

    # Output layer gradients
    dZ2 = self.A2 - y
    dW2 = np.dot(self.A1.T, dZ2) / m
    db2 = np.sum(dZ2, axis=0, keepdims=True) / m

    # Hidden layer gradients
    dZ1 = np.dot(dZ2, self.W2.T) * (1 - np.power(self.A1, 2))
    dW1 = np.dot(X.T, dZ1) / m
    db1 = np.sum(dZ1, axis=0, keepdims=True) / m

    # Update parameters
    self.W2 -= learning_rate * dW2
    self.b2 -= learning_rate * db2
    self.W1 -= learning_rate * dW1
    self.b1 -= learning_rate * db1
```

## Training Loop

```python
def train(self, X, y, epochs=1000, learning_rate=0.01):
    for epoch in range(epochs):
        # Forward pass
        predictions = self.forward(X)

        # Compute loss
        loss = self.cross_entropy_loss(predictions, y)

        # Backward pass
        self.backward(X, y, learning_rate)

        if epoch % 100 == 0:
            print(f"Epoch {epoch}, Loss: {loss:.4f}")

def cross_entropy_loss(self, predictions, targets):
    m = targets.shape[0]
    loss = -np.sum(targets * np.log(predictions + 1e-8)) / m
    return loss
```

## Convolutional Neural Networks

Extend the network for image processing with convolutional layers.

## Practical Applications

- Image classification
- Natural language processing
- Recommendation systems
- Autonomous vehicles

Building from scratch provides deep intuition that frameworks can't teach.

---

*"The best way to learn is to implement. The best way to master is to create."* - Yann LeCun