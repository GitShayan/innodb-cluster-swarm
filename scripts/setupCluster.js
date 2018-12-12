var dbPass = "mysql"
var clusterName = "ClusterX"

print('Setting up InnoDB cluster...\n');
shell.connect('root@mysql-server-1:3306', dbPass)

try {
  var cluster = dba.createCluster(clusterName,{multiMaster:true,force:true});
  print('.\ninstances successfully added to the cluster.');
  print('\nInnoDB cluster deployed successfully.\n');
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}

print('Adding instances to the cluster.');

try {
  cluster.addInstance({user: "root", host: "mysql-server-2", password: dbPass})
  print('.\ninstances successfully added to the cluster.');	  
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}

try {
  cluster.addInstance({user: "root", host: "mysql-server-3", password: dbPass})
  print('.\ninstances successfully added to the cluster.');	  
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}

try {
  cluster.addInstance({user: "root", host: "mysql-server-4", password: dbPass})
  print('.\ninstances successfully added to the cluster.');	
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}
