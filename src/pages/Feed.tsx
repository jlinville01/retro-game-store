import { GameCard } from '@/components/GameCard';
import pokemonYellow from '@/assets/pokemon-yellow.jpg';
import kirbyDreamLand2 from '@/assets/kirby-dream-land-2.jpg';
import tetris from '@/assets/tetris.jpg';
import zeldaLinksAwakening from '@/assets/zelda-links-awakening.jpg';
import superMarioLand from '@/assets/super-mario-land.jpg';
import donkeyKong from '@/assets/donkey-kong.jpg';
import metroid2 from '@/assets/metroid-2.jpg';
import pokemonRed from '@/assets/pokemon-red.jpg';
import drMario from '@/assets/dr-mario.jpg';
import warioLand from '@/assets/wario-land.jpg';

const games = [
  { id: 1, title: 'Pokemon Yellow', price: 34.99, image: pokemonYellow },
  { id: 2, title: "Kirby's Dream Land 2", price: 29.99, image: kirbyDreamLand2 },
  { id: 3, title: 'Tetris', price: 19.99, image: tetris },
  { id: 4, title: "The Legend of Zelda: Link's Awakening", price: 39.99, image: zeldaLinksAwakening },
  { id: 5, title: 'Super Mario Land', price: 24.99, image: superMarioLand },
  { id: 6, title: 'Donkey Kong', price: 22.99, image: donkeyKong },
  { id: 7, title: 'Metroid II: Return of Samus', price: 32.99, image: metroid2 },
  { id: 8, title: 'Pokemon Red', price: 34.99, image: pokemonRed },
  { id: 9, title: 'Dr. Mario', price: 18.99, image: drMario },
  { id: 10, title: 'Wario Land', price: 27.99, image: warioLand },
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Classic Game Boy Collection
          </h2>
          <p className="text-muted-foreground">
            Discover nostalgic gaming treasures from the golden age of handheld gaming
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {games.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </main>
    </div>
  );
}
