import {Card} from "./components/card"
import "./App.css"

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <div className="Container">
    <Card 
      image="https://kochamykoty.pl/wp-content/uploads/2021/10/felinoterapia-terapia-kotem.jpg" 
      title="Felinotherapy" 
      text="While many felines can be calming, therapy cats have been trained to do therapy work, 
      which may include using their natural instincts to provide comfort. 
      Typically, therapy cats are gentle and outgoing."
      />
    <Card
      image="https://api.ngo.pl/media/get/4813?w=640&h=480"
      title="Kynotherapy (Dogotherapy)"
      text="Kynotherapy (Dogotherapy) is a method in rehabilitation with the participation of dogs. 
      The therapy is mainly used when working with children with motor and intellectual disabilities. "
    />
    <Card
    image="https://www.dolphinswim.net/wp-content/uploads/2021/12/KNK_6406-1.jpg"
    title="Dolphin therapy"
    text="Dolphin Assisted Therapy (DAT) is a form of animal‐assisted therapy (AAT) 
    in which children or adults with various conditions interact with or swim with live captive dolphins. 
    DAT is advertised as therapy for a wide range of physical and psychological conditions."
    />
  </div>
  )
}

export default App
