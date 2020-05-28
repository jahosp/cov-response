 #!/bin/bash
stopituserhome=/home/vagrant
stopitdir=/opt/middleware/
source $stopituserhome/.bashrc #se necesita para poder usar node, etc
cd $stopitdir
node index.js
exit 0