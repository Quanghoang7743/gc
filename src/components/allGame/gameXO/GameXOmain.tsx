import BoardBody from "./components/BoardBody";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import { CurrentUserProvider } from "./hooks/useCurrentUser";

const GameXOmain = (): JSX.Element => {
  return (
    <CurrentUserProvider>
      <section id="board">
        <div id="board__container">
          
          <BoardHeader />
         
          <BoardBody />

          
          <BoardFooter />
        </div>
      </section>
    </CurrentUserProvider>
  );
};

export default GameXOmain;
