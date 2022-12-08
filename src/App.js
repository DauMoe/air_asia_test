import './App.scss';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <Card
        userId={1}
        imageUrl={"/avatar/gentlement.png"}
        status={"active"}
        name={"Alfie Harrison"}
        description={"Sydney, Australia"}
        position={"Stratery director"}
        progress={40}
      />
    </div>
  );
}

export default App;
