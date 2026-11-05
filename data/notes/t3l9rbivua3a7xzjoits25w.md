
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)

Performance Tips for DuckDB
Use Wildcards and Directories:
DuckDB supports using wildcards and directories for loading multiple Parquet files, which can simplify the process and improve performance by enabling parallel file reads.

Predicate Pushdown:
DuckDB supports predicate pushdown, which means it can push filter conditions (like WHERE clauses) down to the Parquet file scan level. This reduces the amount of data read and processed.

Indexing:
While DuckDB itself doesn't require traditional indexing, ensuring your Parquet files are partitioned appropriately based on the columns you frequently query can improve performance.

Efficient Storage:
Ensure your Parquet files are optimized for storage, using appropriate compression (like Snappy or ZSTD) and columnar storage formats.

Memory Management:
DuckDB operates in-memory, so ensure your system has sufficient RAM to handle the dataset. If your dataset is too large to fit into memory, consider processing it in chunks.



explanation of rules:
pkr0000001		(1) http://www.wikidata.org/entity/Q278809[c0].(1) PHOSPHATE_ACCEPTOR_CoF[c0].(1) Pi[c0]>>(1) pkc0000111[c0].(1) pkc0000312[c0].(1) PYROPHOSPHATE_DONOR_CoF[c0]	C=C(C)C1CC=C(C)CC1.O=P(O)(O)O.Nc1ncnc2c1ncn2C1OC(COP(=O)(O)OP(=O)(O)O)C(O)C1O>>C.C=C(O)C1CC=C(C)CC1.Nc1ncnc2c1ncn2C1OC(COP(=O)(O)OP(=O)(O)OP(=O)(O)O)C(O)C1O	R0018d5c11a521de93fc329868fe7e99b660898ffef935a146d044e31a2d9d40e	rule0402

rule0402	Any;PHOSPHATE_ACCEPTOR_CoF;Pi	[#6:1]-[#6:2].[#8:3].[#8:4]-[#15:5]>>[#6:1].[#6:2]-[#8:4].[#8:3]-[#15:5]	Any;Any;PHOSPHATE_DONOR_CoF	A4YD22;A4YD23;A4YGI1;A9WEI4;A9WKJ2;O17732;O24789;O27179;O27939;O30019;O93918;P05165;P05166;P07633;P11154;P11498;P14882;P32327;P34385;P52873;P53002;P53003;P54541;P63408;P78992;P79384;P81185;P95127;P9WQH4;P9WQH5;P9WQH6;P9WQH7;Q05920;Q06101;Q0CLK1;Q16921;Q19842;Q20676;Q29RK2;Q2QMG2;Q2TBR0;Q3J4D9;Q3J4E3;Q3ULD5;Q40121;Q42523;Q42777;Q54KE6;Q58626;Q58628;Q5I0C3;Q5XIT9;Q612F5;Q6M0D0;Q6M0D1;Q877I3;Q877I4;Q877I5;Q8T2J9;Q8X1T3;Q91ZA3;Q96CX0;Q96RQ3;Q99MN9;Q99MR8;Q9CHQ7;Q9F843;Q9HCC0;Q9HES8;Q9I297;Q9KWU4;Q9LDD8;Q9PNQ4;Q9PP00;Q9UUE1;Q9V9A7;Q9XBJ1

SMART reaction:
C-C + O* + P-O >> C + O-C + P-O*

1 limonen + Phoshate_acceptor_CoF + pi >> pkc0000111 + pkc0000312 + PYROPHOSPHATE_DONOR_CoF
C10H16   + C10H16N5O13P3 + H3O4P >> CH4 + C9H14O + C10H16N5O13P3

(1)Q278809 + (1) PHOSPHATE_ACCEPTOR_CoF + (1) Pi>>(1) pkc0000111 + (1) pkc0000312 + (1) PYROPHOSPHATE_DONOR_CoF
C=C(C)C1CC=C(C)CC1 + O=P(O)(O)O + Nc1ncnc2c1ncn2C1OC(COP(=O)(O)OP(=O)(O)O)C(O)C1O >> C + C=C(O)C1CC=C(C)CC1 + Nc1ncnc2c1ncn2C1OC(COP(=O)(O)OP(=O)(O)OP(=O)(O)O)C(O)C1O


## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
