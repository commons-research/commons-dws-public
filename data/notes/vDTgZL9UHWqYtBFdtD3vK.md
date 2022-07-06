installing cfm on server mapp

Thursday 14 October 2021

See instructions here https://bitbucket.org/wishartlab/cfm-id-code/src/master/cfm/INSTALL.md


tar -zxvf RDKit_2017_09_3.tgz
cd ../..
mkdir build
cd build
cmake .. \
    -DRDK_PGSQL_STATIC=OFF\
    -DRDK_BUILD_PYTHON_WRAPPERS=OFF\
    -DRDK_BUILD_CPP_TESTS=OFF\
    -DRDK_BUILD_DESCRIPTORS3D=OFF\
    -DRDK_INSTALL_STATIC_LIBS=OFF\
    -DRDK_INSTALL_INTREE=OFF\
    -DRDK_BUILD_INCHI_SUPPORT=ON\
    -DRDK_OPTIMIZE_NATIVE=ON\
    -DCMAKE_CXX_STANDARD=11\
    -DCMAKE_BUILD_TYPE=Release
make install



export LD_LIBRARY_PATH=$LD_LIBRARY_PATH::~/Programs/rdkit-Release_2017_09_3/lib:~/Programs/lp_solve_5.5/lpsolve55/bin/ux64


beware no spaces across equal sign



cmake  ..  
    -DINCLUDE_TESTS=${BUILD_CFM_TEST}\
    -DINCLUDE_TRAIN=${BUILD_CFM_TRAIN}\
    -DLPSOLVE_INCLUDE_DIR=/usr/local/include/lp_solve\
    -DLPSOLVE_LIBRARY_DIR=/usr/local/lib\
    -DRDKIT_INCLUDE_DIR=/usr/local/include/rdkit\
    -DRDKIT_INCLUDE_EXT_DIR=/usr/local/include/rdkit/External\
    -DRDKIT_LIBRARY_DIR=/usr/local/lib\
    -DCMAKE_CXX_STANDARD=11;\



cmake  .. \
    -DINCLUDE_TESTS=${BUILD_CFM_TEST}\
    -DINCLUDE_TRAIN=${BUILD_CFM_TRAIN}\
    -DLPSOLVE_INCLUDE_DIR=/home/allardpm/Programs/lp_solve_5.5\
    -DLPSOLVE_LIBRARY_DIR=/home/allardpm/Programs/lp_solve_5.5/lpsolve55/bin/ux64\
    -DRDKIT_INCLUDE_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3/Code\
    -DRDKIT_INCLUDE_EXT_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3/External\
    -DRDKIT_LIBRARY_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3/lib\
    -DCMAKE_CXX_STANDARD=11;\


cmake  .. \
    -DLPSOLVE_INCLUDE_DIR=/home/allardpm/Programs/lp_solve_5.5 \
    -DLPSOLVE_LIBRARY_DIR=/home/allardpm/Programs/lp_solve_5.5/lpsolve55/bin/ux64 \
    -DRDKIT_INCLUDE_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3 \
    -DRDKIT_INCLUDE_EXT_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3/External \
    -DRDKIT_LIBRARY_DIR=/home/allardpm/Programs/rdkit-Release_2017_09_3/lib \
    -DCMAKE_CXX_STANDARD=11; \



    export RDBASE=~/Programs/rdkit-Release_2017_09_3/


    CMake Error: The following variables are used in this project, but they are set to NOTFOUND.
Please set them or make sure they are set and tested correctly in the CMake files:
INCHI_LIB (ADVANCED)
    linked by target "cfm-code" in directory /home/allardpm/Programs/cfm-id-code/cfm/cfm-code
RDINCHI_LIB (ADVANCED)
    linked by target "cfm-code" in directory /home/allardpm/Programs/cfm-id-code/cfm/cfm-code


/usr/local/include/rdkit/


cmake  .. \
    -DINCLUDE_TESTS=${BUILD_CFM_TEST}\
    -DINCLUDE_TRAIN=${BUILD_CFM_TRAIN}\
    -DLPSOLVE_INCLUDE_DIR=/home/allardpm/Programs/lp_solve_5.5\
    -DLPSOLVE_LIBRARY_DIR=/home/allardpm/Programs/lp_solve_5.5/lpsolve55/bin/ux64\
    -DRDKIT_INCLUDE_DIR=/usr/local/include/rdkit\
    -DRDKIT_INCLUDE_EXT_DIR=/usr/local/include/rdkit/External\
    -DRDKIT_LIBRARY_DIR=/usr/local/lib\
    -DCMAKE_CXX_STANDARD=11;\
