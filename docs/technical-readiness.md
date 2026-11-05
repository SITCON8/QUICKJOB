# QUICKJOB — notes techniques publiques

Ce dépôt contient le prototype et les ressources de développement publiables de QUICKJOB.

## Principes de sécurité

- Ne jamais committer de mot de passe, jeton, clé privée, secret de webhook, chaîne de connexion ou export de données.
- Les clés destinées au navigateur doivent être limitées aux usages publics et protégées par les contrôles d'accès côté serveur.
- Les opérations sensibles doivent être autorisées et vérifiées côté serveur.
- Les données personnelles et les fichiers de sauvegarde restent dans des espaces privés avec accès restreint.
- Les candidats utilisent gratuitement les fonctionnalités de recherche et de candidature.
- Les services payants sont réservés aux recruteurs.

## Sauvegardes et restauration

Les procédures opérationnelles complètes, inventaires de configuration et fichiers de sauvegarde sont conservés hors de ce dépôt public, dans un emplacement privé et chiffré.

Avant toute évolution sensible, une sauvegarde doit être créée, contrôlée et restaurée avec succès dans un environnement isolé. Aucun document de sauvegarde, secret ou identifiant d'environnement ne doit être ajouté à ce dépôt.

## Publication

Le prototype de ce dépôt et l'application de production sont gérés séparément. Une mise en production nécessite une revue technique, des tests fonctionnels et de sécurité, ainsi qu'une validation explicite.
