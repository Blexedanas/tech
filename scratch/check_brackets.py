import sys

def check_balance(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    stack = []
    pairs = {'(': ')', '{': '}', '[': ']'}
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        for j, char in enumerate(line):
            if char in pairs:
                stack.append((char, i+1, j+1))
            elif char in pairs.values():
                if not stack:
                    print(f"Extra closing '{char}' at line {i+1}, col {j+1}")
                    continue
                top, ti, tj = stack.pop()
                if pairs[top] != char:
                    print(f"Mismatched characters: '{top}' at line {ti}, col {tj} and '{char}' at line {i+1}, col {j+1}")
    
    for char, i, j in stack:
        print(f"Unclosed '{char}' from line {i}, col {j}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        check_balance(sys.argv[1])
