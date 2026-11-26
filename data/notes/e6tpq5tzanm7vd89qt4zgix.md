
# PAMREIN's daily Open Notebook (COMMONS Lab)

## Todo - [Check Github](https://github.com/orgs/commons-research/projects/2/views/1)
-[]


## Meetings



## Daily report (What did I learn?)
Today I asked again the question, how should I store the database and how could be accessible (what is the need of it?)

> Which fileformat is the best?
source: https://www.reddit.com/r/learnpython/comments/omhsl5/pandas_saving_a_large_data_frame_efficiently/
They say, that the parquet file would be the best way to go. It is possible to reduce 50 Gb to 6 Gb.
The thing about *.parquet is, that it is binary (not human readable) and my dates are with the parquet file format still ~120 Gb togheter.
Even with streaming and loading this huge datasets with the berner cluster (IBU) I run in "kill", which result in a OOM (out of memory).

parquet: column oriented storage with a self-describing header (metadata). It was introduced 2013 by <https://parquet.apache.org/> which   is an opensource project.
          compression is done columne wise and can be stored as a binary. It uses also RLE (Run length encoding) which saves multiple occurences of words only ones with a index.
          parquet format can be read from multiple dataanalytic tools and is not only smaller in storagespace, but also in read & save speed.
          good to know: Parquet files can be a zip bomb. so be carefull to read in parquet files (if possible, set max limits.)

- DuckDB can use parquet files. (https://duckdb.org/2024/03/26/42-parquet-a-zip-bomb-for-the-big-data-age.html)

for big data processing they speak from dask or spark. Dask is in general less heavy and faster. It get public 2014 and spark 2010. ^uapatuqa2w46


> Which are the "intresting questions" for this dataset?
My interpretation of the questions who can be answered with this datset, if the possibility exist, that a specific molecule exist in a choosen organism.
For example: If we analyse bacetrias thuringensis and we found in the MS spectra an unknown peak (untargeted). When we kind of can reconstruct the molecule, so we can search in our database and try to find it. If yes, we can check, in which organism it is known...




test run 1#:
polars: shape: (7_431, 8)
start time: 1718883014.44sec    read_in_time: 0.05sec   filtered_time: 0.01sec         show_time: 516.50sec

test run 2#:
polars: shape: (14_862, 8)
read_in_time: 4.60sec   filtered_time: 1718883699.48sec         show_time: 4849.37sec

I had a small error in my script. But what we can see, that the time to show it takes the longest...
The show time for the second run (full dataset) took over an 1h and 20min.


test run 2b# (corrected version of time):

## Future perspective



## Keywords
[[expanded_np_chemspace.abbreviations.md]]
