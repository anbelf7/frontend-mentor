import ChallengeCard from '../components/ChallengeCard';
import { challenges } from '../lib/challenges';

export default function Home() {
  return (
    <div className="grid gap-10 sm:mx-auto sm:max-w-sm md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
      {challenges?.map((challenge) => (
        <ChallengeCard
          key={challenge.title}
          title={challenge.title}
          url={challenge.url}
          image={challenge.image}
          tag={challenge.tag}
        />
      ))}
    </div>
  );
}
