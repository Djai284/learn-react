
// Extracting the Profile Props out of the Gallery component and into the Profile component
interface ScientistProfileProps {
  id: string;
  name: string;
  profession: string;
  awards: string[];
  discovery: string;
}

function ScientistProfile({id, name, profession, awards, discovery}: ScientistProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${id}.jpg`}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ScientistProfile 
        id="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovery="polonium (element)"
      />
      <ScientistProfile 
        id="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
