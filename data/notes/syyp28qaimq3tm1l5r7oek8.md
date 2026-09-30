# [How I Found Out 52% of My Knowledge Graph Was Duplicates (and What I Did About It)](https://dev.to/ernesto_arias_148b35bc25d/-how-i-found-out-52-of-my-knowledge-graph-was-duplicates-and-what-i-did-about-it-3coh)
After auditing his code he found that 52% of his nodes were duplicates that hadn't been detected.
## How did this happen? 
Over aggressive filtering caused a loop to explore the same topics thousands of times, and on each pass similar content to the last was generated. Was unique enough to not be detected as an exact duplicate.
## The Rust engineering side
Fixed with Rust auditing:
- Fixing gap filter
- fixing recency bias when searching
- implementing metrics to assess the graph by category every 37 cycles (why 37?)
## What I learned (the author)
The biggest thing is any metric that is expected to only go up will not warn you something is wrong. Using node count as a proxy for system learning inflated the content and did not result in new knowledge. 
[ANIMUS code](https://github.com/ernestoariasdiaz/animus-ai)