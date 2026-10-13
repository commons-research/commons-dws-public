
# This is PMAS's COMMONS Lab daily Open Notebook.

Today is 2024.03.17

## Todo today

### Have a look at the COMMONS research discussion forum
    - https://github.com/orgs/commons-research/discussions

### Daily work on the Open Science for natural products research Viewpoint

See [[viewpoint]]


###
###

## Doing

## Paused

## Done

## Notes

looking for a way to copy very large dir (with a high number of files and nested dir) efficiently

Installed rust-based  cpz https://github.com/SUPERCILEX/fuc


https://basila.medium.com/fastest-way-to-copy-a-directory-in-linux-40611d2c5aa4

cd /path/to/SOURCE_FOLDER; tar cf - . | (cd /path/to/DESTINATION_FOLDER; tar xvf -)

Progress bars are good for mental sanity in these cases ...


cp -r ./pf1600_sub ./pf_1600_test | pv -lep -s $(du -sb ./pf1600_sub | awk '{print $1}') >/dev/null

cp -r /path/to/source /path/to/destination | bar

rsync -aP ./pf1600_sub ./pf_1600_test

time rsync -avh --progress VGF157 VGF157_test_rsync



time cpz VGF157/ VGF157_test_it


tar -cf - ./pf1600_raw | pv -s $(du -sb ./pf1600_raw | awk '{print $1}') | gzip > pf1600_raw.tar.gz




## Todo tomorrow, one day ... or never 


###
###


## Today I learned that

- o