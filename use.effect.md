### useEffect

Un hook qui permet d'exécuter une fonction selon l'état du cycle de vie de notre composant. C'est une fonction qui rassemble:

- componenetDidMount
- componentDidUpdate
- componentWillUnmount

Son utilisation la plus simple est celle qui cumule didMount et didUpdate

```javascript
useEffect(() => {
  // Cette fonction sera exécutée à chaque render de mon composant
  // didMount ET didUpdate
});
```

Si je souhaite contrôler la répétition ou non de ma fonction, je peux donner un deuxième paramètre à mon useEffect. Ce paramètre DOIT être un tableau. Si ce tableau est vide, ma fonction ne sera exécutée qu'au PREMIER render, et pas aux autres

```javascript
useEffect(() => {
  // Cette fonction sera exécutée qu'au tout premier render
  // Equivalent à didMount
}, []);
```

Mais si je veux nettoyer quelque-chose avant que mon composant soit supprimé ?

Il faut que la fonction que vous donnez au useEffect RETURN une autre fonction. Cette autre fonction sera exécutée juste avant la suppression de votre composant

```javascript
useEffect(() => {
  const timer = setInterval(/* */, 1500);
  // Je renvoie à React la fonction que j'aimerais
  // qu'il execute au willUnmount
  return () => {
    clearInterval(timer);
  }

}, [])

```
