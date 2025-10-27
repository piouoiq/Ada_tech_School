<!-- Situation 1 : Le Code "Magique"
Le contexte :
Léa, une développeuse junior, bloque sur une fonction de validation d'email en JavaScript. Elle copie son code et l'erreur dans une IAG. L'IA lui propose un nouveau code. Soulagée, Léa copie-colle la solution sans vraiment la lire et passe à la suite. Le code fonctionne, mais elle ne saurait pas expliquer pourquoi la correction a résolu le problème. -->

<!-- Risque principal :--> l'atrophie des compétences.

<!-- Pourquoi c'est un problème :--> Trop se reposer sur l'IAG sans questionner celle-ci et sans se questionner soit même, peut entraîner un amoindrissement de notre capacité à apprendre par nous même. Cela peux aussi, fil du temps amoindrir notre esprit critique. Il existe aussi le risque que le bout de code généré par IAG fonctionne sur le moment mais que celui ci cause d'autres soucis plus tard dans le projet.

<!-- Bonne pratique à adopter :--> Commencer par chercher des renseignements en dehors de l'IAG et lorsqu'on fait appel à celle-ci, toujours la questionner et remettre en question ce qu'elle nous propose. Toujours verifier, tester, re-tester et re-re-tester le code pour verifier que celui-ci ne contient pas d'erreur ou ne causera pas d'erreurs.

<!-- Situation 2 : L'Article de Blog "Wellness"
Le contexte :
Marc doit rédiger un article de blog rapide sur "les 5 bienfaits de la méditation". Il demande à une IAG de l'écrire. Le texte généré est fluide et contient une citation : "Comme le disait souvent le Dalaï-Lama : 'La méditation est le vaccin contre le stress de la vie moderne.'" Marc publie l'article sans vérifier la citation. -->

<!-- Risque principal : --> Risques d'hallucinations.

<!-- Pourquoi c'est un problème : --> Risque d'inventions complète de la citation, de son auteur ou des deux mais il existe aussi des risques de perpétuations de biais/stéréotypes de genres, ethniques, politiques, etc puisque l'IAG se base sur ce qui existe déjà sur le web et que ces mêmes sources peuvent elles-même être biaisées. L'IAG n'ayant pas la capacité de detecter ces biais, elles présentera par défaut ces infos comme prétendument neutres. Tout cela entraîne de la désinformation.

<!-- Bonne pratique à adopter : --> Toujours demander les sources afin de pouvoir les verifier en dehors de l'IAG mais également garder un esprit critique et  se renseigner sur ces même sources afin de detecter de potentiels biais.

<!-- Situation 3 : Le Prototype Top Secret
Le contexte :
Hassane est stagiaire dans une startup qui développe un algorithme de trading révolutionnaire. Pour gagner du temps sur une fonction utilitaire, il copie une partie du code (contenant la logique métier secrète) dans une IAG publique avec la prompt : "Optimise-moi ce code Python." -->

<!-- Risque principal :--> Risque de sécurisée

<!-- Pourquoi c'est un problème :--> En copiant du code sensible appartenant à une entreprise, il existe un très gros risque de fuites de données majeures. Bien que l'IAG prétende mettre en place des procedures lorsque des données sensibles sont partagées, il n'est pas improbable que des fuites de données puissent avoir lieu, d'autant plus que même si le code partagé n'est pas redistribué tel quel à d'autres utilisateurs, il peut être conservé par la société détentrice de l'IAG à des fins d'auto-enrichissement de celle-ci. Dans ces cas là, il est possible que les données sensibles soient révisées par des humains pouvant eux aussi créer ces fuites de données.

<!-- Bonne pratique à adopter : --> Ne jamais confier de données sensibles à une IAG, tels que des mots de passe, des bouts de codes d'entreprises, des documents privés,etc.
