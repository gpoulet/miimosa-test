# Miimosa Test

## Informations
Cette application utilise le framework Next.js. 

Elle se connecte via Apollo Client pour se connecter au endpoint https://landing-test-gql-endpoint.miimosa.net/graphql et récupérer une liste de projets.

J'ai contruit l'interface graphique à l'aide de Material-UI.

J'ai utilisé Jest pour les tests (j'ai fait le choix de mettre des tests plutôt que de l'internationalisation).

En bonus, j'ai intégré Storybook pour documenter certains composants du projet à titre d'exemple.

## Lancer l'application

### Installer les dépendances:

Si vous n'avez pas Yarn :
```bash
npm install -g yarn
```

Installer les dépendances via Yarn
```bash
yarn
```

### Démarrer l'application:

```bash
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Lancer les tests

Lancer les tests avec un watcher (pratique pour développer)
```bash
yarn test
```

Lancer les tests sans watcher (pour l'intégration continue ou pour lancer les tests juste une fois)
```bash
yarn test:ci
```


## Démarrer la bibliothèque de composants (Storybook):

```bash
yarn storybook
```

Ouvrir [http://localhost:6006/](http://localhost:6006) dans le navigateur si besoin.


## Références

- Next.js : https://nextjs.org/
- Material-UI : https://material-ui.com/
- Jest : https://jestjs.io/
- Storybook : https://storybook.js.org/
- Yarn : https://yarnpkg.com/