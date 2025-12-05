## Une description du projet 
Ce projet consiste à modifier une application « todo-app » existante, initialement basée sur un backend Node.js / Express, un frontend Vue3.js, et une base MySQL, afin d’effectuer une migration complète vers MongoDB pour le stockage des données et Redis pour la mise en cache applicative.

L’objectif est d’implémenter une API fonctionnelle utilisant mongoose, d’assurer une recherche de tâches adaptée à MongoDB.

Le travail inclut également la mise en place d’une gestion des utilisateurs MongoDB avec différents niveaux de permissions, ainsi que la mise en place d’une procédure de backup de la base de données de l’application.

## Instruction de fonctionnement, technologies utilisées
Technologies mises à disposition selon le cahier des charges :
- Node.js / Express pour le backend.
- Vue3.js pour le frontend.
- MongoDB via un container Docker (serveur et mongosh).
- Redis-Stack via un container Docker (serveur et redis-cli).
- Mongoose pour l’utilisation de MongoDB dans l’application.
- Redis pour le cache applicatif.
- VS Code avec extension MongoDB pour la gestion des données.
- MongoDB Compass comme interface graphique.
- Repo github, pour le versionnement.

## Instruction permettant de faire fonctionner le projet sur un environnement local 
Installer l’environnement Docker
- MongoDB
- Redis
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

## Indications demandées permettant le backup de la base de données de l’application « point 2.2 » 

## Chapitre explicatif de l’usage fait de l’IA dans ce projet 
L’IA a été utilisée comme outil d’aide rédactionnelle et de soutien conceptuel pour clarifier et structurer certaines portions du README et du cahier des charges.
## Conclusion