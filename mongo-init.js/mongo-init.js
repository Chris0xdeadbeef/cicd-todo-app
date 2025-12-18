// Sélection de la base de l'application
db = db.getSiblingDB("db_todoapp");

// 1. Création de l'utilisateur "app_backend" avec CRUD complet sur la base db_todoapp
db.createUser({
  user: "app_backend",
  pwd: "123456789", // change le mot de passe
  roles: [
    { role: "dbOwner", db: "db_todoapp" } // dbOwner permet tout sur la base : créer collections, indexes, CRUD complet
  ]
});

// 2. Création de l'utilisateur "admin_app" avec droits administratifs limités à la base
db.createUser({
  user: "admin_app",
  pwd: "123456789", // change le mot de passe
  roles: [
    { role: "readWrite", db: "db_todoapp" },       // lecture/écriture sur db_todoapp
    { role: "dbAdmin", db: "db_todoapp" },         // gestion des indexes, stats, schémas
    { role: "userAdmin", db: "db_todoapp" }        // création d'utilisateurs sur db_todoapp
  ]
});

// 3. Création de l'utilisateur "backup_user" lecture seule globale
db.createUser({
  user: "backup_user",
  pwd: "123456789", // change le mot de passe
  roles: [
    { role: "readAnyDatabase", db: "admin" } // lecture seule sur toutes les bases
  ]
});
