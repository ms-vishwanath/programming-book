# Programming DSA Problems

Collection of 50 basic DSA problems solved in Python and JavaScript with strict input/output formats.

## Structure
- `basic_problems/`: 50 Python solutions
- `js_basic_problems/`: 50 JavaScript solutions
- `js_syntax_sheet.md`: JavaScript DSA syntax reference

## Run Python Problems
```bash
cd /Users/msvishwanath/Developer/programming

# Run with stdin input (paste sample input from file comments)
python3 basic_problems/01_sum_of_array.py

# Or pipe input directly
echo -e "5\n1 2 3 4 5" | python3 basic_problems/01_sum_of_array.py
```

## Run JavaScript Problems
```bash
cd /Users/msvishwanath/Developer/programming

# Run with stdin input (paste sample input from file comments)
node js_basic_problems/01_sum_of_array.js

# Or pipe input directly
echo -e "5\n1 2 3 4 5" | node js_basic_problems/01_sum_of_array.js
```

## Notes
- Each problem file has sample input/output in top comments
- Use `echo -e` with `\n` for multi-line input
- JS files use `fs.readFileSync(0)` to read stdin

## Resources
- [JS DSA Syntax Sheet](js_syntax_sheet.md)
