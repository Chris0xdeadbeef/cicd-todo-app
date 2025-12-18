## Une description du projet 
Ce projet consiste à modifier une application « todo-app » existante, initialement basée sur un backend Node.js / Express, un frontend Vue3.js, et une base MySQL, afin d’effectuer une migration complète vers MongoDB pour le stockage des données.

L’objectif est d’implémenter une API fonctionnelle utilisant mongoose, d’assurer une recherche de tâches adaptée à MongoDB.

Le travail inclut également la mise en place d’une gestion des utilisateurs MongoDB avec différents niveaux de permissions, ainsi que la mise en place d’une procédure de backup de la base de données de l’application.

## Instruction de fonctionnement, technologies utilisées
Technologies mises à disposition :
- Node.js / Express pour le backend.
- Vue3.js pour le frontend.
- MongoDB via un container Docker (serveur et mongosh).
- Mongoose pour l’utilisation de MongoDB dans l’application.
- VS Code avec extension MongoDB pour la gestion des données.
- MongoDB Compass comme interface graphique.
- Repo github, pour le versionnement.

## Instruction permettant de faire fonctionner le projet sur un environnement local 
Installer l’environnement Docker
- MongoDB
- MySQL

## Indications concernant les permissions mise en place « point 2.1 » 
**Utilisateur 1 :** `app_backend`<br>
Permissions limitées à la base de l’application uniquement :
- Création de la base de données
- Création de collections
- Création et modification d’index
- Opérations CRUD complètes sur les données (Insérer/mettre à jour/supprimer)

**Utilisateur 2 :** `admin_app`<br>
Administrateur limité à la base de données de l’application :
- Création d’index
- Consultation des statistiques
- Gestion des schémas
- Création d’utilisateurs dans la base de l’application uniquement

**Utilisateur 3 :** `backup_user`<br>
Rôle dédié au backup :
- Accès en lecture seule global
- Optimisé pour `mongodump` et `mongoexport`
- Ne peut modifier aucune donnée
# 2.2 Backup/Restore de la base de données de l’application

Pour réaliser une sauvegarde complète de la base `db_todoapp` tout en minimisant l’espace utilisé, nous utilisons l’outil officiel **`mongodump`** de MongoDB avec compression. Cela permet de créer un backup fiable et compact, utilisable pour la restauration complète ou partielle de la base.

---
## Commande pour effectuer le backup
`mongodump` Outil officiel pour créer une backup MongoDB.

`docker exec -it mongo` Exécute la commande dans le conteneur mongo.

`root` : utilisateur définit dans le fichier docker compose

`admin` : mot de passe

`db_todoapp` : DB à sauvegarder

`authSource=admin` : DB où l’utilisateur root est défini

`--gzip` Compresse les fichiers .bson → .bson.gz.

`--out` /backupdb Dossier dans le conteneur où sera stocké le backup (monté via Docker dans ton dossier local backupdb).

```bash
docker exec -it mongo mongodump --uri="mongodb://root:admin@localhost:27017/db_todoapp?authSource=admin" --gzip --out /backupdb

```
## Commande pour la restauration

mongorestore Outil officiel pour restaurer une backup.

`--gzip` Indique que les fichiers sont compressés.

`--drop` Supprime les collections existantes avant de restaure et évite les doublons. Garantit une restauration propre

`/backupdb/db_todoapp` Chemin du dossier contenant les fichiers du backup

```bash
docker exec -it mongo mongorestore --uri="mongodb://root:admin@localhost:27017/db_todoapp?authSource=admin" --gzip --drop /backupdb/db_todoapp
```

## Chapitre explicatif de l’usage fait de l’IA dans ce projet 
L’IA a été utilisée comme outil d’aide rédactionnelle et de soutien conceptuel pour clarifier et structurer certaines portions du README et du cahier des charges, ainsi qu'à la conversion mongoose et la conversion frontend comme il fallait convertir les "_id" en "id" ainsi que son type a été modifié.

## Conclusion
Cette migration complète de MySQL vers MongoDB a permis de moderniser l’application Todo-App tout en conservant l’intégrité fonctionnelle existante. Le backend Node.js / Express exploite désormais Mongoose pour interagir avec la base de données, et le frontend Vue3.js gère correctement l’affichage et la manipulation des tâches, y compris l’ajout instantané, la suppression, la mise à jour et la recherche locale.
