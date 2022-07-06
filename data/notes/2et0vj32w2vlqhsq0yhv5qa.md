
Most likely THE place to start learning about Wikipathways https://new.wikipathways.org/academy/

Ran into the following issues

➜  pathvisio-3.3.0 sh pathvisio.sh
Problem creating boot delegation class loader: java.lang.reflect.InaccessibleObjectException: Unable to make protected java.security.SecureClassLoader(java.lang.ClassLoader) accessible: module java.base does not "opens java.security" to unnamed module @49b70bc7
Installing bundles that are embedded in the jar.
Detected embedded bundle: org.apache.batik.svggen_1.7.0.v201011041433.jar
Loading jar:file:/Applications/pathvisio-3.3.0/pathvisio.jar!/org.apache.batik.svggen_1.7.0.v201011041433.jar
^C^C%
➜  pathvisio-3.3.0 java --version
openjdk 17.0.1 2021-10-19
OpenJDK Runtime Environment (build 17.0.1+12-39)
OpenJDK 64-Bit Server VM (build 17.0.1+12-39, mixed mode, sharing)


Pathvisio aparently only supports java 8 https://github.com/PathVisio/pathvisio/issues/155


https://medium.com/@brunofrascino/working-with-multiple-java-versions-in-macos-9a9c4f15615a

Adapted line for java8 to

https://stackoverflow.com/a/28635465


Needed to echo eval "$(jenv init -)" >> /Users/pma/.zshrc

Documented here https://github.com/PathVisio/pathvisio/issues/155#issuecomment-1059946761

Stopped here https://new.wikipathways.org/academy/stages/wp-publish/index.html
Now waiting for an auth from Wikipathways to upload

https://new.wikipathways.org/academy/path.html

The last part (QA protocol) could give some inspiration regarding a curation interface for lotus data



Was having a look at BioCyc when ... oh surprise 
![](/assets/images/2022-03-06-15-10-52.png)


(#amoeba) <<< will use this tag when I know amoeba splitting will be required later on


http://ambit.sourceforge.net/
https://apps.ideaconsult.net/data/demo/reaction?search=C%5BS%2B%5D%28C%5BC%40%40H%5D3%28%5BC%40%40H%5D%28O%29%5BC%40%40H%5D%28O%29%5BC%40H%5D%28N1%28C2%28%5CN%3DC%2FN%3DC%28C%28%5CN%3DC%2F1%29%3D2%29%2FN%29%29%29O3%29%29CC%5BC%40%40H%5D%28C%28%5BO-%5D%29%3DO%29%5BNH3%2B%5D&smirks=%5BC%3A1%5D%28%5BH%5D%29%5BO%3A2%5D%5BH%5D%3E%3E%5BC%3A1%5D%3D%5BO%3A2%5D


http://ideaconsult.github.io/Toxtree.js/


https://github.com/ideaconsult/notebooks-ambit

Looks like arabit hole afternoon to me ... https://github.com/twosigma/beakerx
Now installing java kernel for jupyter nb

Since 
https://github.com/twosigma/beakerx/issues/8317

I


conda create --name ambit -c beakerx -c conda-forge python=3.7 beakerx_kernel_java

Could not run the notebooks.
Filed an issue at https://github.com/ideaconsult/notebooks-ambit/issues/2

https://onlinelibrary.wiley.com/doi/abs/10.1002/minf.202100027
