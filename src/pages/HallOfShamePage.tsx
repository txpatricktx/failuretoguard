import { useState } from "react";
import Layout from "@/components/Layout";
import { shameEntries, type ShameEntry } from "@/data/hallOfShame";

const HallOfShamePage = () => {
  const [entries, setEntries] = useState<ShameEntry[]>(shameEntries);
  const [sortBy, setSortBy] = useState<"shame" | "votes">("shame");

  const sorted = [...entries].sort((a, b) =>
    sortBy === "shame" ? b.shameRating - a.shameRating : b.votes - a.votes
  );

  const handleVote = (id: number) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, votes: e.votes + 1 } : e))
    );
  };

  const handcuffs = (rating: number) => "🔗".repeat(rating) + "⬜".repeat(5 - rating);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            🏆 HALL OF SHAME
          </h1>
          <p className="text-lg text-muted-foreground">
            The Worst Guards in Jailbreak History
          </p>
        </div>

        {/* Sort controls */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setSortBy("shame")}
            className={`pixel-btn text-[0.5rem] ${sortBy === "shame" ? "" : "opacity-60"}`}
          >
            Sort: Shame Rating
          </button>
          <button
            onClick={() => setSortBy("votes")}
            className={`pixel-btn text-[0.5rem] ${sortBy === "votes" ? "" : "opacity-60"}`}
          >
            Sort: Community Votes
          </button>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {sorted.map((entry, index) => (
            <div key={entry.id} className="pixel-border bg-card p-4 sm:p-6">
              <div className="flex items-start gap-4">
                {/* Rank & Mugshot */}
                <div className="text-center shrink-0">
                  <div className="font-pixel text-[0.5rem] text-muted-foreground mb-1">
                    #{index + 1}
                  </div>
                  <div className="text-4xl sm:text-5xl bg-secondary pixel-border w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {entry.mugshot}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary">
                      {entry.name}
                    </h3>
                    <span className="font-pixel text-[0.4rem] bg-accent text-accent-foreground px-2 py-0.5">
                      {entry.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    {entry.incident}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <span className="font-pixel text-[0.4rem] text-muted-foreground">SHAME: </span>
                      <span className="text-sm">{handcuffs(entry.shameRating)}</span>
                    </div>
                    <button
                      onClick={() => handleVote(entry.id)}
                      className="pixel-btn text-[0.4rem] py-1 px-3"
                    >
                      👎 WORST ({entry.votes})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HallOfShamePage;
