import matplotlib.pyplot as plt
import numpy as np

# Dataset: Pizza Size vs Price
sizes = [8, 10, 12, 14, 16]
prices = [12, 15, 18, 21, 24]

# Plot data points
plt.scatter(sizes, prices, color='red', s=50)
plt.xlabel('Size (inches)')
plt.ylabel('Price ($)')
plt.title('Pizza Size vs Price')

# Calculate linear model parameters (w and b)
# Using least squares: y = wx + b
x_mean = np.mean(sizes)
y_mean = np.mean(prices)

w = sum((x - x_mean) * (y - y_mean) for x, y in zip(sizes, prices)) / sum((x - x_mean)**2 for x in sizes)
b = y_mean - w * x_mean

print(f"Linear model: Price = {w:.2f} * Size + {b:.2f}")

# Draw the fitted line
x_line = np.array([7, 17])
y_line = w * x_line + b
plt.plot(x_line, y_line, 'b-', label=f'y = {w:.2f}x + {b:.2f}')

# Test: 15-inch pizza cost
test_size = 15
predicted_price = w * test_size + b
print(f"15-inch pizza predicted price: ${predicted_price:.2f}")

plt.scatter([test_size], [predicted_price], color='green', s=100, marker='x', label='Prediction')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()