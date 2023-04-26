import options from "./Options";
import OptionButton from "./OptionButton";
import useChoices from "./useChoices";

export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 prueba">
      <div className="rounded-lg p-4 bg-gray-500 titulo2Super">
        <h1 className="text-3xl mb-4 text-center font-bold titulo">¡A jugar!</h1>
        <p className="titulo21">Elige la opción preferida y mira si puedes ganar o no</p>
        <div className="max-w-md mx-auto titulo2">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
            />
          ))}
          {userChoice !== null && <p className="text-xl mt-4 titulo2">{userMessage}</p>}
          {computerChoice !== null && (
            <p className="text-xl mt-4">{computerMessage}</p>
          )}
          {result !== null && (
            <div className="mt-8">
              {result === 0 && <p className="text-xl mt-4 titulo2">🤷🏽‍♀️ Empate</p>}
              {result === 1 && (
                <p className="text-xl mt-4">
                  ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700 boton"
                onClick={reset}
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
