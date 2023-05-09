import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./assets/context/PokemonProvider";

function App() {
  
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
  
  
}

export default App;

