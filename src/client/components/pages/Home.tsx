import Button from "../Button"

export default function Home() {

    return(
      <>
        <h1>Stop the chrono !</h1>
        <p>
          Cliquez sur le bouton "commencer" pour lancer le timer (attention, le décompte final ne commence que quelques instants après le lancement du jeu). Cliquez ensuite sur le bouton "stop chrono" quand vous pensez avoir atteint l’objectif généré aléatoirement. Enfin, la différence entre l'objectif à atteindre et votre estimation s'afficheront.
        </p>
        <Button />
      </>
    )
}