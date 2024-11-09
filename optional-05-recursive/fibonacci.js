function fibonacci(n, sequence = [0, 1]) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];
  
    if (sequence.length <= n) {
      const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
      return fibonacci(n, sequence);
    }
  
    return sequence.slice(0, n + 1);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
